// =============================================================================
// CREW 2.0 — Dados dos Treinos (PROGRAMA INTERMEDIÁRIO F1)
// Programa: Série Academia by Gabriela Bahia | Intermediário | Hipertrofia
// 4 fichas (AH, BH, CH, EH) + 4 cardios | 4x na semana | 6 semanas
// =============================================================================

const WORKOUTS = {
  // ===========================================================================
  // AH — HIPERTROFIA — Quadríceps + Posterior
  // ===========================================================================
  AH: {
    id: 'AH',
    name: 'Ficha AH',
    type: 'hipertrofia',
    focus: 'Quadríceps + Posterior',
    grupo: 'Membros Inferiores',
    color: '#b8a4f5',
    warmup: { name: 'Mobilidade articular inferiores', duration: '5 min', image: 'aquecimento-inferiores.jpg' },
    blocks: [
      {
        id: 'A1',
        name: 'Bloco Ativação',
        subtitle: '1 Série',
        series: 1,
        exercises: [
          { name: 'Ativação abdominal (vídeoaula)', reps: '12 a 15 min', carga: 'Assistir vídeoaula' }
        ],
        observacao: 'Ativação abdominal seguindo a vídeoaula.'
      },
      {
        id: 'A',
        name: 'Bloco A',
        subtitle: 'Séries Conjugadas Bi-Set',
        series: 3,
        exercises: [
          { name: 'Passada com halter', reps: '20 reps', carga: 'Carga moderada a pesada' },
          { name: 'Agachamento com halter nos ombros', reps: '10 a 12 reps', carga: 'Carga moderada' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Faça a passada: 20 passadas no total, alternando as pernas. Quando acabar, apoie o halter nos ombros e faça o agachamento com a base paralela. São 10 a 12 repetições.',
        aumento: 'Busque aumentar a carga somente no tempo indicado na tabela apresentada.'
      },
      {
        id: 'B',
        name: 'Bloco B',
        subtitle: 'Séries Simples Drop-Set',
        series: 3,
        exercises: [
          { name: 'Leg press horizontal base fechada', reps: '6 reps', carga: 'Carga moderada a pesada' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Leg press horizontal base fechada', reps: '8 reps', carga: 'Diminuir carga' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Leg press horizontal base fechada', reps: '8 reps', carga: 'Diminuir carga' },
          { name: 'Descanso entre as séries', reps: '1:15 min', carga: '', isRest: true }
        ],
        observacao: 'Leg press horizontal base fechada. 6 reps carga moderada a pesada. Descanse 10 seg. Diminua a carga e faça mais 8 reps. Descanse mais 10 seg, diminua a carga novamente e faça mais 8 reps.',
        aumento: 'Busque aumentar a carga somente no tempo indicado na tabela apresentada.'
      },
      {
        id: 'C',
        name: 'Bloco C',
        subtitle: 'Séries Simples',
        series: 3,
        exercises: [
          { name: 'Cadeira extensora unilateral (1ª e 2ª séries)', reps: '12/12 reps', carga: 'Carga moderada' },
          { name: 'Descanso entre as séries', reps: '1:10 min', carga: '', isRest: true },
          { name: '3ª Série: Cadeira extensora unilateral', reps: '8/8 reps', carga: 'Carga pesada', isSection: false },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Cadeira extensora bilateral + 2seg iso', reps: '10 reps + 2 seg iso em cada rep', carga: 'Carga pesada' }
        ],
        observacao: 'Cadeira extensora unilateral: 1ª e 2ª séries 12 reps cada perna. Na 3ª série, aumente a carga e faça 8 cada perna. Descanse 10 seg, coloque carga pra bilateral: 10 reps segurando 2 seg na isometria em cima em cada rep.',
        aumento: 'O aumento pode ser de 1kg nesse bloco.'
      },
      {
        id: 'D',
        name: 'Bloco D',
        subtitle: 'Séries Simples',
        series: 4,
        exercises: [
          { name: 'Cadeira abdutora (1ª-3ª série: iso + 10 reps + iso)', reps: '10 seg iso + 10 reps + 10 seg iso', carga: 'Carga pesada' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true },
          { name: '4ª Série: Cadeira abdutora sem isometria', reps: '8 reps', carga: 'Aumentar carga', isSection: false },
          { name: 'Deslocamento lateral em pé com band', reps: '30 reps', carga: 'Com band' }
        ],
        observacao: 'Cadeira abdutora: segure 10 seg aberto na 1ª rep, faça 10 reps direto abrindo e fechando, na última rep segure mais 10 seg aberto. Faça isso nas 3 primeiras séries. Na 4ª série, aumente carga, 8 reps sem iso, depois coloque a band e faça 30 reps de deslocamento lateral em pé.',
        aumento: 'Busque aumentar a carga somente no tempo indicado na tabela apresentada.'
      }
    ]
  },

  // ===========================================================================
  // BH — HIPERTROFIA — Membros Superiores
  // ===========================================================================
  BH: {
    id: 'BH',
    name: 'Ficha BH',
    type: 'hipertrofia',
    focus: 'Membros Superiores',
    grupo: 'Membros Superiores',
    color: '#c5f74a',
    warmup: { name: 'Mobilidade articular superiores', duration: '5 min', image: 'aquecimento-superiores.jpg' },
    blocks: [
      {
        id: 'A1',
        name: 'Bloco Ativação',
        subtitle: '1 Série',
        series: 1,
        exercises: [
          { name: 'Série abdominal 1 — Seca e Trinca (vídeoaula)', reps: '12 a 15 min', carga: 'Assistir vídeoaula' }
        ],
        observacao: 'Série abdominal seguindo a vídeoaula Seca e Trinca.'
      },
      {
        id: 'A',
        name: 'Bloco A',
        subtitle: 'Séries Simples',
        series: 3,
        exercises: [
          { name: 'Pulley com triângulo (2 seg iso embaixo)', reps: '8 reps + 2 seg iso em cada rep', carga: 'Carga moderada a pesada' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Pulley com triângulo', reps: '8 reps', carga: 'Carga pesada' },
          { name: 'Descanso entre as séries', reps: '1:10 min', carga: '', isRest: true }
        ],
        observacao: 'Pulley com triângulo: 8 reps segurando 2 seg embaixo em cada uma. Descanse 10 seg, aumente a carga e faça mais 8 reps direto.',
        aumento: 'Busque aumentar a carga somente no tempo indicado na tabela apresentada.'
      },
      {
        id: 'B',
        name: 'Bloco B',
        subtitle: 'Séries Conjugadas Bi-Set',
        series: 3,
        exercises: [
          { name: 'Supino fechado com halter', reps: '10 reps', carga: 'Carga moderada a pesada' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Flexão de braço no chão', reps: '8 a 10 reps', carga: 'Sem carga | pode ser com joelho no chão' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Supino fechado com halter, 10 reps carga moderada a pesada. Descanse 10 seg e vá pro chão fazer a flexão (pode ser com joelho no chão). 8 a 10 reps.',
        aumento: 'O aumento pode ser de 1kg a 2kg nesse bloco.'
      },
      {
        id: 'C',
        name: 'Bloco C',
        subtitle: 'Séries Conjugadas Super-Set',
        series: 3,
        exercises: [
          { name: 'Remada unilateral na polia baixa', reps: '12/12 reps', carga: 'Carga moderada a pesada' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Bíceps + desenvolvimento arnold', reps: '12 reps', carga: 'Carga moderada' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Remada unilateral na polia baixa: 12 reps cada lado, estabilize bem o tronco. Descanse 10 seg, bíceps + desenvolvimento arnold: 12 reps. Mantenha o abdômen ativado.',
        aumento: 'O aumento pode ser de 1kg a 2kg nesse bloco.'
      },
      {
        id: 'D',
        name: 'Bloco D',
        subtitle: 'Séries Conjugadas Super-Set',
        series: 3,
        exercises: [
          { name: 'Elevação unilateral frontal + elevação lateral de ombro', reps: '10 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Tríceps francês com halter', reps: '12 reps', carga: 'Carga moderada a pesada' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Elevação unilateral frontal + lateral: um braço pra frente, o outro pra frente, os dois pro lado = conta 1 rep. São 10 assim. Descanse 10 seg, tríceps francês com halter: 12 reps.',
        aumento: 'O aumento pode ser de 1kg a 5kg nesse bloco.'
      },
      {
        id: 'E',
        name: 'Bloco E',
        subtitle: 'Série Extra',
        series: 2,
        exercises: [
          { name: 'Prancha lateral', reps: '30 seg cada lado', carga: 'Sem carga' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Bloco extra. 30 seg de prancha lateral pra cada lado. São 2 séries.'
      }
    ]
  },

  // ===========================================================================
  // CH — HIPERTROFIA — Posterior + Glúteo
  // ===========================================================================
  CH: {
    id: 'CH',
    name: 'Ficha CH',
    type: 'hipertrofia',
    focus: 'Posterior + Glúteo',
    grupo: 'Membros Inferiores',
    color: '#b8a4f5',
    warmup: { name: 'Mobilidade articular inferiores', duration: '5 min', image: 'aquecimento-inferiores.jpg' },
    blocks: [
      {
        id: 'A1',
        name: 'Bloco Ativação',
        subtitle: '1 Série',
        series: 1,
        exercises: [
          { name: 'Ativação abdominal (vídeoaula)', reps: '12 a 15 min', carga: 'Assistir vídeoaula' }
        ],
        observacao: 'Ativação abdominal seguindo a vídeoaula.'
      },
      {
        id: 'A',
        name: 'Bloco A',
        subtitle: 'Séries Simples',
        series: 3,
        exercises: [
          { name: 'Agachamento sumô com halter (descida 3 seg + 1 seg iso)', reps: '12 reps', carga: 'Carga pesada | descida 3 seg + 1 seg iso embaixo' },
          { name: 'Descanso entre as séries', reps: '1:10 min', carga: '', isRest: true }
        ],
        observacao: 'Agachamento sumô com halter. Se necessário, suba em dois steps para aumentar amplitude. 12 reps descendo em 3 seg e segurando 1 seg embaixo.',
        aumento: 'Busque aumentar a carga somente no tempo indicado na tabela apresentada.'
      },
      {
        id: 'B',
        name: 'Bloco B',
        subtitle: 'Séries Conjugadas Bi-Set',
        series: 3,
        exercises: [
          { name: 'Stiff com barra ou halter', reps: '10 reps', carga: 'Carga moderada a pesada | velocidade normal' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Posterior com caneleira', reps: '10/10 reps', carga: 'Carga moderada a pesada | velocidade normal' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Stiff com barra ou halter, não acelere o movimento, 10 reps. Descanse 10 seg, posterior com caneleira 10 reps cada lado. Se impossível conjugar, faça primeiro todas as séries do stiff, depois vá pra caneleira (diminua o descanso entre séries).',
        aumento: 'O aumento pode ser de 1kg a 2kg nesse bloco.'
      },
      {
        id: 'C',
        name: 'Bloco C',
        subtitle: 'Séries Simples',
        series: 3,
        exercises: [
          { name: 'Cadeira flexora (1ª série)', reps: '15 reps', carga: 'Carga moderada' },
          { name: 'Descanso', reps: '1 min', carga: '', isRest: true },
          { name: 'Cadeira flexora (2ª série)', reps: '12 reps', carga: 'Aumentar carga' },
          { name: 'Descanso', reps: '1 min', carga: '', isRest: true },
          { name: 'Cadeira flexora (3ª série: + 2 seg iso)', reps: '10 reps + 2 seg iso em cada rep', carga: 'Aumentar carga (se possível)' }
        ],
        observacao: 'Cadeira flexora. 1ª série: 15 reps carga moderada, controle a volta. 2ª série: aumente a carga, 12 reps. 3ª série: aumente mais se possível, 10 reps segurando 2 seg embaixo em cada rep.'
      },
      {
        id: 'D',
        name: 'Bloco D',
        subtitle: 'Séries Simples',
        series: 3,
        exercises: [
          { name: 'Faça um lado, depois o outro e descansa.', reps: '', carga: '', isSection: true },
          { name: 'Glúteo chute na polia (3 seg iso cada rep)', reps: '10 reps + 3 seg iso em cada rep', carga: 'Carga moderada a pesada' },
          { name: 'Descanso entre as séries', reps: '40 seg', carga: '', isRest: true }
        ],
        observacao: 'Glúteo chute na polia. Faça com uma perna, depois com a outra e descanse. 10 reps segurando 3 seg de isometria em cada rep. Estabilize bem o tronco e contraia o glúteo.',
        aumento: 'Busque aumentar a carga somente no tempo indicado na tabela apresentada.'
      },
      {
        id: 'E',
        name: 'Bloco E',
        subtitle: 'Série Extra',
        series: 2,
        exercises: [
          { name: 'Elevação pélvica unilateral no banco', reps: '12/12 reps', carga: 'Sem carga ou carga leve' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Afundo com tronco inclinado e apoio das mãos', reps: '12/12 reps', carga: 'Sem carga' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Elevação pélvica unilateral no banco: 12 reps com uma perna. Quando acabar, levante e faça o afundo com tronco inclinado com a mesma perna na frente: 12 reps. Depois volta pra elevação no banco pro outro lado.',
        aumento: 'Busque aumentar a carga somente no tempo indicado na tabela apresentada.'
      }
    ]
  },

  // ===========================================================================
  // EH — HIPERTROFIA — Full Body
  // ===========================================================================
  EH: {
    id: 'EH',
    name: 'Ficha EH',
    type: 'hipertrofia',
    focus: 'Full Body',
    grupo: 'Full Body',
    color: '#f59c4a',
    warmup: { name: 'Mobilidade inferiores + superiores', duration: '10 min', image: 'aquecimento-fullbody.jpg' },
    blocks: [
      {
        id: 'A1',
        name: 'Bloco Ativação',
        subtitle: '1 Série',
        series: 1,
        exercises: [
          { name: 'Série abdominal 2 — Seca e Trinca (vídeoaula)', reps: '12 a 15 min', carga: 'Assistir vídeoaula' }
        ],
        observacao: 'Série abdominal seguindo a vídeoaula Seca e Trinca.'
      },
      {
        id: 'A',
        name: 'Bloco A',
        subtitle: 'Séries Conjugadas Super-Set',
        series: 3,
        exercises: [
          { name: 'Búlgaro + isometria (2 seg iso cada rep)', reps: '10/10 reps', carga: 'Carga leve a moderada' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Push press', reps: '15 reps', carga: 'Carga moderada' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Búlgaro com isometria: 2 seg embaixo em cada rep, 10 reps cada perna. Descanse 10 seg, push press: 15 reps.',
        aumento: 'O aumento pode ser de 1kg nesse bloco.'
      },
      {
        id: 'B',
        name: 'Bloco B',
        subtitle: 'Séries Conjugadas Super-Set',
        series: 3,
        exercises: [
          { name: 'Facepull (volta em 3 seg)', reps: '10 reps', carga: 'Carga moderada a pesada | volta em 3 seg' },
          { name: 'Prancha ombro sobe e desce', reps: '20 a 30 seg', carga: 'Sem carga' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Facepull na polia: 10 reps controlando a volta em 3 seg. Em seguida, vá pro chão: prancha ombro sobe e desce durante 20 a 30 seg.',
        aumento: 'Busque aumentar a carga somente no tempo indicado na tabela apresentada.'
      },
      {
        id: 'C',
        name: 'Bloco C',
        subtitle: 'Séries Conjugadas Super-Set',
        series: 3,
        exercises: [
          { name: 'Afundo com halter', reps: '12/12 reps', carga: 'Carga moderada a pesada' },
          { name: 'Descanso', reps: '10 seg', carga: '', isRest: true },
          { name: 'Tríceps coice com halter', reps: '15 reps', carga: 'Carga moderada | velocidade normal' },
          { name: 'Descanso entre as séries', reps: '1 min', carga: '', isRest: true }
        ],
        observacao: 'Afundo com halter: 12 cada perna, capriche na amplitude. Descanse 10 seg, tríceps coice com halter: 15 reps. Incline o tronco e faça o movimento com controle.',
        aumento: 'Busque aumentar a carga somente no tempo indicado na tabela apresentada.'
      }
    ]
  },

  // ===========================================================================
  // CARDIO 1 — HIIT 20 min Esteira
  // ===========================================================================
  CARDIO1: {
    id: 'CARDIO1',
    name: 'Cardio 1',
    type: 'cardio',
    focus: 'HIIT 20 min — Esteira',
    grupo: 'Cardio',
    color: '#f59c4a',
    warmup: { name: 'Aquecimento incluído', duration: '3 min', image: 'aquecimento-fullbody.jpg' },
    blocks: [
      {
        id: 'AQ',
        name: 'Aquecimento',
        subtitle: '3 Minutos',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Esteira', reps: '3 min', carga: 'Caminhada com inclinação (incl. 3-7, vel. 5-6.5 km/h)' }
        ]
      },
      {
        id: 'B1',
        name: 'Bloco Único',
        subtitle: '6x 1min forte / 1min leve (12 min)',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Esteira', reps: '1 min', carga: 'Velocidade forte (vel. 8-10 ou 80-85% máximo)' },
          { name: 'Esteira', reps: '1 min', carga: 'Caminhada rápida (vel. 5-6.5)' }
        ],
        observacao: '6 ciclos: 1 min forte + 1 min caminhada rápida. Total 12 min.'
      },
      {
        id: 'B3',
        name: 'Volta Calma',
        subtitle: '2 Minutos',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Esteira', reps: '2 min', carga: 'Caminhada leve (vel. 4)' }
        ],
        observacao: 'Incline a esteira em 1-2% para aumentar recrutamento abdominal e glúteo.'
      }
    ]
  },

  // ===========================================================================
  // CARDIO 2 — HIIT 15-20 min Escada
  // ===========================================================================
  CARDIO2: {
    id: 'CARDIO2',
    name: 'Cardio 2',
    type: 'cardio',
    focus: 'HIIT 15-20 min — Escada',
    grupo: 'Cardio',
    color: '#f59c4a',
    warmup: { name: 'Aquecimento incluído', duration: '3 min', image: 'aquecimento-fullbody.jpg' },
    blocks: [
      {
        id: 'AQ',
        name: 'Aquecimento',
        subtitle: '3 Minutos',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Escada', reps: '3 min', carga: 'Ritmo leve (zona de conforto)' }
        ]
      },
      {
        id: 'B1',
        name: 'Bloco Único',
        subtitle: '5-10x 1min forte / 1min moderado',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Escada', reps: '1 min', carga: 'Velocidade forte' },
          { name: 'Escada', reps: '1 min', carga: 'Velocidade moderada' }
        ],
        observacao: '5 a 10 ciclos: 1 min forte + 1 min moderado. Foco em abdômen, glúteo e resistência.'
      },
      {
        id: 'B3',
        name: 'Volta Calma',
        subtitle: '2 Minutos',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Escada', reps: '2 min', carga: 'Ritmo leve (zona de conforto)' }
        ],
        observacao: 'Mantenha a postura firme.'
      }
    ]
  },

  // ===========================================================================
  // CARDIO 3 — HIIT 20 min Esteira (Choque Metabólico)
  // ===========================================================================
  CARDIO3: {
    id: 'CARDIO3',
    name: 'Cardio 3',
    type: 'cardio',
    focus: 'HIIT 20 min — Choque Metabólico',
    grupo: 'Cardio',
    color: '#f59c4a',
    warmup: { name: 'Aquecimento incluído', duration: '3 min', image: 'aquecimento-fullbody.jpg' },
    blocks: [
      {
        id: 'AQ',
        name: 'Aquecimento',
        subtitle: '3 Minutos',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Esteira', reps: '3 min', carga: 'Ritmo leve (zona de conforto)' }
        ]
      },
      {
        id: 'B1',
        name: 'Bloco Único',
        subtitle: '5x ciclo de 3 min (15 min)',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Esteira', reps: '1 min', carga: 'Corrida forte (vel. 10-12 ou 85-90% máximo)' },
          { name: 'Esteira', reps: '30 seg', carga: 'Trote leve (vel. 6-7)' },
          { name: 'Esteira', reps: '1 min', carga: 'Corrida moderada (vel. 8-9 ou 70-75% máximo)' },
          { name: 'Esteira', reps: '30 seg', carga: 'Caminhada rápida (vel. 5-6)' }
        ],
        observacao: '5 ciclos: 1 min forte + 30 seg trote leve + 1 min moderada + 30 seg caminhada rápida. Esse é o mais intenso, perfeito pros dias de mais energia.'
      },
      {
        id: 'B3',
        name: 'Volta Calma',
        subtitle: '2 Minutos',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Esteira', reps: '2 min', carga: 'Caminhada leve (vel. 4)' }
        ]
      }
    ]
  },

  // ===========================================================================
  // CARDIO 4 — HIIT 30 min Escada Progressivo
  // ===========================================================================
  CARDIO4: {
    id: 'CARDIO4',
    name: 'Cardio 4',
    type: 'cardio',
    focus: 'HIIT 30 min — Escada Progressivo',
    grupo: 'Cardio',
    color: '#f59c4a',
    warmup: { name: 'Aquecimento incluído', duration: '3 min', image: 'aquecimento-fullbody.jpg' },
    blocks: [
      {
        id: 'AQ',
        name: 'Aquecimento',
        subtitle: '3 Minutos',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Escada', reps: '3 min', carga: 'Ritmo leve (zona de conforto)' }
        ]
      },
      {
        id: 'B1',
        name: 'Bloco Único',
        subtitle: '5x 5 min progressivo (25 min)',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Escada', reps: '5 min', carga: 'Velocidade moderada' },
          { name: 'Escada', reps: '5 min', carga: 'Aumente 1 a 2 na velocidade' },
          { name: 'Escada', reps: '5 min', carga: 'Aumente 1 a 2 na velocidade' },
          { name: 'Escada', reps: '5 min', carga: 'Aumente 1 a 2 na velocidade' },
          { name: 'Escada', reps: '5 min', carga: 'Velocidade máxima que conseguir manter' }
        ],
        observacao: 'Aumentando a velocidade a cada 5 min. Foco em abdômen, glúteo e resistência.'
      },
      {
        id: 'B3',
        name: 'Volta Calma',
        subtitle: '2 Minutos',
        series: 1,
        isCardio: true,
        exercises: [
          { name: 'Escada', reps: '2 min', carga: 'Ritmo leve (zona de conforto)' }
        ]
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.WORKOUTS = WORKOUTS;
}
