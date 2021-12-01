<h1 align="center">Ignite - Trilha ReactJS</h1>

#Índice
- [🛠 Sobre o projeto](#-sobre-o-projeto)
  - [Passos para criar a estrutura:](#passos-para-criar-a-estrutura)
  - [Instalando o Babel (Converte o JavaScript de modo que os navegadores consigam compreender o código JS em qualquer navegador.)](#instalando-o-babel-converte-o-javascript-de-modo-que-os-navegadores-consigam-compreender-o-código-js-em-qualquer-navegador)
  - [3. rodar yarn webpack server](#3-rodar-yarn-webpack-server)
- [🚀 Tecnologias utilizadas neste projeto](#-tecnologias-utilizadas-neste-projeto)
- [📥 Como usar](#-como-usar)
- [🚀 Autor](#-autor)
  
---
# 🛠 Sobre o projeto
#Arquivos ".jsx" é quando usamos html dentro do javascript, pode usar apenas ".js" ou ".jsx".

## Passos para criar a estrutura:

- [x] yarn init -y (vai gerar o package.json onde contém as dependências do projeto).
- [x] yarn add react (instala a dependência do react que vai parar dentro do package.json e cria a node_modules que armazena
as dependências das bibliotecas instaladas no projeto, por exemplo, o código do próprio react vai para node_modules e fica citado em package.json).
- [x] yarn add react-dom (que é a forma de trabalhar com react na web. Contém a árvore dom de elementos do HTML.)

## Instalando o Babel (Converte o JavaScript de modo que os navegadores consigam compreender o código JS em qualquer navegador.)

1. yarn add @babel/core @babel/cli @babel/preset-env -D (o -D indica que é para usar apenas para desenvolvimento.)

@babel/core: É a biblioteca do babel. 
@babel/cli:  Para conseguir executar o babel por linha de comando.
@babel/preset-env: É uma biblioteca do babel para identificar o ambiente que a aplicação está sendo executada para converter o código da melhor forma possível.


2.  depois de instalado é necessário criar o babel.config.js e colocar (exportar) as bibliotecas que serão usadas.
3.  yarn babel src/index.js --out-file dist/bundle.js (yarn babel é para executar o babel e o resto do  texto indica o caminho, onde o código
javascript está e para onde ele vai ficar convertido. bundle.js é uma conversão utilizad para ter códigos babel.)
4.  yarn add @babel/preset-react -D (instala a biblioteca para o babel reconhecer o React).

@babel/preset-react: Identifica o ambiente react.

Instalando o Webpack (Ajuda a deixar o projeto mais legível pegando arquivos .sass e transformando .css e etc.)

1. yarn add webpack webpack-cli webpack-dev-server -D
2. Criar um arquivo de configuração do webpack chamado webpack.config.js e criar as configurações.
3. yarn add babel-loader -D (integração entre o babel e o webpack.)


Instalando o HTMLWebpackPlugin para fornecer HTML estático.

1.  yarn add html-webpack-plugin -D
2. importar dentro de webpack.config.js "const HtmlWebpackPlugin = require('html-webpack-plugin')" e utilizar dentro de do arquivo de configurações do webpack. 

Instalando o WebPackDevServer para otimizar e executar automaticamente o webpack.

1. yarn add webpack-dev-server -D
2. dentro do arquivo de configurações webpack.config.js configurar da seguinte maneira:

  devServer:{
        static: path.resolve(__dirname, 'public'),
    },

3. rodar yarn webpack server
---

# 🚀 Tecnologias utilizadas neste projeto
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [x] JAVASCRIPT
- [x] REACT JS
- [x] WEBPACK
- [x] BABEL

# 📥 Como usar
```js

    //Clonar o repositório
    $ git clone https://github.com/TayseRosa/Ignite-ReactJS-ConfigurandoAmbiente.git

    //Entrar no diretório
    $ cd Ignite-ReactJS-ConfigurandoAmbiente

    //Startar o projeto
    $ yarn install
    $ yarn webpack server

``` 

# 🚀 Autor

<a href="https://www.tayserosa.dev">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/31596454?v=4" width="100px;" alt="Tayse Rosa" style="border-radius:50%"/>
 <br />
 <sub><b>Tayse Rosa</b></sub></a> <a href="https://www.tayserosa.dev" title="Tayse Rosa">🚀</a>


Feito com ❤️ por Tayse Rosa 🚀

👋🏽 Entre em contato!

![Linkedin Badge](https://img.shields.io/badge/-TayseRosa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tayse-rosa-3b683151/)[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TayseRosa/)

<h5> Créditos: Rocketseat - Ignite - Trilha React JS </h5>