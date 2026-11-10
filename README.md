# Trilhê — sua trilha de viagem

O Trilhê cria uma trilha sonora para acompanhar o tempo de uma viagem. A primeira versão será integrada exclusivamente ao **YouTube Music**, usando a conta Google autorizada pelo próprio usuário.

## Experiência
1. A pessoa conecta sua conta Google.
2. Informa o ponto de partida e o destino.
3. O Trilhê calcula a duração do trajeto.
4. O sistema seleciona vídeos musicais e cria uma playlist na conta YouTube da pessoa, que poderá ser acessada pelo YouTube Music.

## Estrutura atual
- `index.html`: página inicial.
- `travel.html`: formulário de origem e destino.
- `css/style.css`: estilos responsivos.
- `js/`: interações do navegador.

## Integração com YouTube Music

Não existe uma API pública independente do YouTube Music para todas as funções de biblioteca. A integração será feita pela **YouTube Data API v3**, com OAuth 2.0 do Google. A API oficial permite criar playlists no canal autenticado e adicionar vídeos a elas. A disponibilidade de uma faixa dentro da experiência do YouTube Music depende do catálogo e das regras do próprio serviço.

Documentação:
- [YouTube Data API — criar playlists](https://developers.google.com/youtube/data/guides/implementation/playlists)
- [YouTube Data API — criar uma playlist](https://developers.google.com/youtube/data/reference/rest/v3/playlists/insert)
- [YouTube Data API — adicionar vídeos à playlist](https://developers.google.com/youtube/data/reference/rest/v3/playlistItems/insert)

## Backend necessário

O repositório ainda precisa do backend para concluir a autenticação e a criação real das playlists. As próximas rotas serão:
- `GET /api/auth`: inicia o OAuth do Google.
- `GET /api/auth/callback`: recebe o retorno da autorização.
- `POST /api/travel`: calcula a rota e sua duração.
- `POST /api/create-playlist`: cria a playlist e adiciona os vídeos selecionados.

As credenciais OAuth, chaves e tokens devem ficar exclusivamente no servidor, em variáveis de ambiente. Nunca coloque segredos no HTML ou JavaScript do navegador.

## Configuração e publicação

A integração exige um projeto no [Google Cloud Console](https://console.cloud.google.com/), a YouTube Data API v3 ativada e credenciais OAuth configuradas. O domínio publicado também precisará ser cadastrado nas origens e URLs de redirecionamento autorizadas do OAuth.
