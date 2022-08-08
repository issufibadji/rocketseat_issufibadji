# **<font color=red>JavaScript - Anotações</font>** 
Paginas da [Documentação de JS javascript.info](https://javascript.info/) | [Documentação de JS MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | [Documentação de JS devdocs.io](https://devdocs.io/javascript/) | [Documentação de JS nodeschool.io](https://nodeschool.io/pt-br/index.html#workshoppers)
## **<font color=green>O Guia Estelar de JavaScript</font>**
<!-- ❌✅✔️-->
### **1.✅Introdução**
**✔️Abertura**
Nesse curso vamos aprender sobre JavaScript, entender os tipos de dados, variáveis, funções, manipulação de dados, pra que precisamos de todos esses recursos, e mais.

**✔️JavaScript**
* Neste curso vamos falar sobre o JavaScript Core, que é o JavaScript puro, sem nenhum framework. 
  * JavaScript é uma linguagem de programação que roda no navegador do usuário, e pode rodar no computador com algumas aplicações que serão citadas em seguida no curso. 
  * podemos fazer alteração do site ou aplicativo, conforme a interação do usuário
  * Com o JavaScript podemos criar aplicações web, mobile com React Native, e desktop com Electron.
* Roda tambem no computador(Back-end).

**✔️O que podemos fazer com JavaScript**

* podemos criar aplicaçoes web, mobile(React Native), desktop(electron)
* As empresas famosa que usam
  * Facebook(inst, whatsapp)
  * google(Youtube, Gmail, Drive)
  * Uber
  * Netflix
  * TikTok
  * ...
  * 99,99% dos sites na web usam JavaScript
  * Linguagem obrigatória para quem programa front-end web
<hr>

### **2.✅Primeiros Passos**

  **✔️Sintaxe**

  Nesta aula vamos entender melhor a sintaxe, que é o jeito de escrever código para ele ser entendido pela máquina, que todas as linguagens tem e que engloba 82% dos erros de iniciantes em programação.
  
  ```js
    console.log("Bem vindos ao Starter")
  ```

  **✔️Maneiras de executar o JavaScript**

  Nesta aula vamos citar 3 maneiras de executar códigos em JavaScript, a primeira maneira é pelo navegador, clicando na tecla F12 em qualquer website o menu do DevTools, que são ferramentas para desenvolvedores, na aba console podemos executar código JavaScript. A segunda forma é pela aplicação web CodePen, abrindo o endereço codepen.io/pen você encontra um ambiente que se pode utilizar codigo HTML, CSS e JavaScript. Também pode-se usar o Visual Studio Code, criando um arquivo HTML com a tag <script> e colocando o código dentro.

   ```html
    <script>
      console.log("Bem vindo ao stater")
    </script>
   ```
  **✔️Adicionando arquivos JS**
   
  Uma outra maneira de organizar o código JavaScript é criando um arquivo com um final ".js" no diretório junto ao arquivo HTML, de preferência evitando usar caracteres especiais como letras acentuadas e espaços. Para conectar este arquivo JS ao HTML, pode-se usar a linha de código <script src="./nomedoarquivo.js"></script> no body, agora abrindo este arquivo HTML o código será executado.
    
   ```html
    <!DOCTYPE html>
      <html lang="en">

      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>

      <body>
          <script src="./script.js"></script>
      </body>

      </html>
   ```

  **✔️Comentários**

  Para comentar seu código no Javascript, pode se usar // antes da linha, para definir aquela linha inteira, para comentar mais de uma linha, pode se usar um /* no começo do comentário e um */ no final. Comentários não são executados, mas são mostrados para quem visualiza o código.

  ```js
    //comentarios em linha
    /*comentarios de varias linhas  */
  ```
<hr>


### **3.✅Tipos de dados**

[Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

**✔️Introdução**

Para entendermos mais sobre os tipos de dados, podemos compará-los com elementos da gramática, para aprendermos precisamos saber como escrever, os significados e continuar aprendendo para expandir nosso vocabulário. A dinâmica do aprendizado nesse módulo vai consistir em conceitos e escrita, deixando a aplicação para um outro momento, vamos aprender os tipos de dados mais utilizados.

**✔️String**
O tipo de dados String consiste em uma cadeia de caracteres, ou seja, textos. Para denotar string no JavaScript são usados aspas duplas ( " " ), aspas simples ( ' ' ) e template literals ou template strings ( ), template literals permitem textos multilinhas e expressões de linguagem com os caracteres ${ }, por exemplo: console.log(A soma de duas unidades é ${1+1}), já as outras não, por exemplo: console.log("Isso é um texto").
```js
//string
console.log("Issufi")
alert("Issufi");
console.log('Badji')
//soma
console.log(1+2)

//interpolação
console.log( `soma de ${1+2}`)
```

**✔️Number**

No JavaScript temos 4 tipos de números, os inteiros (por exemplo: 13), os reais ou float (por exemplo: 83.1), o Not a Number (NaN) e o infinito (Infinity).

```js
//number int
console.log(33)
//soma de int
console.log(12+13)
//divisão d float
console.log(12.5/12)
//impossivel
console.log(12.5/"issufi") // NaN
alert( "not a number" / 2 ); // NaN, such division is erroneous
//Infinity(false/true)
console.log(12.5===Infinity)
//Infinity
console.log(Infinity)
alert( Infinity ); // Infinity
```

**✔️Boolean**
No JavaScript, um dado boolean pode ter apenas 2 valores, verdadeiro (true) e falso (false).
```js
//true==>verdadeiro
console.log(true)
alert(true);
//false==>falso
console.log(false)
alert(false);
```

**✔️Undefined vs null**
No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos. A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.
```js
//indefinido
console.log(undefined)
//objeto sem nada
console.log(null)
//null é igual a undefined= false
console.log(null===undefined)//false
```

**✔️Object**
- O tipo de dado Object é estrutural, contendo atributos, ou propriedades, e métodos, ou funcionalidades.
- Em contraste, os objetos são usados ​​para armazenar coleções de dados e entidades mais complexas. 
- Um objeto é denotado com os caracteres `{ }`, atributos e métodos com nome: valor . Por exemplo `{ nome: "João", idade: 20 }. `
* Saiba mais [objeto](https://javascript.info/object)
```js
//Objeto
//{ Prototype: Object }
console.log({
  nome: "Issufi",
  Sobrenome:"Badji",
  idade:`${50} anos`,
  ocupacao:"Estudante",
  andar:function(){
    console.log('andar')
  }
})

```

**✔️Array**
O tipo de dados Array, ou vetor, também é estrutural, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [ ] , por exemplo:` [ "Leite", "Ovos", "Manteiga", 1, 2 ]` . Mais [array](https://javascript.info/array)

```js
//array
console.log([
"Leite",
"Ovos",
2,
5
])
```

**✔️Conclusã**
- Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados organizados em 4 categorias: 
  - Primitive, 
  - Primitive Value, 
  - Structural e Structural Primitive. 
- Os primitivos são:`String, Number, Boolean, Undefined, Symbol, BigInt`. 
Os estruturais são: `Object e Function`. Além destes, temos o primitivo estrutural que consiste apenas no dado `null`
```js

```
<hr>


### **4.✅Variáveis**

**Conhecendo as variáveis**

```js

```

**Tipos dinâmicos**

```js

```

**Scope e var**

```js

```

**Scope let e const**

```js

```

**Nomeando variáveis**
```js

```
<hr>

### **5.✅Praticando e avançando**

**Declaration assignment var**

```js

```
**Agrupando declarações**

```js

```
**Concatenando e interpolando variáveis**

```js

```
**Objects**
```js

```

**Arrays**
```js

```

**Exercícios**
```js

```
<hr>

### **6.❌Funções**
<hr>


### **7.❌Manipulando dados**

<hr>

### **8.❌Expressões e Operadores**

<hr>

### **9.❌Condicionais e controle de fluxo**

<hr>

### **10.❌Estruturas de repetição**

<hr>

### **11.❌Consolidando com exercícios**

<hr>

## **<font color=green>Pilotando com a DOM</font>** 


### **Introdução**
<hr>


### **Selecionando elementos**
<hr>


### **Manipulando conteúdos**
<hr>


### **Manipulando estilos e classes**
<hr>



### **Navegando pelos elementos**
<hr>



### **Criando e adicionando elementos na página**
<hr>



### **Eventos**
<hr>



### **Praticando**
<hr>


## **<font color=green> Javascript Assíncrono</font>**


### Introdução
<hr>


### Síncrono vs Assíncrono

<hr>

### Callback Conceito

<hr>

### setTimeout
<hr>


### Conectando API com HTTPS e Callback

<hr>

### Promise Intro

<hr>

### O que é uma Promise

<hr>

### Promises no Código
<hr>


### Utilizando o Codesandbox

<hr>

### Axios

<hr>

### Promises com axios

<hr>

### Executando Promessas em Paralelo com Promise all

<hr>

### Introdução Async / Await

<hr>

### Async / Await

<hr>

### Async / Await com Fetch

<hr>

### Async / Await com Axios

<hr>

