// =============================================================================
// CREW 2.0 — Calendário de Treinos (MAMA CREW — 1º TRIMESTRE)
// Programa: 5x na semana + Caminhada sábado | 11 semanas
// Fichas: A (inf), B (sup), C (inf), D (sup) + Caminhada
// Odd weeks: A, B, C, D, A, CAMINHADA
// Even weeks: C, B, A, D, C, CAMINHADA
// =============================================================================

const CALENDAR_5X = [
  // Semana 1 (ímpar)
  [
    { ficha: 'A', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 2 (par)
  [
    { ficha: 'C', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 3 (ímpar)
  [
    { ficha: 'A', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 4 (par)
  [
    { ficha: 'C', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 5 (ímpar)
  [
    { ficha: 'A', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 6 (par)
  [
    { ficha: 'C', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 7 (ímpar)
  [
    { ficha: 'A', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 8 (par)
  [
    { ficha: 'C', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 9 (ímpar)
  [
    { ficha: 'A', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 10 (par)
  [
    { ficha: 'C', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ],
  // Semana 11 (ímpar)
  [
    { ficha: 'A', cardio: null },
    { ficha: 'B', cardio: null },
    { ficha: 'C', cardio: null },
    { ficha: 'D', cardio: null },
    { ficha: 'A', cardio: null },
    { ficha: 'CAMINHADA', cardio: null }
  ]
];

const CALENDAR_4X = CALENDAR_5X;

const PROGRESSAO_CARGA = [
  { semana: 1, instrucao: 'Semana de adaptação. Encontre suas cargas, foque na execução. FC máx: 150bpm.', acao: 'BASE' },
  { semana: 2, instrucao: 'Mantenha as cargas. Atenção à técnica e respiração.', acao: 'REPETE' },
  { semana: 3, instrucao: 'Mantenha as cargas. Foque na conexão mente-músculo.', acao: 'REPETE' },
  { semana: 4, instrucao: 'Mantenha as cargas. Atenção à postura e respiração.', acao: 'REPETE' },
  { semana: 5, instrucao: 'Mantenha as cargas. Se sentir confortável, ajuste levemente.', acao: 'REPETE' },
  { semana: 6, instrucao: 'Mantenha as cargas. Atenção ao corpo e sinais.', acao: 'REPETE' },
  { semana: 7, instrucao: 'Mantenha as cargas. Respeite seus limites.', acao: 'REPETE' },
  { semana: 8, instrucao: 'Mantenha as cargas. Foque no controle do movimento.', acao: 'REPETE' },
  { semana: 9, instrucao: 'Mantenha as cargas. Atenção à hidratação.', acao: 'REPETE' },
  { semana: 10, instrucao: 'Mantenha as cargas. Quase no fim do 1º trimestre!', acao: 'REPETE' },
  { semana: 11, instrucao: 'Última semana do 1º trimestre. Celebre sua consistência! 💪', acao: 'REPETE' }
];

const HIPERTROFIA_MAP = {};

function getCalendarHipertrofiaOnly() {
  return CALENDAR_5X;
}

if (typeof window !== 'undefined') {
  window.CALENDAR_5X = CALENDAR_5X;
  window.CALENDAR_4X = CALENDAR_4X;
  window.getCalendarHipertrofiaOnly = getCalendarHipertrofiaOnly;
  window.PROGRESSAO_CARGA = PROGRESSAO_CARGA;
}
