# Trilhê — sua trilha de viagem

O Trilhê é uma experiência para criar uma trilha sonora que acompanhe o tempo de uma viagem.

## Estrutura
- `index.html`: página inicial e escolha do serviço de música.
- `travel.html`: formulário de origem e destino.
- `css/style.css`: estilos responsivos.
- `js/`: interações do navegador.

## Revisão aplicada
- Identidade e textos atualizados para a marca Trilhê.
- Corrigido o caminho da folha de estilos para `css/style.css`.
- Links internos ajustados para caminhos relativos.
- Formulário valida campos obrigatórios e impede origem e destino iguais.
- Tratamento de respostas inesperadas e falhas de conexão com o servidor.
- Link final da playlist validado para aceitar somente HTTPS e domínios oficiais do serviço escolhido.

## Backend ainda necessário
Este repositório contém o frontend. Para conectar contas e criar playlists de verdade, ainda é necessário implementar e publicar estas rotas:
- `GET /api/auth?provider=spotify|youtube`: inicia o OAuth do serviço escolhido.
- `POST /api/travel`: recebe `{ "provider", "partida", "chegada" }` e calcula a rota/duração.
- `POST /api/create-playlist`: cria a playlist e devolve `{ "playlist_url": "https://..." }`.

As credenciais OAuth devem ficar exclusivamente no servidor, em variáveis de ambiente. Nunca coloque `CLIENT_SECRET`, tokens ou chaves privadas no HTML ou JavaScript enviado ao navegador.

**Atenção:** o YouTube Music não oferece uma API pública independente para todas as operações de biblioteca e playlist. A integração precisa respeitar as APIs oficiais do Google/YouTube e suas permissões.

## Publicação
O frontend pode ser servido como arquivos estáticos. Os botões de login e criação de playlist só funcionarão quando o backend estiver implantado e configurado no mesmo domínio ou quando as URLs da API forem ajustadas.