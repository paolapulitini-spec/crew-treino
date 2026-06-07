// =============================================================================
// CREW 2.0 — Guia de Substituição de Exercícios
// Fonte: Guia by Gabriela Bahia
// =============================================================================
// Estrutura: chave (nome do exercício) → array de substituições
// A busca é case-insensitive e parcial (matchea por palavra-chave)
// =============================================================================

const SUBSTITUTIONS = {
  // ==========================================================================
  // MEMBROS INFERIORES — QUADRÍCEPS
  // ==========================================================================
  'Agachamento Livre na Barra': [
    { name: 'Agachamento no smith', muscle: 'Quadríceps' },
    { name: 'Agachamento com o halter nos ombros', muscle: 'Quadríceps' }
  ],
  'Agachamento Frontal com barra': [
    { name: 'Agachamento com o peso a frente do corpo', muscle: 'Quadríceps' },
    { name: 'Agachamento Livre na Barra', muscle: 'Quadríceps' }
  ],
  'Afundo com tronco inclinado e o pé no step': [
    { name: 'Afundo com base parada', muscle: 'Quadríceps' }
  ],
  'Afundo na barra guiada com step': [
    { name: 'Afundo com tronco inclinado e o pé no step', muscle: 'Quadríceps' }
  ],
  'Afundo base parada com os pés no step': [
    { name: 'Afundo com base parada', muscle: 'Quadríceps' }
  ],
  'Afundo curtinho no step': [
    { name: 'Afundo curtinho base parada', muscle: 'Quadríceps' }
  ],
  'Agachamento Lateral com step': [
    { name: 'Afundo base parada com os pés no step', muscle: 'Quadríceps' }
  ],
  'Agachamento no Hack': [
    { name: 'Leg Press inclinado', muscle: 'Quadríceps' }
  ],
  'Agachamento sobe e desce com salto no step': [
    { name: 'Agachamento com salto abre e fecha', muscle: 'Quadríceps' }
  ],
  'Avanço + Retrocesso': [
    { name: 'Recuo alternando', muscle: 'Quadríceps' }
  ],
  'Leg Press horizontal - base aberta ou fechada': [
    { name: 'Agachamento com peso a frente', muscle: 'Quadríceps' }
  ],
  'Flexão Nórdica reversa': [
    { name: 'Cadeira Extensora', muscle: 'Quadríceps' }
  ],
  'Passada com halter': [
    { name: 'Recuo alternando', muscle: 'Quadríceps' }
  ],
  'Step Up unilateral com halter': [
    { name: 'Afundo com tronco inclinado e o pé no step', muscle: 'Quadríceps' },
    { name: 'Cadeira extensora unilateral', muscle: 'Quadríceps' }
  ],
  'Step Up lateral na barra guiada': [
    { name: 'Step up unilateral com halter', muscle: 'Quadríceps' }
  ],
  'Saltito': [
    { name: 'Agachamento + panturrilha', muscle: 'Quadríceps' }
  ],

  // ==========================================================================
  // MEMBROS INFERIORES — POSTERIOR
  // ==========================================================================
  'Agachamento no Hack invertido': [
    { name: 'Agachamento com tronco inclinado', muscle: 'Posterior' }
  ],
  'Agachamento com tronco inclinado': [
    { name: 'Agachamento Sumô com halter', muscle: 'Posterior' }
  ],
  'Agachamento sumô com barra': [
    { name: 'Agachamento Sumô com halter', muscle: 'Posterior' }
  ],
  'Cadeira Flexora': [
    { name: 'Mesa flexora', muscle: 'Posterior' },
    { name: 'Stiff', muscle: 'Posterior' }
  ],
  'Flexor articulado em pé na máquina': [
    { name: 'Posterior com caneleira', muscle: 'Posterior' }
  ],
  'Mesa Flexora': [
    { name: 'Cadeira Flexora', muscle: 'Posterior' },
    { name: 'Stiff', muscle: 'Posterior' }
  ],
  'Leg Press Inclinado': [
    { name: 'Agachamento com peso a frente', muscle: 'Posterior' },
    { name: 'Leg Press horizontal', muscle: 'Posterior' }
  ],
  'Leg Press Inclinado unilateral': [
    { name: 'Leg Press horizontal unilateral', muscle: 'Posterior' }
  ],
  'Levantamento Terra Sumô': [
    { name: 'Agachamento sumô com barra', muscle: 'Posterior' }
  ],
  'Levantamento Terra Sumô unilateral': [
    { name: 'Stiff unilateral com halter', muscle: 'Posterior' }
  ],
  'Posterior com caneleira': [
    { name: 'Flexor articulado em pé na máquina', muscle: 'Posterior' },
    { name: 'Stiff unilateral', muscle: 'Posterior' }
  ],
  'Stiff com barra': [
    { name: 'Cadeira Flexora', muscle: 'Posterior' }
  ],
  'Stiff curtinho com barra': [
    { name: 'Cadeira Flexora com insistência', muscle: 'Posterior' },
    { name: 'Mesa flexora com insistência', muscle: 'Posterior' }
  ],

  // ==========================================================================
  // MEMBROS INFERIORES — GLÚTEO
  // ==========================================================================
  'Afundo + Sumô': [
    { name: 'Sumô curtinho', muscle: 'Glúteo' }
  ],
  'Abdução de quadril em pé com caneleira': [
    { name: 'Glúteo Lateral na Polia', muscle: 'Glúteo' }
  ],
  'Búlgaro com halter': [
    { name: 'Afundo com tronco inclinado e o pé no step', muscle: 'Glúteo' }
  ],
  'Búlgaro com barra': [
    { name: 'Búlgaro com halter', muscle: 'Glúteo' }
  ],
  'Cadeira Abdutora': [
    { name: 'Glúteo Lateral na Polia', muscle: 'Glúteo' },
    { name: 'Abdução de quadril em pé com caneleira', muscle: 'Glúteo' }
  ],
  'Cadeira Abdutora com tronco inclinado a frente': [
    { name: 'Cadeira abdutora 45°', muscle: 'Glúteo' }
  ],
  'Cadeira abdutora 45°': [
    { name: 'Cadeira Abdutora', muscle: 'Glúteo' }
  ],
  'Chute cruzado': [
    { name: 'Caneleira 4 apoios - Chute', muscle: 'Glúteo' }
  ],
  'Caneleira 4 apoios - Chute': [
    { name: 'Glúteo na polia - Chute', muscle: 'Glúteo' }
  ],
  'Caneleira 4 apoios sobe e desce': [
    { name: 'Glúteo na polia perna estendida', muscle: 'Glúteo' }
  ],
  'Deslocamento Lateral com band': [
    { name: 'Cadeira abdutora', muscle: 'Glúteo' }
  ],
  'Elevação Pélvica na máquina': [
    { name: 'Elevação de quadril com barra', muscle: 'Glúteo' }
  ],
  'Glúteo na polia Lateral': [
    { name: 'Abdução de quadril em pé com caneleira', muscle: 'Glúteo' }
  ],
  'Glúteo na polia Chute': [
    { name: 'Caneleira 4 apoios - Chute', muscle: 'Glúteo' }
  ],
  'Glúteo na polia perna estendida': [
    { name: 'Caneleira 4 apoios sobe e desce', muscle: 'Glúteo' }
  ],
  'Ostra': [
    { name: 'Abdução de quadril em pé com band', muscle: 'Glúteo' },
    { name: 'Cadeira abdutora', muscle: 'Glúteo' }
  ],
  'Meia Lua': [
    { name: 'Cadeira abdutora 45°', muscle: 'Glúteo' }
  ],

  // ==========================================================================
  // MEMBROS INFERIORES — PANTURRILHA
  // ==========================================================================
  'Panturrilha no Leg': [
    { name: 'Panturrilha na máquina', muscle: 'Panturrilha' },
    { name: 'Panturrilha em pé com carga', muscle: 'Panturrilha' }
  ],
  'Panturrilha na máquina': [
    { name: 'Panturrilha em pé com carga', muscle: 'Panturrilha' }
  ],

  // ==========================================================================
  // MEMBROS SUPERIORES — PEITORAL
  // ==========================================================================
  'Crossover na polia': [
    { name: 'Crucifixo com halter', muscle: 'Peitoral' }
  ],
  'Crucifixo com halter ou no banco inclinado': [
    { name: 'Crossover', muscle: 'Peitoral' },
    { name: 'Voador', muscle: 'Peitoral' }
  ],
  'Flexão de braço alternando': [
    { name: 'Flexão de braço com descida lenta', muscle: 'Peitoral' }
  ],
  'Flexão de braço com descida lenta': [
    { name: 'Flexão de braço no chão', muscle: 'Peitoral' }
  ],
  'Flexão de braço no chão': [
    { name: 'Flexão de braço com apoio do joelho', muscle: 'Peitoral' },
    { name: 'Flexão de braço no Smith', muscle: 'Peitoral' }
  ],
  'Supino Reto com barra livre': [
    { name: 'Supino Reto na máquina', muscle: 'Peitoral' },
    { name: 'Supino Reto com halter', muscle: 'Peitoral' }
  ],
  'Supino Fechado com halter': [
    { name: 'Supino unilateral no Cross', muscle: 'Peitoral' }
  ],
  'Supino Inclinado com barra': [
    { name: 'Supino Inclinado com halter', muscle: 'Peitoral' }
  ],
  'Voador': [
    { name: 'Crucifixo com halter', muscle: 'Peitoral' },
    { name: 'Crossover na polia', muscle: 'Peitoral' }
  ],

  // ==========================================================================
  // MEMBROS SUPERIORES — TRÍCEPS
  // ==========================================================================
  'Tríceps coice bilateral com halter': [
    { name: 'Tríceps Francês com halter', muscle: 'Tríceps' }
  ],
  'Tríceps coice na polia': [
    { name: 'Tríceps coice bilateral com halter', muscle: 'Tríceps' }
  ],
  'Tríceps francês com halter': [
    { name: 'Tríceps francês no cross', muscle: 'Tríceps' }
  ],
  'Tríceps francês no cross': [
    { name: 'Tríceps francês com halter', muscle: 'Tríceps' },
    { name: 'Tríceps Testa no cross', muscle: 'Tríceps' }
  ],
  'Tríceps no banco': [
    { name: 'Tríceps coice bilateral com halter', muscle: 'Tríceps' },
    { name: 'Tríceps corda na polia', muscle: 'Tríceps' }
  ],
  'Tríceps corda na polia': [
    { name: 'Tríceps francês com halter', muscle: 'Tríceps' }
  ],
  'Tríceps unilateral francês no cabo': [
    { name: 'Tríceps francês unilateral com halter', muscle: 'Tríceps' }
  ],
  'Tríceps unilateral supinado na polia': [
    { name: 'Tríceps coice unilateral com halter', muscle: 'Tríceps' },
    { name: 'Tríceps corda na polia', muscle: 'Tríceps' }
  ],
  'Tríceps francês unilateral com halter': [
    { name: 'Tríceps coice unilateral com halter', muscle: 'Tríceps' }
  ],

  // ==========================================================================
  // MEMBROS SUPERIORES — DORSAL
  // ==========================================================================
  'Crucifixo inverso na máquina': [
    { name: 'Crucifixo inverso com halter', muscle: 'Dorsal' }
  ],
  'Crucifixo inverso com halter': [
    { name: 'Crucifixo inverso na máquina', muscle: 'Dorsal' }
  ],
  'Barra Graviton': [
    { name: 'Pulley anterior com barra reta', muscle: 'Dorsal' }
  ],
  'Pulley anterior com barra reta': [
    { name: 'Pulley com triângulo', muscle: 'Dorsal' }
  ],
  'Pulley pegada supinada ou fechada': [
    { name: 'Pulley com triângulo', muscle: 'Dorsal' }
  ],
  'Pulley com triângulo': [
    { name: 'Pulley pegada supinada ou fechada', muscle: 'Dorsal' }
  ],
  'Pulley com puxada romana': [
    { name: 'Pulley anterior com barra reta', muscle: 'Dorsal' }
  ],
  'Pulldown na polia': [
    { name: 'Pullover com halter', muscle: 'Dorsal' }
  ],
  'Pullover com halter': [
    { name: 'Pulldown na polia', muscle: 'Dorsal' }
  ],
  'Remada curvada com a barra pegada supinada': [
    { name: 'Remada curvada na polia baixa', muscle: 'Dorsal' }
  ],
  'Remada polia baixa': [
    { name: 'Remada articulada sentada - pegada fechada', muscle: 'Dorsal' }
  ],
  'Remada curvada na polia baixa': [
    { name: 'Remada curvada com a barra pegada supinada', muscle: 'Dorsal' }
  ],
  'Remada alta com barra': [
    { name: 'Remada alta com halter', muscle: 'Dorsal' }
  ],

  // ==========================================================================
  // MEMBROS SUPERIORES — BÍCEPS
  // ==========================================================================
  'Bíceps pegada supinada com barra': [
    { name: 'Bíceps barra reta no cabo', muscle: 'Bíceps' }
  ],
  'Bíceps barra reta no cabo': [
    { name: 'Bíceps pegada supinada com barra', muscle: 'Bíceps' }
  ],
  'Bíceps no banco scott': [
    { name: 'Bíceps na polia com isometria', muscle: 'Bíceps' }
  ],

  // ==========================================================================
  // MEMBROS SUPERIORES — OMBRO
  // ==========================================================================
  'Desenvolvimento Arnold em pé': [
    { name: 'Desenvolvimento Arnold sentado', muscle: 'Ombro' }
  ],
  'Desenvolvimento Arnold sentado': [
    { name: 'Desenvolvimento Arnold em pé', muscle: 'Ombro' }
  ],
  'Elevação lateral de ombro na polia': [
    { name: 'Elevação lateral de ombro unilateral com halter', muscle: 'Ombro' }
  ],
  'Elevação frontal de ombro na polia': [
    { name: 'Elevação de ombro frontal - pegada supinada', muscle: 'Ombro' }
  ],
  'Elevação de ombro frontal - pegada supinada': [
    { name: 'Elevação frontal de ombro na polia', muscle: 'Ombro' }
  ],
  'Remada alta no Cross': [
    { name: 'Remada alta com halter ou barra livre', muscle: 'Ombro' },
    { name: 'Remada alta com barra livre', muscle: 'Ombro' }
  ],
  'Kettlebell swing': [
    { name: 'Meio Swing', muscle: 'Ombro' }
  ],
  'Ombro abre e fecha': [
    { name: 'Desenvolvimento de ombro fechado alternado', muscle: 'Ombro' }
  ],
  'Swing unilateral com halter': [
    { name: 'Snatch com halter', muscle: 'Ombro' }
  ],

  // ==========================================================================
  // ABDÔMEN — CORE
  // ==========================================================================
  'Abdominal bike com peso alternando': [
    { name: 'Abdominal Russian Twist', muscle: 'Core' }
  ],
  'Abdominal canivete alternando com carga': [
    { name: 'Abdominal canivete alternando os lados', muscle: 'Core' }
  ],
  'Abdominal canivete unilateral + bilateral': [
    { name: 'Abdominal canivete unilateral + bilateral', muscle: 'Core' }
  ],
  'Abdominal canoa + flexão do tronco alternando': [
    { name: 'Abdominal remador com apoio das mãos', muscle: 'Core' }
  ],
  'Abdominal infra com a bola': [
    { name: 'Abdominal infra', muscle: 'Core' }
  ],
  'Abdominal infra com carga': [
    { name: 'Abdominal infra com as 3 variações', muscle: 'Core' }
  ],
  'Abdominal infra com as 3 variações': [
    { name: 'Abdominal infra', muscle: 'Core' }
  ],
  'Abdominal nadador': [
    { name: 'Prancha isométrica com peso', muscle: 'Core' }
  ],
  'Abdominal supra com braço estendido com carga': [
    { name: 'Abdominal supra na máquina ou no chão', muscle: 'Core' }
  ],
  'Abdominal remador com apoio das mãos': [
    { name: 'Abdominal remador', muscle: 'Core' }
  ],
  'Abdominal sit up': [
    { name: 'Abdominal supra na máquina ou no chão', muscle: 'Core' }
  ],
  'Flexão de tronco com braço estendido': [
    { name: 'Abdominal supra na máquina ou no chão', muscle: 'Core' }
  ],
  'Prancha isométrica com peso': [
    { name: 'Prancha isométrica', muscle: 'Core' }
  ],
  'Prancha lateral sobe e desce com peso': [
    { name: 'Prancha lateral', muscle: 'Core' }
  ],
  'Prancha lateral sobe e desce quadril': [
    { name: 'Prancha lateral', muscle: 'Core' }
  ],
  'Prancha girando o quadril': [
    { name: 'Prancha isométrica', muscle: 'Core' }
  ],
  'Prancha ombro sobe e desce': [
    { name: 'Prancha isométrica', muscle: 'Core' }
  ],
  'Zombie Crunch': [
    { name: 'Abdominal supra na máquina ou no chão', muscle: 'Core' }
  ],
  'Abdominal infra no banco': [
    { name: 'Abdominal infra', muscle: 'Core' }
  ],
  'Abdominal reto com rotação de tronco no banco inclinado': [
    { name: 'Abdominal cruzado', muscle: 'Core' }
  ],
  'Abdominal Russian Twist': [
    { name: 'Abdominal Russian Twist (sem carga)', muscle: 'Core' }
  ],

  // ==========================================================================
  // COMBINADOS
  // ==========================================================================
  'Sprawl + cadeirinha': [
    { name: 'Sprawl', muscle: 'Combinado' }
  ],
  'Sprawl com toque nos ombros + mountain climber cruzado': [
    { name: 'Sprawl + cadeirinha', muscle: 'Combinado' }
  ],
  'Burpee': [
    { name: 'Sprawl', muscle: 'Combinado' }
  ],
  'Remada alta + swing': [
    { name: 'Remada alta com barra ou halter', muscle: 'Combinado' },
    { name: 'Kettlebell Swing', muscle: 'Combinado' }
  ],
  'Meio Man Maker': [
    { name: 'Remada curvada com a barra pegada supinada', muscle: 'Combinado' }
  ]
};

// Função de busca tolerante: procura substituições por nome de exercício
function findSubstitutions(exerciseName) {
  if (!exerciseName) return [];
  const norm = exerciseName.toLowerCase().trim();

  // 1. Tenta match exato
  for (const key of Object.keys(SUBSTITUTIONS)) {
    if (key.toLowerCase() === norm) return SUBSTITUTIONS[key];
  }

  // 2. Tenta match parcial (chave contida no nome do exercício ou vice-versa)
  for (const key of Object.keys(SUBSTITUTIONS)) {
    const keyLower = key.toLowerCase();
    if (norm.includes(keyLower) || keyLower.includes(norm)) {
      return SUBSTITUTIONS[key];
    }
  }

  // 3. Tenta match por palavras-chave principais
  const words = norm.split(/\s+/).filter(w => w.length > 3);
  for (const key of Object.keys(SUBSTITUTIONS)) {
    const keyLower = key.toLowerCase();
    const matches = words.filter(w => keyLower.includes(w));
    if (matches.length >= 2) return SUBSTITUTIONS[key];
  }

  return [];
}

if (typeof window !== 'undefined') {
  window.SUBSTITUTIONS = SUBSTITUTIONS;
  window.findSubstitutions = findSubstitutions;
}
