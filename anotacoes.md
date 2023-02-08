# Conceitos do Next.js 

- O Next é um Framework que vai trazer uma série de funcionalidades que são comuns
em aplicações front end que utilizam React de forma mais tranquila sem a necessidade 
de muita configuração.

- O Next nasceu com o proposito de resolver um problema que sempre aconteceu com aplicações
com React e os Famosos SPAs. 

- Antes do surgimentos de Framework como o Next as SPAs tradicionais sempre tiveram um 
problema de indexação, na parte de SO, esse problema foi que deu origem ao Next.

- As SPAs resolveram problemas de falta de interatividade, falta de flexibilidade
e também o problema de não conseguir ter vários front ends com clientes diferentes
IOS, Android, Web, mesmo  as SPAs resolvendo esses problemas elas tem um problema 
de não ter um formato ou uma forma simples de se trabalhar com indexação dentro do 
Google, Apesar que hoje o Google já consegue fazer indexação de SPAs em sua grande 
maioria mas ainda possue problemas quando a aplicação precisa ser acessada por alguns 
tipos de bots por exemplo.

## Next (SSR)
- O Next vem introduzindo um conceito muito legal que é o SSR(Server Side Rendering)
imagine o conceito normal de um front end e um back end separados, quando o usuario 
acessa o front end ao invés dele acessar esse front end diretamente ele vai acessar 
um back end da aplicação porém esse back end é um servidor e não o back end(API REST) da aplicação 
ou seja o next ele cria um terceiro serviço que é um servidor escrito em Node.js.

Next.js (Servidor Node.js) <===========> Front-end <===============> Back-end (API REST) 

- O Next.js é um servidor em node.js e isso é muito interessante por que código React 
nada mais é que código JavaScript e o node é uma plataforma para executar código JavaScript
se o React é apenas código JavaScript quer dizer que o node consegue entender código React
pelo lado do servidor e isso é muito interessante, quando o usuário acessa a aplicação Next 
o que acontece é que o servidor Next dispara uma requisição para o back end que devolve 
uma resposta para o servidor Next através de JSON, o Servidor Next mesmo em uma camada 
back end vai montar o HTML da página, e isso será devolvido ao usúario no front end.

Front-end <=========== Next.js (Servidor Node.js) <===============> Back-end (API REST)

- Note que nesse contexto de SSR temos uma camada a mais que vai intermediar o front e o back 
da aplicação, e essa camada a mais é um servidor escrito em node.

## Next (SSG)
- Uma das funcionalidades mais interessantes do Next é o conceito de SSG (Static Site Generation)
imagine um portal de noticias e imagine que esse site tenha um bilhão de acessos simultaneos 
esses um bilhão de acessos vão gerar um bilhão de requisições ao back end, um bilhão de acessos 
ao banco de dados, isso faz com que todo o provesso se repita um bilhão de vezes, porém quando 
se utiliza o SSG do Next ele faz com que a página acessada fique em um Cache com HTML puro gerado 
de forma estatico por um intervalo de tempo e com esse intervalo de tempo a página é atualizada 
com o servidor.

Front-end <===============> Cache (CDN) <===============> Next.js (Servidor Node.js) <===============> Back-end (API REST)

- Basicamente o SSG cria uma vesão estatica de cada página da aplicação ou das  páginas escolhidas para que se 
evite ficar chamando o servidor de forma desnecessária multiplas vezes.

# Criando projeto com Next.js

- Verificar a documentação
- Para criar o projeto rode o comando npx create-next-app@latest 
- Esse projeto é um projeto React como qualquer outro por que o React roda por traz do Next
- O Next já deixa dentro do package.json alguns scripts já criados: 
npm run dev ------> Ele vai rodar o ambiente de desenvolvimento da aplicação
npm run build ----> Ele vai executar a build de produção 
npm start -----> Ele vai rodar o ambiente de produção

# Pasta Pages 
- O Next possue um local para colocar as páginas da aplicaçao toda vez que for 
criar uma pagina, uma rota que o usuário vai acessar esse componente sempre será 
criado dentro da pasta pages. 

- Eu posso criar a pasta src e posso mover a pasta pages para dentro dela.

# TypeScript

- O Next gera um arquivo de configuração do typeScript de forma automatica quando instalamos 
basta instalar o typeScript o Types/react e o types/node como dependencias de desenvolvimento rodando o comando abaixo 
    npm i typescript @types/react @types/node -D 

- Após instalar as dependendicas basta rodar o projeto e o Next já cria o arquivo do TypeScript 

# index 

- O arquivo index que está dentro da pasta pages sempre vai ser a Home page 



