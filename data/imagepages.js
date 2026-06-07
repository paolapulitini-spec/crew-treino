// =============================================================================
// CREW 2.0 — Mapa de imagens (PROGRAMA F1, 42 páginas)
// =============================================================================

// Para cada FICHA, mapa: blockId → página do PDF
const WORKOUT_PAGES = {
  AH: {
    A1: 5,   // Ativação abdominal
    A:  6,   // Passada + Agachamento halter ombros
    B:  7,   // Leg press horizontal drop-set
    C:  8,   // Cadeira extensora unilateral/bilateral
    D:  9    // Cadeira abdutora + Deslocamento lateral band (images p10)
  },
  BH: {
    A1: 12,  // Série abdominal Seca e Trinca
    A:  13,  // Pulley com triângulo
    B:  14,  // Supino fechado + Flexão de braço
    C:  15,  // Remada unilateral + Bíceps arnold
    D:  16,  // Elevação frontal/lateral + Tríceps francês
    E:  17   // Prancha lateral
  },
  CH: {
    A1: 19,  // Ativação abdominal
    A:  20,  // Agachamento sumô com halter
    B:  21,  // Stiff + Posterior caneleira
    C:  22,  // Cadeira flexora progressiva
    D:  23,  // Glúteo chute na polia
    E:  24   // Elevação pélvica + Afundo tronco inclinado (images p25)
  },
  EH: {
    A1: 27,  // Série abdominal 2 Seca e Trinca
    A:  28,  // Búlgaro iso + Push press
    B:  29,  // Facepull + Prancha ombro sobe e desce
    C:  30   // Afundo halter + Tríceps coice
  },
  CARDIO1: {
    AQ: 32,
    B1: 32,
    B3: 33
  },
  CARDIO2: {
    AQ: 35,
    B1: 35,
    B3: 36
  },
  CARDIO3: {
    AQ: 38,
    B1: 38,
    B3: 39
  },
  CARDIO4: {
    AQ: 41,
    B1: 41,
    B3: 42
  }
};

// Substitutions pages — reutiliza do guia original (se existir)
const SUB_PAGES = {};

function getFichaPageList(fichaId) {
  const map = WORKOUT_PAGES[fichaId];
  if (!map) return [];
  const pages = [...new Set(Object.values(map))].sort((a, b) => a - b);
  // Adiciona páginas de imagem adjacentes (ex: p10 pra AH, p25 pra CH)
  const extra = {
    AH: [10],
    CH: [25]
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
  if (!exerciseName) return null;
  const nameLC = exerciseName.toLowerCase();
  for (const [key, page] of Object.entries(SUB_PAGES)) {
    if (nameLC.includes(key.toLowerCase())) return page;
  }
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
