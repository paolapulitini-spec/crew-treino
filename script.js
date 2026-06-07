// =============================================================================
// CREW 2.0 — Lógica do App
// Modo: escolha livre de treino (calendário é só sugestão)
// =============================================================================

// ============ STATE ============
const STORE = {
  STATE: 'crew:state',
  CARGAS: 'crew:cargas',
  HISTORY: 'crew:history',
  SUBS: 'crew:subs',
  REGULAGENS: 'crew:regulagens'
};

const DEFAULT_STATE = {
  currentWeek: 1,        // 1..6 (avanço manual)
  hipertrofiaOnly: true, // padrão: só hipertrofia
  showMetabolic: false   // mostrar fichas metabólicas no picker
};

let state = loadJSON(STORE.STATE, DEFAULT_STATE);
let cargas = loadJSON(STORE.CARGAS, {});
let history = loadJSON(STORE.HISTORY, []);
let subs = loadJSON(STORE.SUBS, {});
let regulagens = loadJSON(STORE.REGULAGENS, {});

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function persist() {
  saveJSON(STORE.STATE, state);
  saveJSON(STORE.CARGAS, cargas);
  saveJSON(STORE.HISTORY, history);
  saveJSON(STORE.SUBS, subs);
  saveJSON(STORE.REGULAGENS, regulagens);
}

// ============ FICHAS DISPONÍVEIS ============
// Hipertrofia (foco principal da Paola)
const FICHAS_HIPERTROFIA = ['A', 'B', 'C', 'D', 'CAMINHADA'];
const FICHAS_METABOLICAS = [];

function getAvailableFichas() {
  if (state.hipertrofiaOnly && !state.showMetabolic) {
    return FICHAS_HIPERTROFIA;
  }
  return [...FICHAS_HIPERTROFIA, ...FICHAS_METABOLICAS];
}

// Sugestão do dia (baseada no calendário oficial, só pra mostrar como dica)
function getCalendarSuggestion() {
  const cal = state.hipertrofiaOnly ? getCalendarHipertrofiaOnly() : CALENDAR_5X;
  const week = cal[state.currentWeek - 1];
  if (!week) return null;
  // Procura primeiro treino da semana que NÃO foi feito ainda
  for (const day of week) {
    const alreadyDone = history.some(h =>
      h.week === state.currentWeek && h.ficha === day.ficha
    );
    if (!alreadyDone) return day;
  }
  return week[0]; // se já fez todos da semana, sugere o primeiro
}

// ============ CARGAS ============
function cargaKey(week, fichaId, blockId, exerciseIdx) {
  return `${week}_${fichaId}_${blockId}_${exerciseIdx}`;
}

function getCarga(week, fichaId, blockId, exerciseIdx) {
  return cargas[cargaKey(week, fichaId, blockId, exerciseIdx)] || '';
}

function getLastCarga(fichaId, blockId, exerciseIdx) {
  for (let w = state.currentWeek; w >= 1; w--) {
    const k = cargaKey(w, fichaId, blockId, exerciseIdx);
    if (cargas[k]) return { value: cargas[k], week: w };
  }
  return null;
}

function setCarga(week, fichaId, blockId, exerciseIdx, value) {
  cargas[cargaKey(week, fichaId, blockId, exerciseIdx)] = value;
  saveJSON(STORE.CARGAS, cargas);
}

// ============ REGULAGENS (configuração da máquina, global por exercício) ============
function regKey(fichaId, blockId, exerciseIdx) {
  return `${fichaId}_${blockId}_${exerciseIdx}`;
}

function getRegulagem(fichaId, blockId, exerciseIdx) {
  return regulagens[regKey(fichaId, blockId, exerciseIdx)] || '';
}

function setRegulagem(fichaId, blockId, exerciseIdx, value) {
  const k = regKey(fichaId, blockId, exerciseIdx);
  if (value) regulagens[k] = value.slice(0, 15);
  else delete regulagens[k];
  saveJSON(STORE.REGULAGENS, regulagens);
}

// ============ SUBSTITUIÇÕES ============
function subKey(fichaId, blockId, exerciseIdx) {
  return `${fichaId}_${blockId}_${exerciseIdx}`;
}

function getSubstitute(fichaId, blockId, exerciseIdx) {
  return subs[subKey(fichaId, blockId, exerciseIdx)] || null;
}

function setSubstitute(fichaId, blockId, exerciseIdx, name) {
  if (name) {
    subs[subKey(fichaId, blockId, exerciseIdx)] = name;
  } else {
    delete subs[subKey(fichaId, blockId, exerciseIdx)];
  }
  saveJSON(STORE.SUBS, subs);
}

// ============ RENDER: HOJE (picker) ============
function renderHoje() {
  const view = document.getElementById('view-hoje');
  const suggestion = getCalendarSuggestion();
  const last = history.length > 0 ? history[history.length - 1] : null;
  const progressao = PROGRESSAO_CARGA[state.currentWeek - 1];
  const fichas = getAvailableFichas();

  // Treinos feitos nesta semana
  const weekDone = history.filter(h => h.week === state.currentWeek).map(h => h.ficha);

  let html = `
    <div class="week-banner">
      <div class="week-banner-row">
        <div>
          <div class="week-label">Você está na</div>
          <div class="week-num">Semana ${state.currentWeek}</div>
        </div>
        <div class="week-actions">
          <button class="week-btn" id="prevWeekBtn" ${state.currentWeek <= 1 ? 'disabled' : ''}>←</button>
          <button class="week-btn" id="nextWeekBtn" ${state.currentWeek >= 11 ? 'disabled' : ''}>→</button>
        </div>
      </div>
      <div class="progressao-pill ${progressao.acao}">
        ${progressao.acao === 'AUMENTA' ? '📈' : progressao.acao === 'BASE' ? '🎯' : '🔁'} ${progressao.acao} — ${progressao.instrucao}
      </div>
    </div>
  `;

  // Sugestão (pequena, opcional)
  if (suggestion) {
    const suggestedFicha = WORKOUTS[suggestion.ficha];
    if (suggestedFicha) {
      html += `
        <div class="suggestion-card" onclick="openTreino('${suggestion.ficha}')">
          <div class="suggestion-label">💡 Sugestão de hoje</div>
          <div class="suggestion-content">
            <div class="suggestion-ficha">${suggestedFicha.id}</div>
            <div class="suggestion-focus">${suggestedFicha.focus}</div>
          </div>
          <div class="suggestion-arrow">→</div>
        </div>
      `;
    }
  }

  // Picker de fichas
  html += `<div class="section-title">Escolha seu treino</div>`;
  html += `<div class="ficha-grid">`;

  fichas.forEach(fichaId => {
    const ficha = WORKOUTS[fichaId];
    if (!ficha) return;
    const done = weekDone.includes(fichaId);
    const cardClass = getFichaCardClass(ficha);
    html += `
      <button class="ficha-card ${cardClass} ${done ? 'done' : ''}" onclick="openTreino('${fichaId}')">
        <div class="ficha-card-id">${ficha.id}</div>
        <div class="ficha-card-focus">${ficha.focus}</div>
        <div class="ficha-card-meta">
          <span>${ficha.blocks.length} blocos</span>
          ${done ? '<span class="done-badge">✓ Feito</span>' : ''}
        </div>
      </button>
    `;
  });
  html += `</div>`;

  // Toggle mostrar metabólicas (se hipertrofia only ativo)
  if (state.hipertrofiaOnly) {
    html += `
      <button class="toggle-meta" id="toggleMeta">
        ${state.showMetabolic ? '➖ Ocultar fichas Metabólicas' : '➕ Mostrar fichas Metabólicas'}
      </button>
    `;
  }

  // Último treino
  if (last) {
    const lastFicha = WORKOUTS[last.ficha];
    html += `
      <div class="section-title">Último treino</div>
      <div class="summary-card">
        <div class="row">
          <span class="label">Ficha</span>
          <span class="value">${last.ficha} · ${lastFicha?.focus || ''}</span>
        </div>
        <div class="row">
          <span class="label">Quando</span>
          <span class="value">${formatDate(last.date)}</span>
        </div>
        <div class="row">
          <span class="label">Semana</span>
          <span class="value">Semana ${last.week}</span>
        </div>
      </div>
    `;
  }

  view.innerHTML = html;

  // Bind events
  document.getElementById('prevWeekBtn').addEventListener('click', () => {
    if (state.currentWeek > 1) {
      state.currentWeek--;
      persist();
      renderHoje();
      showToast(`← Semana ${state.currentWeek}`);
    }
  });
  document.getElementById('nextWeekBtn').addEventListener('click', () => {
    if (state.currentWeek < 11) {
      if (confirm(`Avançar para a Semana ${state.currentWeek + 1}?\n\nLembrete: ${PROGRESSAO_CARGA[state.currentWeek].instrucao}`)) {
        state.currentWeek++;
        persist();
        renderHoje();
        showToast(`→ Semana ${state.currentWeek}`);
      }
    }
  });

  const toggle = document.getElementById('toggleMeta');
  if (toggle) {
    toggle.addEventListener('click', () => {
      state.showMetabolic = !state.showMetabolic;
      persist();
      renderHoje();
    });
  }
}

function getFichaCardClass(ficha) {
  if (ficha.type === 'hibrido') return 'card-orange';
  if (ficha.grupo === 'Membros Superiores') return 'card-green';
  return 'card-purple';
}

function formatDate(iso) {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now - d;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Hoje';
  if (diffDays === 1) return 'Ontem';
  if (diffDays < 7) return `${diffDays} dias atrás`;

  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  return `${days[d.getDay()]}, ${d.getDate()}/${(d.getMonth() + 1).toString().padStart(2, '0')}`;
}

// ============ RENDER: TREINO ============
function openTreino(fichaId) {
  const ficha = WORKOUTS[fichaId];
  if (!ficha) {
    alert('Ficha não encontrada');
    return;
  }

  const view = document.getElementById('view-treino');

  // Referência do PDF: todas as páginas do treino, num carrossel deslizável horizontalmente
  const pages = getFichaPageList(fichaId);
  const refTitle = `${ficha.name} — ${ficha.focus} · Semana ${state.currentWeek}`;
  const carouselHTML = pages.length > 0 ? `
    <div class="pdf-reference">
      <div class="pdf-ref-header">
        <span class="pdf-ref-label">📄 Referência do PDF</span>
        <span class="pdf-ref-hint">deslize → ou toque pra ampliar</span>
      </div>
      <div class="pdf-carousel" id="pdfCarousel">
        ${pages.map((p, i) => {
          const path = getWorkoutImagePath(p);
          return `
            <div class="pdf-slide" onclick="openImageViewer('${path}', '${escapeAttr(refTitle)} (pág ${p})')">
              <img src="${path}" alt="Página ${p}" loading="lazy">
              <div class="pdf-slide-num">${i + 1}/${pages.length}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  ` : '';

  let html = `
    <div class="treino-header">
      <span class="ficha-tag">${ficha.type === 'metabolico' ? 'Metabólico' : ficha.type === 'hibrido' ? 'Full Body' : 'Hipertrofia'} · Semana ${state.currentWeek}</span>
      <h2>${ficha.name}</h2>
      <div class="focus">${ficha.focus}</div>
    </div>

    ${carouselHTML}

    <div class="aquecimento">
      <div class="icon">⚡</div>
      <div class="info">
        <div class="title">Aquecimento</div>
        <div class="name">${ficha.warmup.name}</div>
      </div>
      <div class="duration">${ficha.warmup.duration}</div>
    </div>
  `;

  ficha.blocks.forEach(block => {
    html += renderBloco(ficha.id, block);
  });

  html += `<button class="finish-btn" id="finishBtn">✓ Marcar treino como feito</button>`;

  view.innerHTML = html;
  switchView('treino');

  document.getElementById('topBarTitle').textContent = ficha.name;
  document.getElementById('topBarSubtitle').textContent = ficha.focus;

  view.querySelectorAll('.bloco-header').forEach(h => {
    h.addEventListener('click', () => h.parentElement.classList.toggle('collapsed'));
  });

  view.querySelectorAll('.carga-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const { fichaId: fid, blockId, exIdx } = e.target.dataset;
      setCarga(state.currentWeek, fid, blockId, parseInt(exIdx, 10), e.target.value);
    });
    input.addEventListener('blur', () => showToast('✓ Carga salva'));
  });

  view.querySelectorAll('.regulagem-input').forEach(input => {
    // Atualiza contador inicial
    const counter = input.nextElementSibling;
    if (counter && counter.classList.contains('char-counter')) {
      counter.textContent = `${input.value.length}/15`;
    }
    input.addEventListener('input', (e) => {
      const { fichaId: fid, blockId, exIdx } = e.target.dataset;
      setRegulagem(fid, blockId, parseInt(exIdx, 10), e.target.value);
      const c = e.target.nextElementSibling;
      if (c && c.classList.contains('char-counter')) {
        c.textContent = `${e.target.value.length}/15`;
      }
    });
    input.addEventListener('blur', () => showToast('⚙ Regulagem salva'));
  });

  view.querySelectorAll('.sub-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const { fichaId: fid, blockId, exIdx, exName } = btn.dataset;
      openSubsModal(fid, blockId, parseInt(exIdx, 10), exName);
    });
  });

  document.getElementById('finishBtn').addEventListener('click', () => finishTreino(fichaId));
}

function renderBloco(fichaId, block) {
  let html = `
    <div class="bloco">
      <div class="bloco-header">
        <div>
          <h3>${block.name}${block.isOptional ? ' <span style="font-weight:500;color:var(--text-muted);font-size:13px;">(opcional)</span>' : ''}</h3>
          <div class="bloco-meta">${block.subtitle} · ${block.series} ${block.series > 1 ? 'séries' : 'série'}</div>
        </div>
        <span class="chevron">▼</span>
      </div>
      <div class="bloco-body">
  `;

  block.exercises.forEach((ex, idx) => {
    if (ex.isSection) {
      html += `<div class="exercise-section">${escapeHtml(ex.name)}</div>`;
      return;
    }
    if (ex.isRest) {
      html += `<div class="exercise-rest">${escapeHtml(ex.name)}: <strong>${escapeHtml(ex.reps)}</strong></div>`;
      return;
    }
    html += renderExercise(fichaId, block.id, ex, idx);
  });

  if (block.observacao) {
    html += `<div class="observacao"><strong>Observação</strong>${escapeHtml(block.observacao)}</div>`;
  }
  if (block.aumento) {
    html += `<div class="aumento-hint"><strong>📈 Aumento de carga:</strong> ${escapeHtml(block.aumento)}</div>`;
  }

  html += `</div></div>`;
  return html;
}

function renderExercise(fichaId, blockId, ex, idx) {
  const substituteName = getSubstitute(fichaId, blockId, idx);
  const displayName = substituteName || ex.name;
  const wasReplaced = !!substituteName;
  const currentCarga = getCarga(state.currentWeek, fichaId, blockId, idx);
  const lastCarga = !currentCarga && state.currentWeek > 1 ? getLastCarga(fichaId, blockId, idx) : null;
  const hasCargaField = !!(ex.reps || ex.carga);

  return `
    <div class="exercise ${wasReplaced ? 'replaced' : ''}">
      <div class="exercise-name">
        <span>
          ${escapeHtml(displayName)}
          ${wasReplaced ? '<span class="tag-replaced">substituído</span>' : ''}
          ${wasReplaced ? `<div class="original-name">Original: ${escapeHtml(ex.name)}</div>` : ''}
        </span>
        <button class="sub-btn" data-ficha-id="${fichaId}" data-block-id="${blockId}" data-ex-idx="${idx}" data-ex-name="${escapeAttr(ex.name)}">Substituir</button>
      </div>
      ${(ex.reps || ex.carga) ? `
        <div class="exercise-details">
          ${ex.reps ? `<strong>${escapeHtml(ex.reps)}</strong>` : ''}
          ${ex.reps && ex.carga ? ' · ' : ''}
          ${ex.carga ? escapeHtml(ex.carga) : ''}
        </div>
      ` : ''}
      ${hasCargaField ? `
        <div class="carga-row">
          <label>Carga</label>
          <input
            class="carga-input"
            type="text"
            placeholder="${lastCarga ? `Última: ${escapeAttr(lastCarga.value)} (sem ${lastCarga.week})` : 'ex: 20 kg'}"
            value="${escapeAttr(currentCarga)}"
            data-ficha-id="${fichaId}"
            data-block-id="${blockId}"
            data-ex-idx="${idx}"
            inputmode="text"
          >
        </div>
        <div class="regulagem-row">
          <label>⚙ Regulagem</label>
          <input
            class="regulagem-input"
            type="text"
            maxlength="15"
            placeholder="ex: altura 7"
            value="${escapeAttr(getRegulagem(fichaId, blockId, idx))}"
            data-ficha-id="${fichaId}"
            data-block-id="${blockId}"
            data-ex-idx="${idx}"
            inputmode="text"
          >
          <span class="char-counter">0/15</span>
        </div>
      ` : ''}
    </div>
  `;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeAttr(s) {
  return escapeHtml(s);
}

// ============ FINALIZAR TREINO ============
function finishTreino(fichaId) {
  const ficha = WORKOUTS[fichaId];
  if (!ficha) return;

  if (!confirm(`Marcar ${ficha.name} (${ficha.focus}) como feito?\n\nSemana ${state.currentWeek}`)) return;

  // Snapshot das cargas do treino atual
  const snapshot = {};
  Object.entries(cargas).forEach(([k, v]) => {
    if (k.startsWith(`${state.currentWeek}_${fichaId}_`)) snapshot[k] = v;
  });

  history.push({
    date: new Date().toISOString(),
    ficha: fichaId,
    week: state.currentWeek,
    cargas: snapshot
  });

  persist();

  showToast(`🎉 ${fichaId} finalizado!`);
  setTimeout(() => switchView('hoje'), 600);
}

// ============ RENDER: CALENDÁRIO ============
function renderCalendario() {
  const view = document.getElementById('view-calendario');
  const cal = state.hipertrofiaOnly ? getCalendarHipertrofiaOnly() : CALENDAR_5X;

  let html = `
    <div class="info-banner">
      💡 O calendário abaixo é apenas uma <strong>sugestão</strong>. Você pode treinar qualquer ficha em qualquer ordem.
    </div>

    <div class="mode-switch">
      <button class="${state.hipertrofiaOnly ? 'active' : ''}" id="modeHip">Só Hipertrofia</button>
      <button class="${!state.hipertrofiaOnly ? 'active' : ''}" id="modeFull">Calendário oficial</button>
    </div>

    <div class="section-title">Programa sugerido — 6 semanas</div>
  `;

  cal.forEach((week, wIdx) => {
    const weekNum = wIdx + 1;
    const isCurrent = weekNum === state.currentWeek;
    const progressao = PROGRESSAO_CARGA[wIdx];
    const weekDone = history.filter(h => h.week === weekNum).map(h => h.ficha);

    html += `
      <div class="week-card ${isCurrent ? 'current' : ''}">
        <h3>
          <span>Semana ${weekNum}${isCurrent ? ' · atual' : ''}</span>
          <span class="progressao ${progressao.acao}">${progressao.acao}</span>
        </h3>
        <div class="day-list">
          ${week.map((day) => {
            const isDone = weekDone.includes(day.ficha);
            return `
              <button class="day-pill ${isDone ? 'done' : ''}"
                      onclick="openTreino('${day.ficha}')">
                ${day.ficha}
              </button>
            `;
          }).join('')}
        </div>
        <div class="progressao-info">${progressao.instrucao}</div>
      </div>
    `;
  });

  view.innerHTML = html;

  document.getElementById('modeHip').addEventListener('click', () => {
    state.hipertrofiaOnly = true;
    persist();
    renderCalendario();
    renderHoje();
  });
  document.getElementById('modeFull').addEventListener('click', () => {
    state.hipertrofiaOnly = false;
    persist();
    renderCalendario();
    renderHoje();
  });
}

// ============ RENDER: HISTÓRICO ============
function renderHistorico() {
  const view = document.getElementById('view-historico');
  if (history.length === 0) {
    view.innerHTML = `
      <div class="empty-state">
        <div class="icon">↻</div>
        <div class="title">Nenhum treino registrado ainda</div>
        <div class="subtitle">Quando você finalizar seu primeiro treino, ele aparece aqui.</div>
      </div>
    `;
    return;
  }

  // Agrupar por semana
  const byWeek = {};
  history.forEach(h => {
    if (!byWeek[h.week]) byWeek[h.week] = [];
    byWeek[h.week].push(h);
  });

  const weeks = Object.keys(byWeek).sort((a, b) => parseInt(b) - parseInt(a));

  let html = `<div class="section-title">Histórico — ${history.length} treino${history.length > 1 ? 's' : ''}</div>`;

  weeks.forEach(week => {
    const items = byWeek[week].slice().reverse();
    html += `<div class="history-week-label">Semana ${week}</div>`;
    items.forEach(h => {
      const ficha = WORKOUTS[h.ficha];
      const cargasList = Object.values(h.cargas || {}).filter(Boolean);
      html += `
        <div class="history-item">
          <div class="info">
            <div class="ficha">${h.ficha} · ${ficha?.focus || ''}</div>
            <div class="date">${formatDate(h.date)}${cargasList.length ? ` · ${cargasList.length} cargas anotadas` : ''}</div>
          </div>
          <span class="badge">✓</span>
        </div>
      `;
    });
  });

  html += `<div style="margin-top:24px;text-align:center;"><button class="icon-btn" id="clearHistory" style="width:auto;padding:10px 18px;border-radius:10px;font-size:13px;color:var(--red);">Limpar histórico</button></div>`;

  view.innerHTML = html;

  document.getElementById('clearHistory').addEventListener('click', () => {
    if (confirm('Apagar todo o histórico? Isso não pode ser desfeito.')) {
      history = [];
      persist();
      renderHistorico();
      renderHoje();
    }
  });
}

// ============ RENDER: SUBSTITUIÇÕES ============
function renderSubsList(query = '') {
  const list = document.getElementById('subsList');
  const q = query.trim().toLowerCase();
  const keys = Object.keys(SUBSTITUTIONS);
  const filtered = q ? keys.filter(k => k.toLowerCase().includes(q)) : keys;

  if (filtered.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="icon">⇄</div><div class="title">Nenhum exercício encontrado</div><div class="subtitle">Tente outro termo de busca.</div></div>';
    return;
  }

  list.innerHTML = filtered.slice(0, 80).map(key => {
    const alts = SUBSTITUTIONS[key];
    const muscle = alts[0]?.muscle || '';
    return `
      <div class="sub-group">
        <div class="original">${escapeHtml(key)}</div>
        <span class="muscle-tag">${escapeHtml(muscle)}</span>
        <div class="arrow">Substitua por</div>
        ${alts.map(a => `<div class="alt">${escapeHtml(a.name)}</div>`).join('')}
      </div>
    `;
  }).join('');
}

// ============ MODAL ============
let activeModalCtx = null;

function openSubsModal(fichaId, blockId, exIdx, originalName) {
  activeModalCtx = { fichaId, blockId, exIdx, originalName };
  const modal = document.getElementById('modal');
  const body = document.getElementById('modalBody');
  document.getElementById('modalTitle').textContent = 'Substituir exercício';
  document.getElementById('modalSubtitle').textContent = originalName;

  const alts = findSubstitutions(originalName);
  const current = getSubstitute(fichaId, blockId, exIdx);
  const subPage = getSubImagePage(originalName);
  const subImgPath = getSubImagePath(subPage);

  let html = '';

  // Imagem da página de substituições (se houver)
  if (subImgPath) {
    html += `
      <div class="modal-photo" onclick="openImageViewer('${subImgPath}', '${escapeAttr('Substituições — ' + originalName)}')">
        <img src="${subImgPath}" alt="Substituições do PDF" loading="lazy">
        <div class="block-photo-zoom">🔍 Toque pra ampliar</div>
      </div>
    `;
  }

  html += `<div class="alt ${!current ? 'selected' : ''}" data-name="">
    <span>↩ Manter original</span>
    <span class="check">✓</span>
  </div>`;

  if (alts.length === 0) {
    html += '<div style="padding:14px;color:var(--text-muted);font-size:14px;text-align:center;">Sem substituições mapeadas. Digite uma abaixo:</div>';
  } else {
    alts.forEach(a => {
      html += `<div class="alt ${current === a.name ? 'selected' : ''}" data-name="${escapeAttr(a.name)}">
        <span>${escapeHtml(a.name)}</span>
        <span class="check">✓</span>
      </div>`;
    });
  }

  html += `
    <div style="margin-top:14px;">
      <input type="text" id="customSub" placeholder="Outra substituição..."
             value="${current && !alts.some(a => a.name === current) ? escapeAttr(current) : ''}"
             style="width:100%;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:12px 14px;color:var(--text);font-size:15px;outline:none;">
    </div>
  `;

  body.innerHTML = html;
  modal.classList.add('open');

  body.querySelectorAll('.alt').forEach(el => {
    el.addEventListener('click', () => {
      const name = el.dataset.name || '';
      setSubstitute(fichaId, blockId, exIdx, name || null);
      closeModal();
      openTreino(fichaId);
      showToast(name ? `→ ${name}` : '↩ Original restaurado');
    });
  });

  document.getElementById('customSub').addEventListener('change', (e) => {
    const v = e.target.value.trim();
    if (v) {
      setSubstitute(fichaId, blockId, exIdx, v);
      closeModal();
      openTreino(fichaId);
      showToast(`→ ${v}`);
    }
  });
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  activeModalCtx = null;
}

// ============ FULLSCREEN IMAGE VIEWER ============
function openImageViewer(src, title = '') {
  const viewer = document.getElementById('imageViewer');
  const img = document.getElementById('imageViewerImg');
  const ttl = document.getElementById('imageViewerTitle');
  img.src = src;
  ttl.textContent = title || '';
  viewer.classList.add('open');
}

function closeImageViewer() {
  document.getElementById('imageViewer').classList.remove('open');
}

window.openImageViewer = openImageViewer;
window.closeImageViewer = closeImageViewer;

// ============ NAV ============
function switchView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.dataset.view === name));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.target === name));

  const titles = {
    hoje: { title: 'Meu Treino', sub: 'Escolha o que treinar hoje' },
    treino: { title: '', sub: '' },
    calendario: { title: 'Semanas', sub: 'Programa sugerido · 6 semanas' },
    historico: { title: 'Histórico', sub: '' },
    subs: { title: 'Substituições', sub: 'Guia by Gabriela Bahia' }
  };
  const t = titles[name];
  if (t && t.title !== undefined && t.title !== '') {
    document.getElementById('topBarTitle').textContent = t.title;
    document.getElementById('topBarSubtitle').textContent = t.sub;
  }

  if (name === 'hoje') renderHoje();
  if (name === 'calendario') renderCalendario();
  if (name === 'historico') renderHistorico();
  if (name === 'subs') renderSubsList(document.getElementById('searchSubs').value);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ TOAST ============
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

// ============ SETTINGS ============
function openSettings() {
  const choice = prompt(
    'Configurações:\n\n' +
    '1 = Avançar semana →\n' +
    '2 = Voltar semana ←\n' +
    '3 = Resetar para Semana 1\n' +
    '4 = Limpar todas as cargas anotadas\n' +
    '5 = Exportar backup (JSON)\n' +
    '6 = Importar backup (JSON)\n\n' +
    'Digite o número:'
  );
  if (choice === '1') {
    if (state.currentWeek < 11) {
      state.currentWeek++;
      persist();
      renderHoje();
      showToast(`→ Semana ${state.currentWeek}`);
    } else showToast('Já está na última semana');
  } else if (choice === '2') {
    if (state.currentWeek > 1) {
      state.currentWeek--;
      persist();
      renderHoje();
      showToast(`← Semana ${state.currentWeek}`);
    } else showToast('Já está na primeira semana');
  } else if (choice === '3') {
    if (confirm('Resetar para Semana 1?')) {
      state.currentWeek = 1;
      persist();
      renderHoje();
      showToast('↺ Reiniciado');
    }
  } else if (choice === '4') {
    if (confirm('Apagar todas as cargas anotadas? Histórico é mantido.')) {
      cargas = {};
      saveJSON(STORE.CARGAS, cargas);
      showToast('✗ Cargas limpas');
    }
  } else if (choice === '5') {
    const data = { state, cargas, history, subs, regulagens, _exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `crew-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  } else if (choice === '6') {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const text = await file.text();
      try {
        const data = JSON.parse(text);
        if (!confirm('Substituir dados atuais pelo backup?')) return;
        if (data.state) state = data.state;
        if (data.cargas) cargas = data.cargas;
        if (data.history) history = data.history;
        if (data.subs) subs = data.subs;
        if (data.regulagens) regulagens = data.regulagens;
        persist();
        renderHoje();
        showToast('✓ Backup importado');
      } catch (err) {
        alert('Arquivo inválido: ' + err.message);
      }
    };
    input.click();
  }
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.target));
  });

  document.getElementById('settingsBtn').addEventListener('click', openSettings);

  document.getElementById('searchSubs').addEventListener('input', (e) => renderSubsList(e.target.value));

  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  renderHoje();

  console.log('CREW 2.0 carregado. Estado:', state);

  // Registra o Service Worker pra funcionar offline (PWA real)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then((reg) => {
        console.log('Service Worker registrado:', reg.scope);
        // Checa por updates periodicamente
        setInterval(() => reg.update(), 60 * 60 * 1000); // a cada 1h
      })
      .catch((err) => console.warn('SW falhou:', err));

    // Pede ao browser pra manter o storage persistente (evita limpar localStorage)
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().then((granted) => {
        console.log('Storage persistente:', granted ? '✅' : '⚠️');
      });
    }
  }
});

window.openTreino = openTreino;
