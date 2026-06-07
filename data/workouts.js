// =============================================================================
// CREW 2.0 — Dados dos Treinos (MAMA CREW — 1º TRIMESTRE)
// Programa: Mama Crew | 1º Trimestre | até 11ª semana
// 4 fichas (A, B, C, D) + Caminhada | 5x na semana | 11 semanas
// ATENÇÃO: FC não pode passar de 150bpm durante o treino
// =============================================================================

const WORKOUTS = {
  // ===========================================================================
  // FICHA A — Membros Inferiores
  // ===========================================================================
  A: {
    id: 'A',
    name: 'Ficha A',
    type: 'hipertrofia',
    focus: 'Membros Inferiores',
    grupo: 'Membros Inferiores',
    color: '#b8a4f5',
    warmup: { name: 'Mobilidade articular inferiores', duration: '5 min' },
    blocks: [
      {
        id: 'A',
        name: 'Bloco A',
        subtitle: 'Série conjugada Bi-Set',
        series: 3,
        exercises: [
          { name: 'Agachamento Smith', reps: '12 a 15 reps', carga: 'Carga moderada | Descida em 3 seg' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Deslocamento lateral com band', reps: '40 seg', carga: 'Com ou sem band' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Faça o Agachamento no Smith com carga moderada mantendo o padrão do movimento. Não faça apneia (prender a respiração), apenas ative o abdômen. No deslocamento lateral com band, ative o glúteo e se mantenha em cadeirinha.'
      },
      {
        id: 'B',
        name: 'Bloco B',
        subtitle: 'Série conjugada Super-Set',
        series: 3,
        exercises: [
          { name: 'Leg Press horizontal', reps: '10 a 12 reps', carga: 'Carga moderada | Descida em 3 seg' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Leg Press horizontal (base fechada)', reps: '8 reps', carga: 'Aumentar 1 ou 2 placas | Base fechada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Panturrilha em pé', reps: '15 a 20 seg', carga: 'Com ou sem carga' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Leg Press horizontal base fechada, carga moderada, controle a volta em 3 seg. Descanse 20 seg, aumente 1-2 placas e repita. Em seguida panturrilha em pé ao lado da máquina, com ou sem halter.'
      },
      {
        id: 'C',
        name: 'Bloco C',
        subtitle: 'Série conjugada Bi-Set',
        series: 3,
        exercises: [
          { name: 'Afundo com base parada com os pés no step', reps: '12/12 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '20 a 30 seg', carga: '', isRest: true },
          { name: 'Passada com descida em 2 segundos', reps: '20 reps', carga: 'Usar 1 ou 2 halteres ao lado do corpo' },
          { name: 'Descanso entre as séries', reps: '1:10 min', carga: '', isRest: true }
        ],
        observacao: 'Afundo com carga moderada, 1 ou 2 halteres. Descanse 20-30 seg e faça 20 passadas com descida em 2 seg. Preste atenção na execução e não faça apneia. Mantenha respiração normal.'
      },
      {
        id: 'D',
        name: 'Bloco D',
        subtitle: 'Série simples',
        series: 3,
        exercises: [
          { name: 'Cadeira Extensora', reps: '10 reps', carga: 'Carga moderada | Volta do movimento em 3 seg' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Cadeira Extensora', reps: '10 a 12 reps', carga: 'Diminua 1 ou 2 placas | Movimento mais rápido' },
          { name: 'Descanso entre as séries', reps: '1:10 min', carga: '', isRest: true }
        ],
        observacao: 'Inicie com carga moderada controlando a volta em 3 seg. Descanse 20 seg, diminua carga e faça 10-12 reps mais rápido, mantendo o padrão. Atente à postura e respiração, abdômen ativo.'
      },
      {
        id: 'E',
        name: 'Bloco E',
        subtitle: 'Série simples',
        series: 3,
        exercises: [
          { name: 'Agachamento com peso a frente do corpo', reps: '10 a 12 reps', carga: 'Carga mediana' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Usar carga moderada para controlar bem o movimento. Lembre de não projetar o tronco muito a frente.'
      }
    ]
  },

  // ===========================================================================
  // FICHA B — Membros Superiores
  // ===========================================================================
  B: {
    id: 'B',
    name: 'Ficha B',
    type: 'hipertrofia',
    focus: 'Membros Superiores',
    grupo: 'Membros Superiores',
    color: '#c5f74a',
    warmup: { name: 'Mobilidade articular superiores', duration: '5 min' },
    blocks: [
      {
        id: 'A',
        name: 'Bloco A',
        subtitle: 'Série conjugada Bi-Set',
        series: 3,
        exercises: [
          { name: 'Supino Inclinado com barra ou halter', reps: '12 a 15 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Tríceps coice unilateral com halter — Lado Direito', reps: '12 reps', carga: 'Carga leve a moderada' },
          { name: 'Elevação lateral de ombro unilateral c/ halter — Lado Direito', reps: '10 reps', carga: 'Carga leve a moderada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Tríceps coice unilateral com halter — Lado Esquerdo', reps: '12 reps', carga: 'Carga leve a moderada' },
          { name: 'Elevação lateral de ombro unilateral com halter — Lado Esquerdo', reps: '10 reps', carga: 'Carga leve a moderada' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Supino inclinado com carga moderada. Descanse 20 seg, tríceps coice lado D + elevação lateral lado D. Descanse 20 seg, repita pro lado E. Atenção à postura.'
      },
      {
        id: 'B',
        name: 'Bloco B',
        subtitle: 'Série conjugada Tri-Set',
        series: 3,
        exercises: [
          { name: 'Remada alta no Cross', reps: '10 a 12 reps', carga: 'Carga moderada | Movimento controlado' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Tríceps Corda', reps: '12 a 15 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Perdigueiro dinâmico', reps: '10/10 reps', carga: '' },
          { name: 'Descanso entre as séries', reps: '1:10 min', carga: '', isRest: true }
        ],
        observacao: 'Remada alta no cross com carga justa. Descanse 20 seg, tríceps corda moderado. Descanse 20 seg, perdigueiro dinâmico 10 reps cada lado. Sem pressa, com consciência.'
      },
      {
        id: 'C',
        name: 'Bloco C',
        subtitle: 'Série conjugada Bi-Set',
        series: 3,
        exercises: [
          { name: 'Desenvolvimento Arnold em pé', reps: '12 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Ombro abre e fecha', reps: '20 seg', carga: 'Carga moderada' },
          { name: 'Descanso entre as séries', reps: '1:10 min', carga: '', isRest: true }
        ],
        observacao: 'Desenvolvimento Arnold em pé com halter moderado. Em seguida ombro abre e fecha 20 seg. Abdômen ativado, sem deixar o tronco mole pra não sobrecarregar a lombar.'
      },
      {
        id: 'D',
        name: 'Bloco D',
        subtitle: 'Série conjugada Super-Set',
        series: 3,
        exercises: [
          { name: 'Voador', reps: '12 a 15 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Tríceps Francês c/ halter', reps: '15 reps', carga: 'Carga moderada' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Voador com carga justa. Descanse 20 seg, tríceps francês com carga moderada. Abdômen ativado.'
      }
    ]
  },

  // ===========================================================================
  // FICHA C — Membros Inferiores (Posterior + Glúteo)
  // ===========================================================================
  C: {
    id: 'C',
    name: 'Ficha C',
    type: 'hipertrofia',
    focus: 'Posterior + Glúteo',
    grupo: 'Membros Inferiores',
    color: '#b8a4f5',
    warmup: { name: 'Mobilidade articular inferiores', duration: '5 min' },
    blocks: [
      {
        id: 'A1',
        name: 'Bloco Ativação',
        subtitle: 'Série de Ativação',
        series: 2,
        exercises: [
          { name: 'Elevação Pélvica + abdução com band', reps: '20 reps', carga: 'Band' },
          { name: 'Extensão de quadril em pé com band', reps: '20/20 reps', carga: 'Band' },
          { name: 'Good Morning', reps: '12 a 15 reps', carga: 'Sem carga' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Faça os 3 movimentos em sequência com 20 seg entre eles. Exercícios de ativação, faça com consciência e sem pressa.'
      },
      {
        id: 'A',
        name: 'Bloco A',
        subtitle: 'Série conjugada Simples',
        series: 3,
        exercises: [
          { name: 'Agachamento Sumô com halter', reps: '12 reps', carga: 'Carga moderada | Descida em 4 seg | Usar step' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Elevação pélvica unilateral no banco', reps: '10/10 reps', carga: 'Sem carga' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Agachamento sumô com halter, carga moderada, descida em 4 seg. Descanse 20 seg, elevação pélvica unilateral no banco 10 reps cada lado.'
      },
      {
        id: 'B',
        name: 'Bloco B',
        subtitle: 'Série direta',
        series: 1,
        exercises: [
          { name: 'Stiff com barra', reps: '12 reps', carga: 'Carga moderada | Descida em 3 seg' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: '4 apoios chute — Lado Direito', reps: '12 reps', carga: 'Carga moderada (caneleira)' },
          { name: '4 apoios sobe e desce — Lado Direito', reps: '10 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: '4 apoios chute — Lado Direito', reps: '12 reps', carga: 'Carga moderada' },
          { name: '4 apoios sobe e desce — Lado Direito', reps: '8 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '40 seg', carga: '', isRest: true },
          { name: 'Stiff com barra', reps: '12 reps', carga: 'Carga moderada | Descida em 3 seg' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: '4 apoios chute — Lado Esquerdo', reps: '12 reps', carga: 'Carga moderada' },
          { name: '4 apoios sobe e desce — Lado Esquerdo', reps: '10 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: '4 apoios chute — Lado Esquerdo', reps: '12 reps', carga: 'Carga moderada' },
          { name: '4 apoios sobe e desce — Lado Esquerdo', reps: '8 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '40 seg', carga: '', isRest: true },
          { name: 'Stiff com barra', reps: '12 reps', carga: 'Carga moderada | Descida em 3 seg' }
        ],
        observacao: '1 série direta: Stiff → glúteo 4 apoios lado D (chute 12 + sobe/desce 10, repete 12+8) → Stiff → lado E mesma sequência → Stiff final. Use caneleira ou polia.'
      },
      {
        id: 'C',
        name: 'Bloco C',
        subtitle: 'Série conjugada Super-Set',
        series: 3,
        exercises: [
          { name: 'Cadeira flexora com insistência', reps: '12 a 15 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Agachamento com tronco inclinado', reps: '10 a 12 reps', carga: 'Halter moderado | Movimento mais curto' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Cadeira flexora com insistência, carga moderada, postura correta. Descanse 20 seg, agachamento com tronco inclinado usando halter, movimento mais curto, sem extensão completa.'
      },
      {
        id: 'D',
        name: 'Bloco D',
        subtitle: 'Série simples',
        series: 3,
        exercises: [
          { name: 'Cadeira abdutora', reps: '15 reps', carga: 'Carga mediana' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Carga moderada, 15 reps. Atenção à postura e respiração contínua, não prenda o ar.'
      }
    ]
  },

  // ===========================================================================
  // FICHA D — Membros Superiores
  // ===========================================================================
  D: {
    id: 'D',
    name: 'Ficha D',
    type: 'hipertrofia',
    focus: 'Membros Superiores',
    grupo: 'Membros Superiores',
    color: '#c5f74a',
    warmup: { name: 'Mobilidade articular superiores', duration: '5 min' },
    blocks: [
      {
        id: 'A',
        name: 'Bloco A',
        subtitle: 'Série conjugada Bi-Set',
        series: 3,
        exercises: [
          { name: 'Pulley anterior com barra reta', reps: '10 reps', carga: 'Carga moderada a pesada | Volta em 3 seg' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Pulley anterior com barra reta', reps: '8 a 12 reps', carga: 'Diminua 1 placa' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Rosca 15 (5+5+5)', reps: '15 reps (5+5+5)', carga: 'Carga moderada | Assistir ao vídeo' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Pulley anterior barra reta com carga justa, volta em 3 seg. Descanse 20 seg, diminua 1 placa e faça 8-12 reps normal. Em seguida faça a rosca 15. Assista ao vídeo para entender as variações.'
      },
      {
        id: 'B',
        name: 'Bloco B',
        subtitle: 'Série conjugada Bi-Set',
        series: 3,
        exercises: [
          { name: 'Remada na máquina pegada fechada', reps: '15 reps', carga: 'Carga moderada | Pegada fechada' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Remada unilateral com halter', reps: '10/10 reps', carga: 'Carga leve a moderada' },
          { name: 'Descanso entre as séries', reps: '1:10 min', carga: '', isRest: true }
        ],
        observacao: 'Leve um halter pra perto da máquina. Remada na máquina pegada fechada, carga moderada, 15 reps. Descanse 20 seg, remada unilateral com halter 10/10. Não faça com pressa, consciência e atenção.'
      },
      {
        id: 'C',
        name: 'Bloco C',
        subtitle: 'Série conjugada Bi-Set',
        series: 2,
        exercises: [
          { name: 'Crucifixo inverso na máquina', reps: '15 reps', carga: 'Carga moderada | Pegada fechada' },
          { name: 'Snatch', reps: '10/10 reps', carga: 'Carga moderada' },
          { name: 'Descanso entre as séries', reps: '1:10 min', carga: '', isRest: true }
        ],
        observacao: '15 reps de crucifixo inverso na máquina com carga leve, em seguida 10 reps parada cada lado de snatch com carga moderada.'
      },
      {
        id: 'D',
        name: 'Bloco D',
        subtitle: 'Série conjugada Bi-Set',
        series: 3,
        exercises: [
          { name: 'Barra Gravitón ou Pulley com triângulo', reps: '10 a 12 reps', carga: 'Carga moderada | Pegada neutra' },
          { name: 'Descanso', reps: '20 seg', carga: '', isRest: true },
          { name: 'Perdigueiro dinâmico', reps: '10/10 reps', carga: '' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Barra Gravitón com postura e abdômen ativo. Caso não tenha o aparelho, pode ser pulley com triângulo. Descanse 20 seg, perdigueiro dinâmico 10/10. Atente aos batimentos, não ultrapasse seus limites.'
      }
    ]
  },

  // ===========================================================================
  // CAMINHADA — Sábado
  // ===========================================================================
  CAMINHADA: {
    id: 'CAMINHADA',
    name: 'Caminhada',
    type: 'cardio',
    focus: 'Caminhada leve',
    grupo: 'Cardio',
    color: '#f59c4a',
    warmup: { name: 'Alongamento leve', duration: '5 min' },
    blocks: [
      {
        id: 'A',
        name: 'Caminhada',
        subtitle: '30-40 minutos',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Caminhada ao ar livre ou esteira', reps: '30 a 40 min', carga: 'Ritmo leve e confortável' }
        ],
        observacao: 'Caminhada leve, ritmo confortável. Mantenha-se hidratada. Não deixe a FC ultrapassar 150bpm.'
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.WORKOUTS = WORKOUTS;
}
