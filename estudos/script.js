const lessons = [
{
 title:"Vamos entender como o Trilhê funciona<span>.</span>",
 intro:"Antes de decorar qualquer comando, entenda a ideia geral: um site é formado por partes que trabalham juntas. O Trilhê é um ótimo laboratório para enxergar isso acontecendo.",
 sections:[
  {heading:"As três peças principais",body:"Pense em uma casa. O HTML é a estrutura e os cômodos. O CSS é a pintura, os móveis e a decoração. O JavaScript é a eletricidade e os comandos que fazem as coisas acontecerem.",cards:[["HTML","Organiza o conteúdo: títulos, textos, campos e botões."],["CSS","Define cores, tamanhos, espaços e como o site se adapta ao celular."],["JavaScript","Reage aos cliques, valida formulários e conversa com serviços externos."]]},
  {heading:"Como os arquivos se conectam",code:'index.html\n  ├── css/style.css\n  └── js/script_inicio.js\n\ntravel.html\n  └── js/script_rota_viagem.js',language:"Estrutura do projeto",body:"O navegador abre um arquivo HTML. Dentro dele, as tags link e script apontam para os arquivos CSS e JavaScript. Assim, cada arquivo tem uma responsabilidade."}
 ],
 challenge:{question:"Se você quiser mudar a cor do botão sem alterar o texto ou o comportamento dele, qual arquivo deve procurar?",answer:"O CSS, neste projeto em css/style.css. Ele controla a aparência dos elementos."}
},
{
 title:"HTML: a estrutura da página<span>.</span>",
 intro:"HTML significa HyperText Markup Language. Ele não é uma linguagem de programação: é uma linguagem de marcação que informa ao navegador o que cada conteúdo representa.",
 sections:[
  {heading:"Um botão real do Trilhê",code:'<a class="button button-primary" href="./travel.html?provider=youtube">\n  Continuar com YouTube Music\n</a>',language:"HTML",body:"A tag a cria um link. O atributo href diz para onde ele leva. O atributo class permite aplicar estilos com CSS e selecionar o elemento no JavaScript."},
  {heading:"Tags que você vai encontrar",rows:[["<h1>","Título principal da página."],["<p>","Um parágrafo de texto."],["<a>","Um link para outra página ou endereço."],["<button>","Um botão para executar uma ação."],["<form>","Agrupa campos que enviam informações."],["<input>","Campo onde a pessoa digita."]]},
  {heading:"Exemplo para testar",code:'<h1>Minha viagem</h1>\n<p>Escolha seu destino.</p>\n<input placeholder="Digite a cidade">\n<button>Continuar</button>',language:"HTML básico",body:"Salve esse exemplo em um arquivo chamado teste.html e abra no navegador. Depois altere o texto e veja o resultado."}
 ],
 challenge:{question:"Qual atributo define o destino de um link criado com a tag a?",answer:"O atributo href. Exemplo: <a href='travel.html'>Abrir viagem</a>."}
},
{
 title:"CSS: dando identidade ao Trilhê<span>.</span>",
 intro:"CSS significa Cascading Style Sheets. É onde transformamos uma estrutura simples em uma interface visual, com cores, espaçamentos e adaptação para diferentes telas.",
 sections:[
  {heading:"Uma regra CSS",code:'.button-primary {\n  background: #c4f46b;\n  color: #172010;\n  padding: 14px 22px;\n  border-radius: 9px;\n}',language:"CSS",body:"O seletor .button-primary procura elementos que tenham essa classe. As propriedades dentro das chaves definem a aparência."},
  {heading:"Entenda cada parte",rows:[[".button-primary","O ponto indica uma classe CSS."],["background","Cor de fundo."],["color","Cor do texto."],["padding","Espaço interno do elemento."],["border-radius","Arredondamento dos cantos."]]},
  {heading:"O site também se adapta",code:'@media (max-width: 760px) {\n  .hero {\n    grid-template-columns: 1fr;\n  }\n}',language:"CSS responsivo",body:"A regra @media aplica estilos somente quando a tela tem até 760 pixels de largura. Isso ajuda o layout a funcionar em celulares."}
 ],
 challenge:{question:"Quer deixar o botão mais arredondado. Qual propriedade você altera?",answer:"border-radius. Experimente trocar 9px por 18px no arquivo css/style.css."}
},
{
 title:"JavaScript: fazendo o site reagir<span>.</span>",
 intro:"JavaScript dá comportamento à página. No Trilhê, ele lê os campos digitados, verifica se os dados fazem sentido e reage quando a pessoa clica em criar playlist.",
 sections:[
  {heading:"Selecionando um elemento",code:'const form = document.getElementById("form-travel");\nconst button = document.getElementById("submit-travel");',language:"JavaScript",body:"document representa a página. getElementById procura um elemento pelo valor do atributo id. const cria uma variável que não será reatribuída."},
  {heading:"Respondendo ao envio",code:'form.addEventListener("submit", (event) => {\n  event.preventDefault();\n  console.log("O formulário foi enviado!");\n});',language:"JavaScript",body:"addEventListener escuta um evento. submit acontece quando o formulário é enviado. preventDefault impede o comportamento padrão de recarregar a página."},
  {heading:"O que significam essas palavras?",rows:[["const","Declara uma variável que não será reatribuída."],["function","Define um bloco reutilizável de instruções."],["if","Executa um trecho somente se uma condição for verdadeira."],["addEventListener","Fica aguardando um evento, como clique ou envio."],["console.log","Mostra uma informação no console do navegador."]]}
 ],
 challenge:{question:"Qual comando usamos para impedir que o formulário recarregue a página ao ser enviado?",answer:"event.preventDefault(). Ele cancela a ação padrão do navegador para aquele evento."}
},
{
 title:"Formulários e APIs: o site conversando<span>.</span>",
 intro:"Quando a pessoa informa origem e destino, o JavaScript pode enviar esses dados para um servidor. Uma API é uma forma organizada de um sistema conversar com outro.",
 sections:[
  {heading:"Enviando informações",code:'const resposta = await fetch("/api/travel", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ partida, chegada })\n});',language:"JavaScript — exemplo do fluxo",body:"fetch faz uma requisição. POST indica envio de dados. JSON.stringify transforma um objeto JavaScript em texto JSON. await espera a resposta chegar."},
  {heading:"O caminho dos dados",code:'Pessoa preenche o formulário\n        ↓\nJavaScript lê os campos\n        ↓\nfetch envia para /api/travel\n        ↓\nServidor calcula a rota\n        ↓\nServidor devolve uma resposta\n        ↓\nSite mostra o resultado',language:"Fluxo simplificado",body:"Importante: no repositório atual, a interface já tenta chamar essas rotas, mas o backend ainda precisa ser implementado. O exemplo explica o funcionamento esperado, não significa que a rota já esteja ativa."},
  {heading:"Frontend e backend",cards:[["Frontend","Tudo que roda no navegador e aparece para a pessoa."],["Backend","Código no servidor que protege credenciais e executa operações privadas."],["API","O contrato de comunicação entre o frontend e o backend."]]}
 ],
 challenge:{question:"Por que não devemos colocar senhas e tokens secretos no JavaScript do navegador?",answer:"Porque o código enviado ao navegador pode ser inspecionado por qualquer pessoa. Segredos devem ficar protegidos no backend, em variáveis de ambiente."}
},
{
 title:"OAuth: conectando a conta Google<span>.</span>",
 intro:"Para criar uma playlist na conta de alguém, o Trilhê precisa pedir autorização. OAuth 2.0 é um padrão que permite conceder acesso sem compartilhar a senha com o nosso site.",
 sections:[
  {heading:"Como a autorização funciona",code:'1. Pessoa clica em "Conectar Google"\n2. Trilhê redireciona para a página oficial do Google\n3. Pessoa entra e revisa as permissões\n4. Google retorna uma autorização ao Trilhê\n5. Backend usa a autorização para chamar a API',language:"Fluxo conceitual",body:"A senha é digitada no Google, não no Trilhê. O usuário pode revisar e revogar as permissões concedidas."},
  {heading:"O que precisamos configurar",rows:[["Google Cloud","Criar um projeto e ativar a YouTube Data API v3."],["OAuth consent screen","Configurar nome do aplicativo, público e informações exigidas."],["Client ID","Identificador público do aplicativo OAuth."],["Client Secret","Segredo que deve ficar somente no backend, quando aplicável."],["Redirect URI","Endereço do backend para onde o Google retorna após a autorização."]]},
  {heading:"O que vem depois",body:"Depois de conectar a conta, o backend poderá criar uma playlist com a YouTube Data API e adicionar vídeos. Isso não garante que toda faixa esteja disponível como música no YouTube Music: a disponibilidade depende do catálogo e das regras do serviço."}
 ],
 challenge:{question:"O Trilhê deve pedir a senha Google diretamente em um formulário próprio?",answer:"Não. A pessoa deve autenticar-se na página oficial do Google. O Trilhê recebe a autorização pelo fluxo OAuth."}
},
{
 title:"HTML semântico: significado antes da aparência<span>.</span>",
 intro:"HTML semântico é usar cada elemento pelo significado que ele tem. Isso deixa o código mais organizado, ajuda tecnologias assistivas e facilita a manutenção do projeto.",
 sections:[
  {heading:"Estrutura de uma página",code:'<header>Topo e identidade do site</header>\n<nav>Menu de navegação</nav>\n<main>\n  <section>\n    <h1>Minha viagem</h1>\n    <p>Planeje seu próximo destino.</p>\n  </section>\n</main>\n<footer>Informações finais</footer>',language:"HTML semântico",body:"Use header para o cabeçalho, nav para navegação, main para o conteúdo principal, section para agrupamentos e footer para o rodapé."},
  {heading:"Boas práticas",cards:[["Um h1 principal","Organize títulos em níveis: h1, h2 e h3."],["Imagens com alt","Descreva imagens importantes para leitores de tela."],["Botões e links","Use button para ações e a para navegação."],["Labels","Associe cada campo de formulário a uma label."]]},
  {heading:"Exemplo de campo acessível",code:'<label for="cidade">Sua cidade</label>\n<input id="cidade" name="cidade" type="text">',language:"HTML",body:"O for da label aponta para o id do input. Assim, clicar no texto também seleciona o campo e leitores de tela conseguem identificar sua finalidade."}
 ],
 challenge:{question:"Para criar o menu principal do site, qual elemento semântico é mais adequado?",answer:"A tag nav. Ela identifica uma área de navegação. Dentro dela, você pode colocar links para as páginas ou seções."}
},
{
 title:"CSS e Box Model: entendendo os espaços<span>.</span>",
 intro:"Todo elemento HTML é tratado como uma caixa. Entender o Box Model ajuda a controlar tamanho, bordas e espaçamentos sem ficar tentando valores aleatórios.",
 sections:[
  {heading:"As quatro partes da caixa",code:'.card {\n  width: 280px;\n  padding: 20px;\n  border: 1px solid #34513b;\n  margin: 16px;\n}',language:"CSS",body:"Content é o conteúdo. Padding é o espaço interno. Border é a borda. Margin é o espaço externo entre elementos."},
  {heading:"Uma regra que facilita a vida",code:'* {\n  box-sizing: border-box;\n}',language:"CSS",body:"Com border-box, padding e border entram no cálculo da largura e altura definidas. Isso torna o dimensionamento mais previsível."},
  {heading:"Experimente no Trilhê",body:"Abra css/style.css, encontre um cartão e teste aumentar o padding. Depois altere o margin. Observe como o espaço dentro do cartão é diferente do espaço entre cartões."}
 ],
 challenge:{question:"Qual propriedade cria espaço dentro de um elemento?",answer:"padding. Já margin cria espaço do lado de fora, separando o elemento dos outros."}
},
{
 title:"Flexbox: alinhando elementos sem sofrimento<span>.</span>",
 intro:"Flexbox é um sistema de layout CSS ótimo para organizar itens em uma dimensão: uma linha ou uma coluna. Ele é muito usado em menus, botões e grupos de conteúdo.",
 sections:[
  {heading:"Ativando o Flexbox",code:'.menu {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}',language:"CSS",body:"display:flex ativa o Flexbox. align-items alinha no eixo transversal. justify-content distribui os itens no eixo principal. gap define o espaço entre eles."},
  {heading:"Direção dos itens",code:'.lista {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}',language:"CSS",body:"row organiza em linha (padrão). column organiza em coluna. Você pode combinar Flexbox com media queries para adaptar o layout."},
  {heading:"Quando usar?",cards:[["Menu","Alinhar marca e links na mesma linha."],["Botões","Deixar botões lado a lado com espaçamento."],["Cabeçalho","Distribuir logo, navegação e ações."]]}
 ],
 challenge:{question:"Qual propriedade distribui os itens ao longo do eixo principal?",answer:"justify-content. Experimente center, space-between e flex-start para perceber a diferença."}
},
{
 title:"CSS Grid: criando layouts em duas dimensões<span>.</span>",
 intro:"Grid organiza elementos em linhas e colunas ao mesmo tempo. É ótimo para montar grades de cartões, áreas de conteúdo e layouts de página.",
 sections:[
  {heading:"Uma grade de três colunas",code:'.cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}',language:"CSS Grid",body:"repeat(3, 1fr) cria três colunas com a mesma fração do espaço disponível. gap define o intervalo entre linhas e colunas."},
  {heading:"Grade que se adapta",code:'.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}',language:"CSS Grid responsivo",body:"auto-fit encaixa a quantidade de colunas que couber. minmax define que cada coluna terá no mínimo 220px e poderá crescer."},
  {heading:"Flexbox ou Grid?",cards:[["Flexbox","Melhor para alinhar elementos em uma direção."],["Grid","Melhor para estruturar linhas e colunas juntas."]]}
 ],
 challenge:{question:"Você quer criar cartões em três colunas iguais. Qual propriedade deve configurar?",answer:"grid-template-columns: repeat(3, 1fr). Ela cria três colunas com larguras iguais."}
},
{
 title:"Responsividade: do computador ao celular<span>.</span>",
 intro:"Um site responsivo se adapta a diferentes tamanhos de tela. Não basta diminuir tudo: é preciso reorganizar o conteúdo para continuar confortável de usar.",
 sections:[
  {heading:"Media query",code:'.hero {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n@media (max-width: 760px) {\n  .hero {\n    grid-template-columns: 1fr;\n  }\n}',language:"CSS",body:"A primeira regra cria duas colunas. Quando a tela chega a 760px ou menos, a media query muda o layout para uma coluna."},
  {heading:"Cuidados importantes",rows:[["Viewport","Inclua a meta viewport no HTML."],["Larguras flexíveis","Prefira %, fr, rem e max-width quando fizer sentido."],["Imagens","Use max-width: 100% e height: auto."],["Toque","Deixe botões e links com área confortável."],["Teste","Confira a página em telas estreitas e largas."]]},
  {heading:"Teste rápido",code:'img {\n  max-width: 100%;\n  height: auto;\n}\n\n.container {\n  width: min(100% - 32px, 1120px);\n  margin-inline: auto;\n}',language:"CSS",body:"Essas regras evitam que imagens ultrapassem o contêiner e mantêm o conteúdo centralizado com uma largura máxima."}
 ],
 challenge:{question:"Qual recurso CSS permite aplicar estilos diferentes conforme a largura da tela?",answer:"@media. Exemplo: @media (max-width: 600px) { ... } aplica regras em telas de até 600 pixels."}
},
{
 title:"DOM e interações: JavaScript no navegador<span>.</span>",
 intro:"DOM é a representação da página que o JavaScript consegue acessar e modificar. Com ele, podemos responder a cliques, trocar textos, mostrar avisos e validar campos.",
 sections:[
  {heading:"Encontrando e alterando um elemento",code:'const titulo = document.querySelector("#titulo");\ntitulo.textContent = "Olá, Trilhê!";',language:"JavaScript",body:"querySelector encontra o primeiro elemento que combina com um seletor CSS. textContent altera o texto que aparece dentro dele."},
  {heading:"Respondendo a um clique",code:'const botao = document.querySelector("#meu-botao");\n\nbotao.addEventListener("click", () => {\n  alert("Você clicou!");\n});',language:"JavaScript",body:"O evento click acontece quando a pessoa clica no botão. A função passada para addEventListener será executada nesse momento."},
  {heading:"Lendo um campo",code:'const campo = document.querySelector("#nome");\nconst nome = campo.value.trim();\n\nif (nome === "") {\n  alert("Digite seu nome.");\n}',language:"JavaScript",body:"value lê o que foi digitado. trim remove espaços extras no começo e no fim. if verifica se o valor está vazio."}
 ],
 challenge:{question:"Qual propriedade você usa para ler o texto digitado em um input?",answer:"A propriedade value. Exemplo: const destino = document.querySelector('#destino').value;."}
}
];

let currentLesson=0;
const completed=new Set();
const content=document.getElementById("lesson-content");
const navItems=[...document.querySelectorAll(".nav-item")];
const progressFill=document.getElementById("progress-fill");
const progressCount=document.getElementById("progress-count");
const completeButton=document.getElementById("complete-button");
const prevButton=document.getElementById("prev-button");
const nextButton=document.getElementById("next-button");

function escapeHtml(value){
 return value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}
function codeBlock(code,language){
 const safe=escapeHtml(code);
 return '<div class="code-card"><div class="code-head"><span>'+language+'</span><button class="copy-button" type="button" data-copy="'+encodeURIComponent(code)+'">Copiar código</button></div><pre><code>'+safe+'</code></pre></div>';
}
function renderLesson(){
 const lesson=lessons[currentLesson];
 let html='<span class="eyebrow">AULA '+String(currentLesson+1).padStart(2,"0")+' / '+String(lessons.length).padStart(2,'0')+'</span><h1>'+lesson.title+'</h1><p class="intro">'+lesson.intro+'</p>';
 lesson.sections.forEach(section=>{
  html+='<section class="content-section"><h2>'+section.heading+'</h2>';
  if(section.body) html+='<p>'+section.body+'</p>';
  if(section.cards) html+='<div class="concept-grid">'+section.cards.map(card=>'<article class="concept"><b>'+card[0]+'</b><p>'+card[1]+'</p></article>').join("")+'</div>';
  if(section.code) html+=codeBlock(section.code,section.language);
  if(section.rows) html+='<div class="explain-list">'+section.rows.map(row=>'<div class="explain-row"><code>'+escapeHtml(row[0])+'</code><span>'+row[1]+'</span></div>').join("")+'</div>';
  html+='</section>';
 });
 html+='<section class="challenge"><h2>✳ Hora de praticar</h2><p>'+lesson.challenge.question+'</p><button type="button" id="show-answer">Ver explicação</button><div class="answer" id="answer">'+lesson.challenge.answer+'</div></section>';
 content.innerHTML=html;
 navItems.forEach((item,index)=>item.classList.toggle("active",index===currentLesson));
 prevButton.disabled=currentLesson===0;
 nextButton.disabled=currentLesson===lessons.length-1;
 completeButton.textContent=completed.has(currentLesson)?"✓ Aula concluída":"Marcar aula como concluída";
 completeButton.classList.toggle("done",completed.has(currentLesson));
 updateProgress();
 document.getElementById("show-answer").addEventListener("click",()=>{
  const answer=document.getElementById("answer");
  answer.classList.toggle("visible");
  document.getElementById("show-answer").textContent=answer.classList.contains("visible")?"Ocultar explicação":"Ver explicação";
 });
 content.querySelectorAll("[data-copy]").forEach(button=>{
  button.addEventListener("click",async()=>{
   const code=decodeURIComponent(button.dataset.copy);
   try{await navigator.clipboard.writeText(code);button.textContent="Copiado!";}
   catch{button.textContent="Selecione e copie";}
  });
 });
}
function updateProgress(){
 const count=completed.size;
 progressFill.style.width=(count/lessons.length*100)+"%";
 progressCount.textContent=count+" de "+lessons.length;
}
navItems.forEach(item=>item.addEventListener("click",()=>{currentLesson=Number(item.dataset.lesson);renderLesson();}));
prevButton.addEventListener("click",()=>{if(currentLesson>0){currentLesson--;renderLesson();}});
nextButton.addEventListener("click",()=>{if(currentLesson<lessons.length-1){currentLesson++;renderLesson();}});
completeButton.addEventListener("click",()=>{
 if(completed.has(currentLesson))completed.delete(currentLesson);else completed.add(currentLesson);
 renderLesson();
});
renderLesson();

// Laboratório de código: exercícios com correção e prévia isolada.
const exercises = [
 {
  instruction:"O título não foi fechado. Complete a tag para organizar corretamente a página.",
  starter:'<!doctype html>\n<html lang="pt-BR">\n<body>\n  <h1>Minha primeira página\n  <p>Estou aprendendo HTML.</p>\n</body>\n</html>',
  checks:[{test:/<h1>[^<]*<\/h1>/i,message:"Feche a tag h1 com </h1>."}],
  success:"Boa! Você corrigiu a estrutura do HTML. O título agora está fechado corretamente."
 },
 {
  instruction:"O nome da propriedade CSS está escrito errado. Corrija para que o cartão fique verde.",
  starter:'<!doctype html>\n<html lang="pt-BR">\n<head>\n<style>\n.card {\n  backgroud: #c4f46b;\n  color: #172010;\n  padding: 24px;\n  border-radius: 12px;\n}\n</style>\n</head>\n<body>\n  <div class="card">Meu primeiro cartão</div>\n</body>\n</html>',
  checks:[{test:/background\s*:\s*#c4f46b/i,message:"Confira a propriedade background e o valor #c4f46b."},{test:/backgroud\s*:/i,invert:true,message:"Ainda existe a palavra backgroud escrita incorretamente."}],
  success:"Muito bem! Você encontrou e corrigiu o erro de CSS. O cartão já pode receber a cor de fundo."
 },
 {
  instruction:"O seletor está procurando um ID que não existe. Faça o JavaScript encontrar o elemento correto e trocar o texto para “JavaScript funcionando!”.",
  starter:'<!doctype html>\n<html lang="pt-BR">\n<body>\n  <p id="mensagem">Texto antigo</p>\n  <script>\n    document.querySelector("#mensagen").textContent = "JavaScript funcionando!";\n  </script>\n</body>\n</html>',
  checks:[{test:/querySelector\(["']#mensagem["']\)/,message:"Use o seletor #mensagem, sem erro de digitação."},{test:/JavaScript funcionando!/i,message:"Mantenha o texto “JavaScript funcionando!” no código."}],
  success:"Funcionou! Você corrigiu o seletor e o JavaScript consegue atualizar o conteúdo da página."
 }
];
const exerciseSelect=document.getElementById("exercise-select");
const codeEditor=document.getElementById("code-editor");
const exerciseInstructions=document.getElementById("exercise-instructions");
const exerciseFeedback=document.getElementById("exercise-feedback");
const preview=document.getElementById("code-preview");
function loadExercise(){
 const exercise=exercises[Number(exerciseSelect.value)];
 codeEditor.value=exercise.starter;
 exerciseInstructions.textContent=exercise.instruction;
 exerciseFeedback.textContent="Faça a correção e clique em “Verificar resposta”.";
 exerciseFeedback.className="exercise-feedback";
 runCode();
}
function runCode(){
 preview.srcdoc=codeEditor.value;
}
function checkExercise(){
 const exercise=exercises[Number(exerciseSelect.value)];
 const code=codeEditor.value;
 const failed=exercise.checks.find(check=>{
  const matched=check.test.test(code);
  return check.invert ? matched : !matched;
 });
 if(failed){
  exerciseFeedback.textContent="Ainda não está certo. "+failed.message;
  exerciseFeedback.className="exercise-feedback error";
 }else{
  exerciseFeedback.textContent=exercise.success;
  exerciseFeedback.className="exercise-feedback success";
 }
}
exerciseSelect.addEventListener("change",loadExercise);
document.getElementById("reset-code").addEventListener("click",loadExercise);
document.getElementById("run-code").addEventListener("click",runCode);
document.getElementById("check-code").addEventListener("click",checkExercise);
loadExercise();
