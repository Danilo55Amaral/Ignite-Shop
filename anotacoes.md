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

# Configurando Stitches 

- O Stitches é uma biblioteca alternativa ao Styled-Components porém tem uma api uma forma de
escrever as estilizações de uma maneira um pouco diferente, muito bom para lidar com componentes 
visuais que possuem muitas variações de estilos baseados em propriedades.
link   https://stitches.dev 

- Para instalar rodar o comando seguinte  npm install @stitches/react   

- Dentro da pasta Styles eu crio um arquivo index.ts, eu importo uma função 
chamada createStitches essa função devolve uma série de configurações, essa 
biblioteca permite que se tenha um tema global, eu devo exportar esse createStitches
e para isso eu exporto fazendo uma desestruturação fazendo todas as exportações 
que for necessária.

import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            rocketseat: '#8257e6',
        }
    }
})

- Para criar um componente estilizado devemos criar como um componente separado assim como
é no styled-components. Primeiro eu importo o styled de dentro de styles, eu crio a estrutura 
como um componente passando o styled, o primeiro parametro do styled é a tag html utilizada 
e o segundo paramtro é um objeto com as estilizações.

- Aqui as coisas se diferem do Styled-components por que no stitches escrevemos as estilizações 
como sendo um objeto JavaScript e a sintaxe precisa ser uma sintaxe JavaScript. 

import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat'
})

export default function Home() {
  return (
    <Button>Hello Wolrd</Button>
  )
}

- Como o Next utiliza o conceito de SSR alguns frameworks como o proprio stitches, caso o JS do 
Browser seja desabilitado a estilização desaparece, diferente do que acontece com o html da página 
para resolver isso o proprio stitches deixa uma solução na documentação.

- Dentro do _document utilizamos criamos uma tag style e importamos o getCssText essa função faz com 
que quando o usuario carregar a página ela vai pelo servidor Node.Js do Next vai montar essa página
la dentro verificar qual todo o código css necessário para aquela página e retorna dessa função e 
escreve todo esse código Css dentro da tag style. 

import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      
      <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

# Estilos globais

- Eu criei dentro da pasta styles um arquivo global.ts eu crio dentro desse arquivo 
um componente que chamei de globalStyles e utilizei a função globalCss que importei 
de dentro do meu arquivo index onde fiz a configuração do stitcher, dentro desse 
componente eu coloco meus estilos Globais.

import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    }
})

## _app.tsx

- Vamos colocar esse globalStyles dentro de _app.tsx esse arquivo app funciona como um 
container para as páginas da aplicação é como um componente que carrega junto com todas 
as páginas da aplicação. 

- Basta importar o globalStyles e chamar  como uma função, é interessante deixar logo após 
as importações fora da função do componente. 

# Cabeçalho da aplicação

- Eu posso criar minhas estilizações em pastas com arquivos separados igual faço no styled 


