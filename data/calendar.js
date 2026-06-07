// =============================================================================
// CREW 2.0 — Calendário de Treinos (PROGRAMA F1)
// Programa: Intermediário | Hipertrofia | 4x na semana | 6 semanas
// Fichas: AH, BH, CH, EH + Cardio 1-4
// =============================================================================

// CALENDÁRIO 4x/SEMANA — DEFAULT
// Semana 1: AH, BH+C, CH, EH+C
// Semana 2: CH+C, BH, AH, EH+C
// Semana 3: AH, BH+C, CH, EH+C (repete padrão 1)
const CALENDAR_4X = [
  // Semana 1
  [
    { ficha: 'AH', cardio: null },
    { ficha: 'BH', cardio: 'CARDIO1' },
    { ficha: 'CH', cardio: null },
    { ficha: 'EH', cardio: 'CARDIO2' }
  ],
  // Semana 2
  [
    { ficha: 'CH', cardio: 'CARDIO3' },
    { ficha: 'BH', cardio: null },
    { ficha: 'AH', cardio: null },
    { ficha: 'EH', cardio: 'CARDIO1' }
  ],
  // Semana 3
  [
    { ficha: 'AH', cardio: null },
    { ficha: 'BH', cardio: 'CARDIO2' },
    { ficha: 'CH', cardio: null },
    { ficha: 'EH', cardio: 'CARDIO4' }
  ],
  // Semana 4
  [
    { ficha: 'AH', cardio: null },
    { ficha: 'BH', cardio: 'CARDIO1' },
    { ficha: 'CH', cardio: null },
    { ficha: 'EH', cardio: 'CARDIO3' }
  ],
  // Semana 5
  [
    { ficha: 'CH', cardio: 'CARDIO2' },
    { ficha: 'BH', cardio: null },
    { ficha: 'AH', cardio: null },
    { ficha: 'EH', cardio: 'CARDIO4' }
  ],
  // Semana 6
  [
    { ficha: 'AH', cardio: null },
    { ficha: 'BH', cardio: 'CARDIO1' },
    { ficha: 'CH', cardio: null },
    { ficha: 'EH', cardio: 'CARDIO3' }
  ]
];

// Alias para compatibilidade — CALENDAR_5X aponta pro mesmo 4X
const CALENDAR_5X = CALENDAR_4X;

// Tabela de progressão de carga durante as 6 semanas
const PROGRESSAO_CARGA = [
  { semana: 1, instrucao: 'Semana onde você achará suas cargas certas para cada exercício. Foco em execução perfeita e controle total do movimento.', acao: 'BASE' },
  { semana: 2, instrucao: 'Repita a carga da semana anterior. Atenção à técnica e consistência. Se necessário ajuste sua carga.', acao: 'REPETE' },
  { semana: 3, instrucao: 'Aumento de 2,5% a 5% nos blocos sinalizados de cada ficha. Se não conseguir aumentar, fique tranquila — terá outra semana.', acao: 'AUMENTA' },
  { semana: 4, instrucao: 'Repita a carga da semana anterior. Atenção à técnica e consistência.', acao: 'REPETE' },
  { semana: 5, instrucao: 'Novo aumento de 2% a 5%. Priorize os exercícios que tiveram melhor adaptação.', acao: 'AUMENTA' },
  { semana: 6, instrucao: 'Repita a carga da semana anterior. Atenção à técnica e consistência.', acao: 'REPETE' }
];

// Sem fichas metabólicas neste programa — mapa vazio para compatibilidade
const HIPERTROFIA_MAP = {};

function getCalendarHipertrofiaOnly() {
  return CALENDAR_4X;
}

if (typeof window !== 'undefined') {
  window.CALENDAR_5X = CALENDAR_5X;
  window.CALENDAR_4X = CALENDAR_4X;
  window.getCalendarHipertrofiaOnly = getCalendarHipertrofiaOnly;
  window.PROGRESSAO_CARGA = PROGRESSAO_CARGA;
}
