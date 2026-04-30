// Arquivo: dados.js

// ==========================================
// 1. BANCO DE QUESTÕES (Exemplo com as 10 primeiras)
// ==========================================
const questoesData = [
  { 
    num: 1, 
    cat: 'clinica', 
    pergunta: "Segundo a classificação de Black para cáries, a Classe I diz respeito a:[cite: 5]", 
    opcoes: [
      "a) cáries em superfícies proximais de pré‑molares e molares.[cite: 5]", 
      "b) cáries em fossas e fissuras oclusais de pré‑molares e molares.[cite: 5]", 
      "c) cáries em superfícies vestibulares e linguais de dentes anteriores.[cite: 5]", 
      "d) cáries em superfícies proximais de dentes anteriores.[cite: 5]"
    ], 
    gabarito: "b" 
  },
  { 
    num: 2, 
    cat: 'clinica', 
    pergunta: "Em uma restauração com resina composta em classe I, qual é uma indicação correta para uso de adaptação cavitária?[cite: 5]", 
    opcoes: [
      "a) prevenir fratura do esmalte em cérvice de molares.[cite: 5]", 
      "b) reduzir a contração de polimerização e estresse na interface.[cite: 5]", 
      "c) aumentar a profundidade da cavidade para mais adesivo.[cite: 5]", 
      "d) evitar a necessidade de isolamento absoluto.[cite: 5]"
    ], 
    gabarito: "b" 
  },
  { 
    num: 3, 
    cat: 'clinica', 
    pergunta: "O principal objetivo da pulpectomia em dentes decíduos é:[cite: 5]", 
    opcoes: [
      "a) manter a vitalidade da polpa coronária.[cite: 5]", 
      "b) remover a polpa coronária e parte da radicular, mantendo a polpa apical vital.[cite: 5]", 
      "c) remover toda a polpa, permitindo a reabsorção fisiológica da raiz.[cite: 5]", 
      "d) apenas aliviar a dor aguda, sem comprometer a resorção.[cite: 5]"
    ], 
    gabarito: "c" 
  },
  { 
    num: 4, 
    cat: 'clinica', 
    pergunta: "Na periodontite crônica, o achado radiográfico mais comum é:[cite: 5]", 
    opcoes: [
      "a) espessamento da lâmina dura.[cite: 5]", 
      "b) perda óssea vertical e angular.[cite: 5]", 
      "c) ausência de perda óssea.[cite: 5]", 
      "d) osteoesclerose difusa.[cite: 5]"
    ], 
    gabarito: "b" 
  },
  { 
    num: 5, 
    cat: 'clinica', 
    pergunta: "A técnica de condensação térmica lateral em endodontia é indicada principalmente quando:[cite: 5]", 
    opcoes: [
      "a) o canal é muito amplo e retilíneo.[cite: 5]", 
      "b) se deseja maior previsibilidade em canais estreitos e curvados.[cite: 5]", 
      "c) não há disponível material de guta‑percha.[cite: 5]", 
      "d) o dentista pretende fazer apenas obturação com cimento.[cite: 5]"
    ], 
    gabarito: "b" 
  },
  { 
    num: 6, 
    cat: 'clinica', 
    pergunta: "O uso de sealants (selantes de fissura) é mais eficaz quando realizado:[cite: 5]", 
    opcoes: [
      "a) apenas em dentes temporários.[cite: 5]", 
      "b) em superfícies lisas e interprossimensionais.[cite: 5]", 
      "c) em superfícies oclusais de molares e pré‑molares recém‑eruptos.[cite: 5]", 
      "d) como substituto da escovação.[cite: 5]"
    ], 
    gabarito: "c" 
  },
  { 
    num: 7, 
    cat: 'clinica', 
    pergunta: "A principal causa de fratura vertical de raiz em dentes restaurados é:[cite: 5]", 
    opcoes: [
      "a) má oclusão sem tratamento.[cite: 5]", 
      "b) restaurações extensivas sem retenção, com grande estresse oclusal.[cite: 5]", 
      "c) uso de antissépticos em excesso.[cite: 5]", 
      "d) preservação de coroa dentária.[cite: 5]"
    ], 
    gabarito: "b" 
  },
  { 
    num: 8, 
    cat: 'clinica', 
    pergunta: "O material de ionômero de vidro é mais indicado em:[cite: 5]", 
    opcoes: [
      "a) restaurações oclusais em dentes posteriores com alta carga mastigatória.[cite: 5]", 
      "b) cavidades proximais de dentes anteriores com alta estética.[cite: 5]", 
      "c) cavidades tipo III em dentes anteriores com baixa carga.[cite: 5]", 
      "d) áreas de abrasão cervical quando se deseja liberação de flúor e adesão química ao esmalte/dentina.[cite: 5]"
    ], 
    gabarito: "d" 
  },
  { 
    num: 9, 
    cat: 'clinica', 
    pergunta: "Em um caso de lesão de cárie incipiente, a conduta mais conservadora é:[cite: 5]", 
    opcoes: [
      "a) restauração imediata com resina.[cite: 5]", 
      "b) restauração com amálgama.[cite: 5]", 
      "c) remineralização com flúor tópico e controle de dieta.[cite: 5]", 
      "d) extração do dente.[cite: 5]"
    ], 
    gabarito: "c" 
  },
  { 
    num: 10, 
    cat: 'clinica', 
    pergunta: "O diagnóstico de pulpotomia em dentes decíduos feito com sucesso exige:[cite: 5]", 
    opcoes: [
      "a) pulpa exposta e sangrante, com resposta negativa à percussão.[cite: 5]", 
      "b) ausência de abscesso dentoalveolar e vitalidade pulpar mantida.[cite: 5]", 
      "c) presença de dor persistente e radiolucência periapical.[cite: 5]", 
      "d) uso obrigatório de anestesia local.[cite: 5]"
    ], 
    gabarito: "b" 
  }
];

// ==========================================
// 2. BANCO DE FLASHCARDS (Exemplo)
// ==========================================
const cards = [
  { cat: 'clinica', tag: 'Clínica Básica', q: 'Segundo a classificação de Black, o que abrange a Classe I?', a: 'Cáries em fossas e fissuras oclusais de pré-molares e molares.' },
  { cat: 'sus', tag: 'SUS / Coletiva', q: 'O que visa principalmente o programa Brasil Sorridente?', a: 'Universalizar o acesso à atenção odontológica básica e ampliar a oferta de procedimentos.' },
  { cat: 'etica', tag: 'Ética/Biosseg.', q: 'Por que o uso de EPI no consultório é obrigatório?', a: 'Protege profissional e paciente de risco biológico.' },
  { cat: 'radio', tag: 'Radio/Emerg.', q: 'Para que a radiografia periapical é mais indicada?', a: 'Avaliação de lesões periapicais, reabsorções e estrutura óssea.' }
];

// ==========================================
// 3. INTEGRAÇÃO E RENDERIZAÇÃO
// ==========================================
window.abrirQuestoes = function(categoria = 'todas') {
  showTab('questoes');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderQuestoes(categoria);
};

window.renderQuestoes = function(filtro = 'todas') {
  const qbContainer = document.getElementById('qbank-container');
  if (!qbContainer) return;
  qbContainer.innerHTML = '';

  qbContainer.innerHTML += `
    <div class="filter-container" style="margin-bottom: 20px;">
      <button class="btn-filter ${filtro === 'todas' ? 'active' : ''}" onclick="renderQuestoes('todas')">Todas</button>
      <button class="btn-filter ${filtro === 'clinica' ? 'active' : ''}" onclick="renderQuestoes('clinica')">Clínica Básica</button>
      <button class="btn-filter ${filtro === 'sus' ? 'active' : ''}" onclick="renderQuestoes('sus')">SUS/Saúde Coletiva</button>
      <button class="btn-filter ${filtro === 'etica' ? 'active' : ''}" onclick="renderQuestoes('etica')">Ética/Legislação</button>
      <button class="btn-filter ${filtro === 'radio' ? 'active' : ''}" onclick="renderQuestoes('radio')">Radiologia/Emerg.</button>
      <button class="btn-filter ${filtro === 'discursiva' ? 'active' : ''}" onclick="renderQuestoes('discursiva')">Discursivas</button>
    </div>
  `;

  const filtered = filtro === 'todas' ? questoesData : questoesData.filter(q => q.cat === filtro);

  filtered.forEach((q, index) => {
    let opcoesHtml = q.opcoes.length > 0 
      ? `<ul class="options-list">` + q.opcoes.map(opt => `<li>${opt}</li>`).join('') + `</ul>`
      : `<p style="font-size:13.5px; color:#64748b; margin-bottom:14px; font-style:italic;">✎ Questão discursiva. Pense na estrutura antes de ver o espelho.</p>`;
    
    let resposta = q.opcoes.length > 0 
      ? `Resposta correta: Letra ${q.gabarito.toUpperCase()}` 
      : `<span style="color:#0f172a">Espelho esperado da Banca:</span> <br> ${q.gabarito}`;

    qbContainer.innerHTML += `
      <div class="question-block">
        <div class="question-text"><span class="tag tag-spec">${q.cat.toUpperCase()}</span> Questão ${q.num}: ${q.pergunta}</div>
        ${opcoesHtml}
        <button class="btn-show-gab" onclick="document.getElementById('gab-q-${q.num}').style.display = 'block'">Ver Resposta</button>
        <div class="gabarito-box" id="gab-q-${q.num}">${resposta}</div>
      </div>
    `;
  });
};

// ==========================================
// 4. "MÁGICA" DOS BOTÕES (Auto-Tagger)
// ==========================================
setTimeout(() => {
  document.querySelectorAll('.day-row').forEach(row => {
    let textContent = row.innerText.toLowerCase();
    let btn = row.querySelector('.btn-questao');
    if(!btn) return;
    
    if(textContent.includes('sus') || textContent.includes('pnsb') || textContent.includes('saúde pública') || textContent.includes('vigilância')) {
      btn.setAttribute('onclick', "abrirQuestoes('sus')");
    } else if(textContent.includes('radiologia') || textContent.includes('anestesia') || textContent.includes('urgências')) {
      btn.setAttribute('onclick', "abrirQuestoes('radio')");
    } else if(textContent.includes('ética') || textContent.includes('legislação') || textContent.includes('lei') || textContent.includes('art')) {
      btn.setAttribute('onclick', "abrirQuestoes('etica')");
    } else if(textContent.includes('discursiva')) {
      btn.setAttribute('onclick', "abrirQuestoes('discursiva')");
    } else if(textContent.includes('simulado completo')) {
      btn.setAttribute('onclick', "abrirQuestoes('todas')");
    } else {
      btn.setAttribute('onclick', "abrirQuestoes('clinica')");
    }
  });
}, 1000);