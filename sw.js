// =============================================================================
// CREW 2.0 — Service Worker (versão defensiva pra iOS Safari)
// Trata redirects (problema conhecido do iOS) e nunca cacheia respostas com redirect.
// =============================================================================

const CACHE_VERSION = 'crew-v11-2026-06-07-f1';
const SHELL = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './data/workouts.js',
  './data/substitutions.js',
  './data/calendar.js',
  './data/imagepages.js',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Helper: faz fetch seguindo redirects e devolve uma resposta CLONADA (sem histórico de redirect)
async function safeFetch(request) {
  try {
    const response = await fetch(request, { redirect: 'follow' });
    // Se a resposta veio de um redirect, recria pra remover o histórico (iOS é estrito sobre isso)
    if (response.redirected) {
      const body = await response.blob();
      return new Response(body, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      });
    }
    return response;
  } catch (err) {
    throw err;
  }
}

// Install: pré-cacheia o shell. Erros individuais não derrubam tudo.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(async (cache) => {
      await Promise.all(SHELL.map(async (url) => {
        try {
          const res = await safeFetch(new Request(url, { cache: 'reload' }));
          if (res.ok) await cache.put(url, res);
        } catch (e) {
          console.warn('SW install: falhou em', url, e);
        }
      }));
      await self.skipWaiting();
    })
  );
});

// Activate: limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: estratégia segura
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Só intercepta GET no mesmo origin
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  // Navegação (HTML): NUNCA cachear a resposta inicial — sempre rede com fallback de cache
  // Isso evita o erro "service worker has redirections" no iOS
  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const res = await safeFetch(req);
          return res;
        } catch {
          const cache = await caches.open(CACHE_VERSION);
          return (await cache.match('./index.html')) || Response.error();
        }
      })()
    );
    return;
  }

  // Imagens: cache-first, atualiza em background (sem histórico de redirect)
  if (url.pathname.match(/\.(jpg|jpeg|png|svg|webp)$/i) || url.pathname.includes('/images/')) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) {
          // Atualiza em background
          safeFetch(req).then((res) => {
            if (res && res.ok) cache.put(req, res.clone());
          }).catch(() => {});
          return cached;
        }
        try {
          const res = await safeFetch(req);
          if (res.ok) cache.put(req, res.clone());
          return res;
        } catch {
          return Response.error();
        }
      })
    );
    return;
  }

  // Outros (CSS, JS, JSON): cache-first com fallback de rede
  event.respondWith(
    caches.open(CACHE_VERSION).then(async (cache) => {
      const cached = await cache.match(req);
      if (cached) return cached;
      try {
        const res = await safeFetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      } catch {
        return Response.error();
      }
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
