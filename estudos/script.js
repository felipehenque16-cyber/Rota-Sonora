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
 let html='<span class="eyebrow">AULA '+String(currentLesson+1).padStart(2,"0")+' / 06</span><h1>'+lesson.title+'</h1><p class="intro">'+lesson.intro+'</p>';
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