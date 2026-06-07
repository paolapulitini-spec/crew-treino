// =============================================================================
// CREW 2.0 — Mapa de imagens (MAMA CREW 1º TRIMESTRE, 25 páginas)
// =============================================================================

const WORKOUT_PAGES = {
  A: {
    A: 3,    // Agachamento Smith + Deslocamento lateral
    B: 4,    // Leg press + Panturrilha
    C: 5,    // Afundo step + Passada
    D: 6,    // Cadeira extensora
    E: 7     // Agachamento com peso a frente
  },
  B: {
    A: 9,    // Supino inclinado + Tríceps coice + Elevação lateral
    B: 11,   // Remada alta + Tríceps corda + Perdigueiro
    C: 12,   // Desenvolvimento Arnold + Ombro abre e fecha
    D: 13    // Voador + Tríceps francês
  },
  C: {
    A1: 16,  // Ativação: Elevação pélvica + Extensão quadril + Good morning
    A: 17,   // Agachamento sumô + Elevação pélvica unilateral
    B: 18,   // Stiff + 4 apoios
    C: 20,   // Cadeira flexora + Agachamento tronco inclinado
    D: 21    // Cadeira abdutora
  },
  D: {
    A: 23,   // Pulley anterior + Rosca 15
    B: 24,   // Remada máquina + Remada unilateral
    C: 24,   // Crucifixo inverso + Snatch
    D: 25    // Barra Gravitón/Pulley triângulo + Perdigueiro
  }
};

const SUB_PAGES = {};

function getFichaPageList(fichaId) {
  const map = WORKOUT_PAGES[fichaId];
  if (!map) return [];
  const pages = [...new Set(Object.values(map))].sort((a, b) => a - b);
  // Add adjacent image pages
  const extra = {
    A: [4, 5, 6, 7],
    B: [10],
    C: [17, 19]
  };
  if (extra[fichaId]) {
    extra[fichaId].forEach(p => { if (!pages.includes(p)) pages.push(p); });
    pages.sort((a, b) => a - b);
  }
  return pages;
}

function getWorkoutImagePath(pageNum) {
  const padded = String(pageNum).padStart(2, '0');
  return `./images/treino/treino-${padded}.jpg`;
}

function getSubImagePage(exerciseName) {
  return null;
}

function getSubImagePath(pageNum) {
  if (!pageNum) return null;
  const padded = String(pageNum).padStart(2, '0');
  return `./images/subs/sub-${padded}.jpg`;
}

if (typeof window !== 'undefined') {
  window.WORKOUT_PAGES = WORKOUT_PAGES;
  window.getFichaPageList = getFichaPageList;
  window.getWorkoutImagePath = getWorkoutImagePath;
  window.getSubImagePage = getSubImagePage;
  window.getSubImagePath = getSubImagePath;
}
