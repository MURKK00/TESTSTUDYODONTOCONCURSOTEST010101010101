// ==========================================
// BANCO DE QUESTÕES — Nível Concurso Real
// Gabaritos variados (a, b, c, d distribuídos)
// ==========================================
const questoesData = [

  // ============ BLOCO 1: DENTÍSTICA / CLÍNICA BÁSICA ============
  {
    num: 1, bloco: "Dentística", cat: "clinica",
    pergunta: "A Classificação de Black para cavidades de Classe II contempla lesões localizadas em:",
    opcoes: [
      "a) Fossas e fissuras de molares e pré-molares.",
      "b) Superfícies lisas de dentes posteriores, excluindo colo.",
      "c) Superfícies proximais de pré-molares e molares, com acesso pela oclusal.",
      "d) Superfícies proximais de dentes anteriores, abaixo do ponto de contato."
    ],
    gabarito: "c",
    explicacao: "Classe II de Black = superfícies proximais de dentes posteriores (pré-molares e molares). Classe III = proximais de anteriores. Classe I = fossas e fissuras."
  },
  {
    num: 2, bloco: "Dentística", cat: "clinica",
    pergunta: "Em relação à contração de polimerização da resina composta, a técnica incremental oblíqua tem como objetivo principal:",
    opcoes: [
      "a) Facilitar o acabamento e polimento da restauração.",
      "b) Reduzir o fator C e, consequentemente, o estresse na interface adesiva.",
      "c) Aumentar a profundidade de polimerização do material.",
      "d) Eliminar a necessidade de sistema adesivo convencional."
    ],
    gabarito: "b",
    explicacao: "O fator C (configuração cavitária) é a relação entre paredes aderidas e livres. Incrementos oblíquos reduzem o fator C, diminuindo o estresse de contração e o risco de microinfiltração."
  },
  {
    num: 3, bloco: "Cariologia / ICDAS", cat: "clinica",
    pergunta: "O sistema ICDAS classifica o escore 1 como:",
    opcoes: [
      "a) Cavidade detectável a olho nu com dentina visível.",
      "b) Sombra escura subjacente ao esmalte visível com dentina úmida.",
      "c) Primeira alteração visual no esmalte detectada somente após secagem com jato de ar por 5 segundos.",
      "d) Colapso localizado do esmalte, sem dentina exposta."
    ],
    gabarito: "c",
    explicacao: "ICDAS 1 = opacidade/mancha branca visível apenas após secagem por 5s. ICDAS 2 = visível sem secagem. ICDAS 3-6 = progressão de cavitação."
  },
  {
    num: 4, bloco: "Diagnóstico Pulpar", cat: "clinica",
    pergunta: "Um paciente relata dor espontânea, pulsátil, que piora ao calor e alivia brevemente ao frio. O diagnóstico mais provável é:",
    opcoes: [
      "a) Pulpite reversível com componente inflamatório inicial.",
      "b) Hipersensibilidade dentinária cervical.",
      "c) Necrose pulpar assintomática.",
      "d) Pulpite irreversível sintomática com possível periodontite apical."
    ],
    gabarito: "d",
    explicacao: "Dor espontânea, pulsátil e o alívio ao frio (vasoconstrição) são patognomônicos de pulpite irreversível. A reversível causa dor breve ao estímulo, que cessa rapidamente."
  },
  {
    num: 5, bloco: "Endodontia", cat: "clinica",
    pergunta: "Na irrigação endodôntica, o hipoclorito de sódio (NaOCl) é o irrigante de escolha principalmente por:",
    opcoes: [
      "a) Desmineralizar a camada de smear layer subgengival.",
      "b) Dissolver tecido orgânico (polpa, biofilme) e ter amplo espectro antimicrobiano.",
      "c) Precipitar proteínas na superfície dentinária, selando os túbulos.",
      "d) Neutralizar endotoxinas bacterianas sem dissolver tecido orgânico."
    ],
    gabarito: "b",
    explicacao: "NaOCl: único irrigante capaz de dissolver matéria orgânica + ação antimicrobiana de amplo espectro. EDTA/ácido cítrico = smear layer (inorgânico). CHX = antimicrobiano, mas não dissolve tecido."
  },
  {
    num: 6, bloco: "Periodontia — Classificação AAP 2017", cat: "clinica",
    pergunta: "Segundo a nova classificação periodontal (EFP/AAP 2017), periodontite Estágio III, Grau C indica:",
    opcoes: [
      "a) Perda de inserção ≥5mm, sem risco de perda dentária e progressão lenta.",
      "b) Perda de inserção ≥5mm, com risco de perda de dentes e progressão rápida.",
      "c) Perda de inserção 1-2 mm sem comprometimento de furca.",
      "d) Gengivite sem perda de inserção em paciente jovem."
    ],
    gabarito: "b",
    explicacao: "Estágio III = NIC ≥5mm com risco de perda de dentes. Grau C = evidência de progressão rápida (>2mm/ano) ou fatores de risco como tabagismo intenso ou diabetes descompensado."
  },
  {
    num: 7, bloco: "Cirurgia Oral", cat: "clinica",
    pergunta: "A alveolite seca (osteíte alveolar) tem como característica DIFERENCIAL em relação à infecção pós-operatória:",
    opcoes: [
      "a) Presença de supuração abundante e febre acima de 38°C.",
      "b) Dor intensa a partir do 3º-5º dia pós-op, alvéolo sem coágulo e halitose, sem sinais infecciosos sistêmicos.",
      "c) Edema progressivo com trismo e linfadenopatia regional.",
      "d) Formação de abscesso com flutuação no alvéolo."
    ],
    gabarito: "b",
    explicacao: "Alveolite seca = dissolução prematura do coágulo, dor intensa no 3º-5º dia pós-op, alvéolo vazio e fétido, SEM sinais sistêmicos de infecção. Tratamento: irrigação suave + curativo (alvogyl)."
  },
  {
    num: 8, bloco: "Materiais Dentários", cat: "clinica",
    pergunta: "O cimento de ionômero de vidro (CIV) convencional apresenta como propriedade EXCLUSIVA em relação às resinas compostas:",
    opcoes: [
      "a) Alta resistência à fratura e ao desgaste oclusal.",
      "b) Translucidez e capacidade estética superior.",
      "c) Adesão química à estrutura dentária e liberação contínua de flúor.",
      "d) Polimerização exclusivamente ativada por luz visível."
    ],
    gabarito: "c",
    explicacao: "CIV: ligação química ao cálcio de esmalte/dentina + liberação de flúor contínua (efeito anticariogênico). Resinas compostas requerem sistema adesivo e não liberam flúor. CIV tem menor resistência mecânica."
  },
  {
    num: 9, bloco: "Odontopediatria", cat: "clinica",
    pergunta: "Na pulpotomia em dente decíduo com sulfato ferroso, o mecanismo de ação do material é:",
    opcoes: [
      "a) Promover calcificação total da polpa radicular remanescente.",
      "b) Promover hemostasia por coagulação proteica e leve ação antimicrobiana.",
      "c) Induzir apoptose das células pulpares remanescentes.",
      "d) Atuar exclusivamente como barreira física entre polpa e restauração."
    ],
    gabarito: "b",
    explicacao: "Sulfato ferroso (Astringedent) promove hemostasia rápida por coagulação proteica. É a alternativa ao formocresol por ter menor citotoxicidade sistêmica. Indicado quando a polpa coronária é removida e a radicular está vital."
  },
  {
    num: 10, bloco: "Radiologia — Técnica", cat: "radio",
    pergunta: "A técnica do paralelismo (ângulo reto) é preferível à técnica da bissetriz em periapicais porque:",
    opcoes: [
      "a) Requer menor tempo de exposição à radiação.",
      "b) Dispensa o uso de posicionadores radiográficos.",
      "c) Reproduz com maior fidelidade o comprimento real do dente e estruturas de suporte.",
      "d) Causa menos desconforto em dentes anteriores."
    ],
    gabarito: "c",
    explicacao: "Paralelismo: filme paralelo ao longo eixo do dente + feixe perpendicular = imagem fiel, sem distorção. Bissetriz é menos precisa pois usa ângulo imaginário e gera distorções. Paralelismo é o padrão-ouro."
  },

  // ============ BLOCO 2: SUS / SAÚDE PÚBLICA / BRASIL SORRIDENTE ============
  {
    num: 11, bloco: "Lei 8.080/1990", cat: "sus",
    pergunta: "Segundo a Lei nº 8.080/1990, elaborar normas técnicas e estabelecer padrões de qualidade para promoção da saúde é atribuição:",
    opcoes: [
      "a) Comum a todas as esferas de governo.",
      "b) Privativa da direção nacional do SUS.",
      "c) Exclusiva da direção estadual do SUS.",
      "d) Compartilhada entre estados e municípios."
    ],
    gabarito: "b",
    explicacao: "Art. 16, I da Lei 8.080: elaborar normas técnicas e estabelecer padrões de qualidade é competência PRIVATIVA da direção nacional (MS). As atribuições comuns estão no art. 15."
  },
  {
    num: 12, bloco: "Brasil Sorridente — CEO", cat: "sus",
    pergunta: "As especialidades OBRIGATÓRIAS nos Centros de Especialidades Odontológicas (CEO) são:",
    opcoes: [
      "a) Diagnóstico bucal (câncer), periodontia, endodontia, cirurgia oral menor e atendimento a pacientes especiais.",
      "b) Ortodontia, implantodontia, cirurgia buco-maxilo-facial e endodontia.",
      "c) Apenas diagnóstico bucal e endodontia são obrigatórias nos CEOs tipo I.",
      "d) Periodontia é facultativa, bastando endodontia e cirurgia oral."
    ],
    gabarito: "a",
    explicacao: "CEOs devem oferecer obrigatoriamente: 1) diagnóstico bucal com ênfase em câncer, 2) periodontia, 3) endodontia em dentes permanentes, 4) cirurgia oral menor de tecidos moles e duros, 5) atenção a pacientes com necessidades especiais."
  },
  {
    num: 13, bloco: "Epidemiologia — SiC Index", cat: "sus",
    pergunta: "O índice SiC (Significant Caries Index) foi criado pela OMS para:",
    opcoes: [
      "a) Substituir o CPO-D em todas as pesquisas de prevalência de cárie.",
      "b) Focar o planejamento no terço da população com maior experiência de cárie.",
      "c) Avaliar severidade de cárie em dentes decíduos menores de 6 anos.",
      "d) Medir extensão de perda periodontal em populações adultas."
    ],
    gabarito: "b",
    explicacao: "O SiC = média do CPO-D do 1/3 da população com maior doença. Criado para não mascarar desigualdades: quando o CPO-D médio cai, o SiC revela se os mais afetados ainda têm alta carga de doença."
  },
  {
    num: 14, bloco: "Lei 8.142 — Controle Social", cat: "sus",
    pergunta: "Sobre os Conselhos de Saúde, a Lei nº 8.142/1990 determina que a representação dos usuários corresponda a:",
    opcoes: [
      "a) 25% da composição total.",
      "b) 33% da composição total.",
      "c) 50% da composição total.",
      "d) 75% da composição total."
    ],
    gabarito: "c",
    explicacao: "Lei 8.142: Conselhos de Saúde = 50% usuários + 25% trabalhadores de saúde + 25% gestores e prestadores. Esta é a paridade característica do controle social no SUS."
  },
  {
    num: 15, bloco: "PNAB 2017 — ESB", cat: "sus",
    pergunta: "A Equipe de Saúde Bucal na Modalidade II, conforme a PNAB 2017, é composta por:",
    opcoes: [
      "a) Um cirurgião-dentista e um auxiliar em saúde bucal.",
      "b) Um cirurgião-dentista, um técnico em saúde bucal e um auxiliar em saúde bucal.",
      "c) Dois cirurgiões-dentistas e um técnico em saúde bucal.",
      "d) Um cirurgião-dentista, um técnico em saúde bucal e um agente comunitário."
    ],
    gabarito: "b",
    explicacao: "ESB Modalidade I = 1 CD + 1 ASB. Modalidade II = 1 CD + 1 TSB + 1 ASB. A distinção entre ASB (auxiliar) e TSB (técnico, realiza procedimentos clínicos sob supervisão) é frequentemente cobrada."
  },
  {
    num: 16, bloco: "SB Brasil / Indicadores", cat: "sus",
    pergunta: "O levantamento SB Brasil 2010 registrou CPO-D = 2,07 aos 12 anos. Em relação à meta da OMS para o ano 2000, este resultado indica que:",
    opcoes: [
      "a) O Brasil não atingiu a meta, pois o CPO-D deveria ser zero.",
      "b) O Brasil não atingiu a meta, pois o CPO-D deveria ser ≤ 1,0.",
      "c) O Brasil atingiu a meta da OMS de CPO-D ≤ 3,0 para 12 anos.",
      "d) O resultado superou a meta, sendo o ideal CPO-D ≤ 4,0 para países em desenvolvimento."
    ],
    gabarito: "c",
    explicacao: "Meta OMS para ano 2000: CPO-D ≤ 3,0 aos 12 anos. Com CPO-D = 2,07, o Brasil superou essa meta. Porém, as desigualdades regionais persistem — Norte e Nordeste têm índices mais altos."
  },

  // ============ BLOCO 3: ÉTICA / BIOSSEGURANÇA / LEGISLAÇÃO ============
  {
    num: 17, bloco: "Código de Ética CFO", cat: "etica",
    pergunta: "Segundo o Código de Ética Odontológica (CFO), o sigilo profissional pode ser quebrado quando:",
    opcoes: [
      "a) Outro cirurgião-dentista solicita informações por interesse científico.",
      "b) É necessário para evitar risco grave e iminente à saúde do paciente ou de terceiros.",
      "c) O plano de saúde solicita relatório detalhado para fins de auditoria.",
      "d) O responsável financeiro do tratamento solicita informações clínicas."
    ],
    gabarito: "b",
    explicacao: "O sigilo pode ser quebrado: risco grave e iminente a terceiros, notificação de doenças compulsórias, determinação judicial e consentimento expresso do paciente. Plano de saúde tem acesso limitado — apenas ao necessário para a cobertura."
  },
  {
    num: 18, bloco: "Gerenciamento de Resíduos", cat: "etica",
    pergunta: "Conforme a Resolução ANVISA RDC nº 222/2018, dentes extraídos sem amálgama e gazes com sangue são classificados como resíduos do Grupo:",
    opcoes: [
      "a) Grupo D — resíduos comuns assimiláveis aos domésticos.",
      "b) Grupo E — resíduos perfurocortantes.",
      "c) Grupo A — resíduos com possível presença de agentes biológicos.",
      "d) Grupo B — resíduos químicos perigosos."
    ],
    gabarito: "c",
    explicacao: "Grupo A = risco biológico (sangue, secreções, peças anatômicas, dentes sem amálgama). Agulhas/limas = Grupo E. Revelador/fixador de raio-X = Grupo B. Papel não contaminado = Grupo D."
  },
  {
    num: 19, bloco: "Biossegurança — Esterilização", cat: "etica",
    pergunta: "O processo correto de esterilização por autoclave a vapor saturado para instrumental metálico embalado é:",
    opcoes: [
      "a) 121°C por 15-20 minutos ou 134°C por 4-7 minutos.",
      "b) 160°C por 60 minutos (estufa de Pasteur).",
      "c) Imersão em glutaraldeído 2% por 10 horas à temperatura ambiente.",
      "d) Irradiação UV por 30 minutos com distância máxima de 30cm."
    ],
    gabarito: "a",
    explicacao: "Autoclave padrão: 121°C/1atm/15-20min (gravitacional) ou 134°C/2atm/4-7min. Estufa = 160°C/60min ou 170°C/30min (calor seco). UV NÃO esteriliza (apenas desinfecção de superfície). Glutaraldeído 2% por 10h = esterilização química a frio."
  },
  {
    num: 20, bloco: "Responsabilidade Civil", cat: "etica",
    pergunta: "Na odontologia, a natureza predominante da obrigação do cirurgião-dentista é:",
    opcoes: [
      "a) Obrigação de resultado em todos os procedimentos clínicos sem exceção.",
      "b) Obrigação de meio em todos os procedimentos, sem qualquer exceção.",
      "c) Obrigação de meio como regra, com exceção de procedimentos estéticos eletivos (clareamento, próteses), onde se admite obrigação de resultado.",
      "d) Apenas obrigação administrativa de manter documentação atualizada."
    ],
    gabarito: "c",
    explicacao: "Regra: obrigação de MEIO (empenho técnico diligente). Exceção reconhecida pelo STJ: obrigação de RESULTADO em procedimentos estéticos eletivos previsíveis (clareamento, prótese, facetas, implantes) onde o resultado é prometido."
  },
  {
    num: 21, bloco: "Lei 8.080 — Conceito de Saúde", cat: "etica",
    pergunta: "A Lei nº 8.080/1990, em seu artigo 3º, define que a saúde tem como fatores determinantes e condicionantes:",
    opcoes: [
      "a) Exclusivamente ausência de doenças fisicamente diagnosticadas.",
      "b) Alimentação, moradia, saneamento, meio ambiente, trabalho, educação, renda, transporte, lazer e acesso a serviços.",
      "c) Estado de completo bem-estar físico, mental e social.",
      "d) Apenas acesso universal a serviços de saúde de qualidade."
    ],
    gabarito: "b",
    explicacao: "Art. 3º da Lei 8.080 lista explicitamente os determinantes: alimentação, moradia, saneamento, meio ambiente, trabalho, educação, renda, transporte, lazer e acesso aos serviços. Esse conceito ampliado fundamenta o SUS."
  },

  // ============ BLOCO 4: RADIOLOGIA / ANESTESIA / URGÊNCIAS ============
  {
    num: 22, bloco: "Radiologia — Panorâmica", cat: "radio",
    pergunta: "O 'fantasma' (imagem-espelho) na radiografia panorâmica é um artefato caracterizado por:",
    opcoes: [
      "a) Imagem borrada na linha média por movimento do paciente durante a exposição.",
      "b) Imagem opaca da mandíbula contralateral projetada acima do plano oclusal no lado ipsilateral.",
      "c) Radiopacidade difusa por aumento excessivo da dose de radiação.",
      "d) Sobreposição de estruturas anatômicas por erro de posicionamento vertical."
    ],
    gabarito: "b",
    explicacao: "O fantasma na panorâmica ocorre quando estruturas densas (coluna cervical, palato duro, basais da mandíbula) são projetadas duas vezes pelo feixe. A imagem-espelho aparece contralateral e superior à estrutura original."
  },
  {
    num: 23, bloco: "Anestesia Local", cat: "radio",
    pergunta: "A referência anatômica principal para o bloqueio do nervo alveolar inferior (BNAI) é:",
    opcoes: [
      "a) Processo coronoide da mandíbula e sulco pterigomassetérico.",
      "b) Ligamento pterigomandibular e rafe pterigomandibular como limite medial.",
      "c) Sulco condilar e eminência articular do côndilo.",
      "d) Forame mentual na face vestibular abaixo dos pré-molares."
    ],
    gabarito: "b",
    explicacao: "BNAI: insere-se lateralmente ao rafe pterigomandibular (referência medial), na linha de Quénison, 1cm acima do plano oclusal inferior, em direção à espinha de Spix onde entra o nervo alveolar inferior."
  },
  {
    num: 24, bloco: "Trauma Dental — Avulsão", cat: "radio",
    pergunta: "Em avulsão dentária de dente permanente com ápice fechado, o fator prognóstico MAIS crítico para o reimplante é:",
    opcoes: [
      "a) O método de limpeza da raiz antes do reimplante.",
      "b) A espessura do ligamento periodontal no momento do trauma.",
      "c) O tempo de permanência do dente fora do alvéolo (tempo extraoral).",
      "d) A hora do dia em que ocorreu o trauma."
    ],
    gabarito: "c",
    explicacao: "Tempo extraoral é o fator mais crítico: até 30-60 min mantido úmido = células do LP viáveis, prognóstico favorável. Acima de 60 min a seco = células do LP mortas = anquilose/reabsorção. Armazenar em leite, soro ou saliva."
  },
  {
    num: 25, bloco: "Urgências — Infecção Grave", cat: "radio",
    pergunta: "Paciente com diagnóstico de angina de Ludwig (celulite cervical profunda) deve ser tratado com:",
    opcoes: [
      "a) Antibioticoterapia ambulatorial com amoxicilina 500mg e reavaliação em 48h.",
      "b) AINES + analgésicos com reavaliação em 24h.",
      "c) Internação hospitalar imediata, ATB IV, monitoramento de vias aéreas e drenagem cirúrgica se necessário.",
      "d) Exodontia imediata do dente causador sem necessidade de internação."
    ],
    gabarito: "c",
    explicacao: "Angina de Ludwig é emergência médica (risco de obstrução de vias aéreas). Requer: internação imediata, ATB IV (penicilina G + metronidazol), monitoramento rigoroso de VA, drenagem se houver flutuação. Não tratar ambulatorialmente."
  },

  // ============ BLOCO 5: QUESTÕES INTEGRATIVAS ============
  {
    num: 26, bloco: "Periodontia — Diagnóstico", cat: "clinica",
    pergunta: "A perda de nível de inserção clínica (NIC) difere da profundidade de sondagem (PS) porque:",
    opcoes: [
      "a) A PS é sempre maior que o NIC em todos os casos de doença periodontal.",
      "b) O NIC é medido da JCE ao fundo do sulco, sendo o verdadeiro indicador de destruição periodontal.",
      "c) A PS é medida da JCE à margem gengival.",
      "d) O NIC não é usado em triagem clínica por requerer instrumentos especiais."
    ],
    gabarito: "b",
    explicacao: "PS = margem gengival → fundo de sulco (pode estar falsamente elevada em hiperplasia gengival). NIC = JCE → fundo de sulco. NIC é o gold-standard pois reflete destruição real de suporte periodontal."
  },
  {
    num: 27, bloco: "Endodontia Pediátrica", cat: "clinica",
    pergunta: "Dente permanente jovem com rizogênese incompleta e necrose pulpar é indicação de:",
    opcoes: [
      "a) Tratamento endodôntico convencional com obturação por condensação lateral imediata.",
      "b) Apicificação com Ca(OH)2 por 6-24 meses ou plug apical com MTA/Biodentine.",
      "c) Extração imediata por impossibilidade técnica do tratamento.",
      "d) Pulpotomia com formocresol como único tratamento possível."
    ],
    gabarito: "b",
    explicacao: "Rizogênese incompleta + necrose = apicificação. Opções: Ca(OH)2 por longo prazo (induz barreira calcificada) ou plug apical com MTA/Biodentine (em sessão única). Revascularização/regeneração pulpar é alternativa em casos selecionados recentes."
  },
  {
    num: 28, bloco: "Saúde Coletiva — Fluoretação", cat: "sus",
    pergunta: "A fluoretação das águas de abastecimento é a medida mais custo-efetiva em saúde pública bucal porque:",
    opcoes: [
      "a) Atinge apenas crianças em fase de erupção dentária.",
      "b) É controlada individualmente conforme necessidade de cada paciente.",
      "c) Beneficia toda a população de forma equânime, independentemente de comportamento ou renda.",
      "d) Substitui completamente a necessidade de dentifrício fluoretado."
    ],
    gabarito: "c",
    explicacao: "A fluoretação da água é equânime: não depende de adesão, beneficia ricos e pobres igualmente, tem altíssimo alcance e baixíssimo custo per capita. É considerada uma das 10 maiores realizações da saúde pública do séc. XX."
  },
  {
    num: 29, bloco: "ART — Odontologia Minimamente Invasiva", cat: "clinica",
    pergunta: "O Tratamento Restaurador Atraumático (ART) preconiza:",
    opcoes: [
      "a) Remoção de cárie com instrumentos rotatórios de alta rotação e restauração com resina composta.",
      "b) Remoção manual do tecido cariado amolecido com curetas e restauração com CIV de alta viscosidade.",
      "c) Aplicação de flúor sem remoção de cárie como único tratamento em qualquer situação.",
      "d) Selamento de fissuras com resina de baixa viscosidade sem tratamento restaurador."
    ],
    gabarito: "b",
    explicacao: "ART = curetas manuais + CIV de alta viscosidade. Não usa motor. Indicado em comunidades sem equipamento convencional (escolas, domicílio, zonas rurais). Alta eficácia em cavidades simples de superfície oclusal."
  },
  {
    num: 30, bloco: "Farmacologia — Vasoconstritor", cat: "radio",
    pergunta: "Em paciente hipertenso controlado, o vasoconstritor MAIS indicado junto ao anestésico local é:",
    opcoes: [
      "a) Adrenalina 1:50.000, por promover maior profundidade anestésica.",
      "b) Felipressina (vasopressina sintética), por não ter ação adrenérgica cardiovascular.",
      "c) Noradrenalina, por ter efeito α predominante e menor impacto cardíaco.",
      "d) Evitar qualquer vasoconstritor em hipertensos independentemente do nível pressórico."
    ],
    gabarito: "b",
    explicacao: "Felipressina age em receptores V1 (vasopressina), sem ação β-adrenérgica. É a mais segura para hipertensos e cardiopatas. Adrenalina pode ser usada em baixa concentração (1:100.000-1:200.000) em hipertensos CONTROLADOS, com cautela."
  }
];

// ==========================================
// BANCO DE FLASHCARDS — 24 cards variados
// ==========================================
const cards = [
  { cat: "clinica", tag: "Cariologia", q: "Quais são os 4 fatores etiológicos primários da cárie (modelo de Keyes)?", a: "Hospedeiro (dente), microbiota (S. mutans, Lactobacillus), substrato (carboidratos fermentáveis) e tempo. Modelos modernos adicionam fatores biológicos, comportamentais e socioeconômicos." },
  { cat: "clinica", tag: "Dentística", q: "O que é o fator C e como a técnica incremental o reduz?", a: "Fator C = relação paredes aderidas ÷ paredes livres. Alto fator C = maior estresse de polimerização. Incrementos oblíquos criam paredes livres adicionais, reduzindo o fator C e o risco de microinfiltração." },
  { cat: "clinica", tag: "Endodontia", q: "Qual a diferença clínica entre pulpite reversível e irreversível?", a: "Reversível: dor provocada, curta duração (<30s), cessa com o estímulo, sem dor espontânea. Irreversível: dor espontânea, pulsátil, prolongada (>30s), piora ao calor, pode aliviar ao frio. Irreversível = endodontia." },
  { cat: "clinica", tag: "Periodontia", q: "Cite 3 diferenças entre gengivite e periodontite.", a: "1) Gengivite: sem perda óssea / Periodontite: com perda óssea alveolar. 2) Gengivite: sem perda de inserção (NIC=0) / Periodontite: NIC ≥1mm. 3) Gengivite: 100% reversível / Periodontite: tecido perdido não regenera espontaneamente." },
  { cat: "clinica", tag: "Cirurgia Oral", q: "Quais os cuidados pós-operatórios ESSENCIAIS após exodontia simples?", a: "Comprimir gaze por 30min, não cuspir/enxaguar 24h, dieta fria e pastosa, não fumar (risco de alveolite), evitar esforço físico, higiene bucal normal respeitando o alvéolo. Retornar se dor intensa após 3-5 dias." },
  { cat: "clinica", tag: "Materiais Dentários", q: "Por que o CIV não substitui resina em posteriores de alta carga?", a: "CIV convencional tem baixa resistência ao desgaste oclusal e à fratura. Indicado para: baixo estresse, bases/forramentos, cervicais com abrasão, restaurações em decíduos, ART e casos onde liberação de flúor é prioritária." },
  { cat: "clinica", tag: "Oclusão", q: "O que é guia anterior e qual sua função protetora?", a: "Guia anterior = contato de incisivos e caninos em movimentos excêntricos. Função: desocluir dentes posteriores nesses movimentos (desoclusão posterior), protegendo-os de forças oblíquas que causam desgaste e fraturas." },
  { cat: "clinica", tag: "Periodontia", q: "Descreva as fases da terapia periodontal não cirúrgica.", a: "Fase sistêmica: controle de fatores gerais, ATB se indicado. Fase causal (higiênica): motivação e instrução de higiene, raspagem supragengival, raspagem e alisamento radicular (RAR) subgengival. Reavaliação: 4-8 semanas após RAR." },
  { cat: "sus", tag: "Princípios do SUS", q: "Explique universalidade, integralidade e equidade no SUS.", a: "Universalidade: saúde é direito de TODOS (sem distinção). Integralidade: ações de promoção + prevenção + tratamento + reabilitação. Equidade: tratar desigualmente os desiguais para igualar oportunidades (≠ igualdade uniforme)." },
  { cat: "sus", tag: "Brasil Sorridente", q: "Quais os 3 tipos de CEO e como se diferenciam?", a: "CEO Tipo I: 3 cadeiras odontológicas. Tipo II: 4-6 cadeiras. Tipo III: 7+ cadeiras. Todos oferecem obrigatoriamente: diagnóstico bucal/câncer, periodontia, endodontia, cirurgia oral menor e atenção a pacientes especiais." },
  { cat: "sus", tag: "Epidemiologia Bucal", q: "O que mede o índice ceo-d e como difere do CPO-D?", a: "ceo-d: cárie(c) + extração indicada(e) + obturado(o) em dentes DECÍDUOS. CPO-D: cariado(C) + perdido(P) + obturado(O) em dentes PERMANENTES. Letras minúsculas = decíduos (< dentição mista)." },
  { cat: "sus", tag: "Lei 8.080", q: "Quais são os princípios doutrinários e organizativos do SUS?", a: "Doutrinários: universalidade, integralidade, equidade. Organizativos: descentralização (municipalização), regionalização, hierarquização, participação popular/controle social." },
  { cat: "sus", tag: "Saúde Coletiva", q: "O que é o Índice de Dean e para que serve?", a: "Classifica fluorose: Normal, Questionável, Muito leve, Leve, Moderada, Severa. Usado para monitorar fluorose em populações e calibrar concentração de flúor na água de abastecimento (0,6-0,8 mg/L no Brasil — Portaria 888/2021 MS)." },
  { cat: "sus", tag: "PNAB 2017", q: "Quais são as funções EXCLUSIVAS do TSB (Técnico em Saúde Bucal) na ESF?", a: "O TSB pode (sob supervisão do CD): realizar moldagens e modelos de estudo, fazer radiografias, aplicar selantes e flúor, fazer profilaxia, inserir CIV no ART, remover suturas, fazer curativo de alvéolo. ASB faz assistência, não realiza procedimentos clínicos." },
  { cat: "etica", tag: "Código de Ética CFO", q: "O que é o consentimento livre e esclarecido (TCLE) e por que é obrigatório?", a: "Registro da anuência do paciente após informação sobre diagnóstico, tratamento proposto, alternativas, riscos e benefícios. Obrigatório pelo Código de Ética CFO. Protege a autonomia do paciente e o profissional legalmente." },
  { cat: "etica", tag: "Biossegurança", q: "Qual a diferença entre desinfecção e esterilização em odontologia?", a: "Desinfecção: elimina microrganismos patogênicos, exceto esporos — usada em superfícies (bancadas, cadeira, apoio de cabeça). Esterilização: elimina TODOS (incluindo esporos) — obrigatória para instrumentais que penetram tecidos." },
  { cat: "etica", tag: "Biossegurança", q: "Classifique os resíduos odontológicos nos grupos A, B e E com exemplos.", a: "Grupo A (biológico): gaze com sangue, dentes sem amálgama, resíduos de polpa. Grupo B (químico): revelador/fixador RX, amalgam residual, desinfetantes. Grupo E (perfurocortante): agulhas descartadas, limas endodônticas, bisturis." },
  { cat: "radio", tag: "Radiologia Digital", q: "Quais as 3 principais vantagens do sistema digital sobre o filme convencional?", a: "1) Redução de dose de radiação (até 70%). 2) Imagem imediata, sem processamento químico. 3) Manipulação digital (brilho, contraste, inversão), arquivamento eletrônico e possibilidade de teleodontologia." },
  { cat: "radio", tag: "Anestesia Local", q: "Quais são os principais efeitos adversos sistêmicos dos anestésicos locais tipo amida?", a: "Reação tóxica (superdosagem): SNC: excitação → convulsão → depressão. CV: arritmias, hipotensão, bradiardia. Metahemoglobinemia (prilocaína). Alergia é RARA com amidas (mais comum com ésteres como procaína)." },
  { cat: "radio", tag: "Urgências", q: "Como diferenciar síncope vasovagal de anafilaxia no consultório?", a: "Síncope: palidez, sudorese fria, bradicardia, recuperação com decúbito dorsal + pernas elevadas. Anafilaxia: urticária, broncoespasmo, taquicardia, hipotensão refratária ao decúbito. Tratamento: adrenalina IM 0,3mg, O2, SAMU." },
  { cat: "radio", tag: "Trauma Dental", q: "Qual o meio de transporte ideal para dente avulsionado quando não é possível reimplantar?", a: "1ª: reimplante imediato. 2ª: leite integral (viabilidade ~6h). 3ª: soro fisiológico. 4ª: saliva (vestíbulo). NUNCA: água (lise osmótica das células do LP), álcool ou superfície seca. Não esfregar a raiz." },
  { cat: "clinica", tag: "Odontopediatria", q: "Qual a diferença entre pulpotomia e pulpectomia em decíduos?", a: "Pulpotomia: remoção apenas da polpa CORONÁRIA, mantendo polpa radicular vital (indicada em exposição cariosa com polpa radicular saudável). Pulpectomia: remoção de TODA a polpa (coronária + radicular), mantendo dente para reabsorção fisiológica." },
  { cat: "sus", tag: "Vigilância Epidemiológica", q: "O que é a Vigilância em Saúde Bucal e quais seus componentes?", a: "Sistema de monitoramento contínuo da saúde bucal da população. Componentes: levantamentos epidemiológicos (SB Brasil), monitoramento de fluorose e fluoretação das águas, notificação de agravos (câncer bucal), análise de indicadores de serviços." },
  { cat: "etica", tag: "Documentação Clínica", q: "Por que a documentação odontológica completa é essencial no serviço público?", a: "1) Continuidade do tratamento. 2) Respaldo legal (responsabilidade civil/penal). 3) Subsídio para auditorias e avaliações. 4) Base para pesquisa e planejamento em saúde. 5) Comunicação entre profissionais da equipe." }
];

// ==========================================
// FUNÇÕES GLOBAIS DE NAVEGAÇÃO
// ==========================================
window.abrirQuestoes = function(categoria = 'todas') {
  if (window.showTab) showTab('questoes');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => { if (window.renderQuestoes) renderQuestoes(categoria); }, 50);
};

window.renderQuestoes = function(filtro = 'todas') {
  const qbContainer = document.getElementById('qbank-container');
  if (!qbContainer) return;

  const cats = [
    { id: 'todas', label: 'Todas (30)' },
    { id: 'clinica', label: 'Clínica / Dentística' },
    { id: 'sus', label: 'SUS / Saúde Pública' },
    { id: 'etica', label: 'Ética / Legislação' },
    { id: 'radio', label: 'Radio / Urgências' }
  ];

  let html = `<div class="filter-bar">`;
  cats.forEach(c => {
    html += `<button class="filter-btn ${filtro === c.id ? 'active' : ''}" onclick="renderQuestoes('${c.id}')">${c.label}</button>`;
  });
  html += `</div>`;

  const filtered = filtro === 'todas' ? questoesData : questoesData.filter(q => q.cat === filtro);
  html += `<p class="q-count">${filtered.length} questão(ões)</p>`;

  filtered.forEach((q) => {
    const gabLetter = q.gabarito.toUpperCase();
    const optsHtml = q.opcoes.map((opt, oi) => {
      const letter = ['a', 'b', 'c', 'd'][oi];
      return `<div class="q-opt" id="opt-${q.num}-${letter}" onclick="selectOption(${q.num},'${letter}','${q.gabarito}')">${opt}</div>`;
    }).join('');

    html += `
    <div class="q-card" id="qcard-${q.num}">
      <div class="q-header">
        <span class="q-num">Q${q.num}</span>
        <span class="q-bloco-tag">${q.bloco}</span>
      </div>
      <p class="q-text">${q.pergunta}</p>
      <div class="q-options">${optsHtml}</div>
      <div class="q-actions">
        <button class="btn-reveal" onclick="revealAnswer(${q.num},'${q.gabarito}')">Ver resposta</button>
        <button class="btn-explain" onclick="toggleExplain(${q.num})">Explicação</button>
      </div>
      <div class="q-answer hidden" id="ans-${q.num}"><strong>Gabarito: Letra ${gabLetter}</strong></div>
      <div class="q-explain hidden" id="exp-${q.num}"><strong>Por que?</strong> ${q.explicacao}</div>
    </div>`;
  });

  qbContainer.innerHTML = html;
};

window.selectOption = function(num, letter, gabarito) {
  ['a','b','c','d'].forEach(l => {
    const el = document.getElementById(`opt-${num}-${l}`);
    if (el) { el.classList.remove('selected', 'correct', 'wrong'); }
  });
  const chosen = document.getElementById(`opt-${num}-${letter}`);
  if (chosen) {
    chosen.classList.add('selected');
    if (letter === gabarito) {
      chosen.classList.add('correct');
    } else {
      chosen.classList.add('wrong');
      const correct = document.getElementById(`opt-${num}-${gabarito}`);
      if (correct) correct.classList.add('correct');
    }
  }
};

window.revealAnswer = function(num, gabarito) {
  const el = document.getElementById(`ans-${num}`);
  if (el) el.classList.toggle('hidden');
  const correct = document.getElementById(`opt-${num}-${gabarito}`);
  if (correct) correct.classList.add('correct');
};

window.toggleExplain = function(num) {
  const el = document.getElementById(`exp-${num}`);
  if (el) el.classList.toggle('hidden');
};
