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

## Pasta Pages 
- O Next possue um local para colocar as páginas da aplicaçao toda vez que for 
criar uma pagina, uma rota que o usuário vai acessar esse componente sempre será 
criado dentro da pasta pages. 

- Eu posso criar a pasta src e posso mover a pasta pages para dentro dela.

## TypeScript

- O Next gera um arquivo de configuração do typeScript de forma automatica quando instalamos 
basta instalar o typeScript o Types/react e o types/node como dependencias de desenvolvimento rodando o comando abaixo 
    npm i typescript @types/react @types/node -D 

- Após instalar as dependendicas basta rodar o projeto e o Next já cria o arquivo do TypeScript 

## index 

- O arquivo index que está dentro da pasta pages sempre vai ser a Home page

# Criando rotas da aplicação

## File-system Routing
- Uma das coisas mais legais no Next é o File-system- Routing (Roteamento baseado em arquivos físicos)
para eu criar uma página que será uma rota basta criar essa página dentro da pasta pages, e esse componente
será exportado como default. 

- Existem rotas dentro da aplicação que precisam receber parametros como na rota de produto que é necesário 
saber qual produto o usuário clicou, dentro do next quando trabalhamos com paramtros nessas rotas é bem 
imteressante por que o nome dos arquivos podem ser parametrizados, para isso eu posso criar com [] e dentro 
passar o paramtros que quero receber [id], isso faz o Next entender que qualquer coisa que for digitado 
depois da rota ele vai cair na rota com parametrizada. 
 Eu posso ter acesso a esses paramtros importando o useRouter de dentro do next/router
    import { useRouter } from "next/router";

 E posso desestruturar uma propriedade chamada query e acessa-las:

                    import { useRouter } from "next/router";

                    export default function Product() {
                        const { query } = useRouter()

                        return (
                            <h1>Product: {JSON.stringify(query)}</h1>
                        )
                    }
    

- Da para criar subpastas dentro da pasta pages e essas pastas serão as páginas, dentro delas posso criar 
arquivos index.tsx e tambám outros componetes que também viram páginas, o index se torna a rota principal 
da página que é a pasta.

- Dá para ter vários níveis de subpastas dentro de pages assim dá para criar estruturas bem complexas de 
páginas dentro do Next utilizando esse sistema de File-System Routing.

# Configurando documento HTML 

- Dentro de outros projetos que não utilizam o Next existe um arquivo index.html dentro da estrutura de pastas
para conseguir modificar coisas no doccumento global html , é necessário criar um arquivo dentro da pasta pages
chamado _document.tsx  esse arquivo também será um componente e dentro desse componente é importado agumas 
estruturas de dentro do next/document

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

## Google Fonts
- Dentro do Head eu posso colar o link de importação da fonte do Google Fonts, é importante fechar as tags unicas 
dos links o crossorigin precisa ficar assim crossOrigin="anonymous"

- PS = Toda vez que for feita alguma modificação dentro do _document.tsx é necessário reiniciar o servidor de 
desenvolviemto rodando novamente a aplicação em modo dev.

- Após verificar no inspecionar do navegador notei que os links da fonte não estava sendo gerados no 
heade do navegador, isso acontece por que o Next cria uma pasta de cache chamada .next, para resolver
basta parar o projeto e delear essa pasta , em seguida rodar o projeto em modo dev novamente que a 
pasta é recriada, isso resolveu o problema.

- Tudo que é colocado dentro do arquivo _document aparece em todas as páginas.


