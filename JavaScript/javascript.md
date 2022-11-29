# **<font color=red>JavaScript - Anotações</font>**

Paginas da [Documentação de JS javascript.info](https://javascript.info/) | [Documentação de JS MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | [Documentação de JS devdocs.io](https://devdocs.io/javascript/) | [Documentação de JS nodeschool.io](https://nodeschool.io/pt-br/index.html#workshoppers)

## **<font color=green>O Guia Estelar de JavaScript</font>**

<!-- ❌✅✔️-->

### **1.✅Introdução**

**✔️Abertura**
Nesse curso vamos aprender sobre JavaScript, entender os tipos de dados, variáveis, funções, manipulação de dados, pra que precisamos de todos esses recursos, e mais.

**✔️JavaScript**

- Neste curso vamos falar sobre o JavaScript Core, que é o JavaScript puro, sem nenhum framework.
  - JavaScript é uma linguagem de programação que roda no navegador do usuário, e pode rodar no computador com algumas aplicações que serão citadas em seguida no curso.
  - podemos fazer alteração do site ou aplicativo, conforme a interação do usuário
  - Com o JavaScript podemos criar aplicações web, mobile com React Native, e desktop com Electron.
- Roda tambem no computador(Back-end).

**✔️O que podemos fazer com JavaScript**

- podemos criar aplicaçoes web, mobile(React Native), desktop(electron)
- As empresas famosa que usam
  - Facebook(inst, whatsapp)
  - google(Youtube, Gmail, Drive)
  - Uber
  - Netflix
  - TikTok
  - ...
  - 99,99% dos sites na web usam JavaScript
  - Linguagem obrigatória para quem programa front-end web
  <hr>

### **2.✅Primeiros Passos**

**✔️Sintaxe**

Nesta aula vamos entender melhor a sintaxe, que é o jeito de escrever código para ele ser entendido pela máquina, que todas as linguagens tem e que engloba 82% dos erros de iniciantes em programação.

```js
console.log("Bem vindos ao Starter")
```

Resumo
Cobrimos 3 funções específicas do navegador para interagir com os visitantes:

`alert`
mostra uma mensagem.

```js
alert(`You are ${age} years old!`) // You are 100 years old!
```

`prompt`
mostra uma mensagem pedindo ao usuário para inserir texto. Retorna o texto ou, se o botão Cancelar ou Escfor clicado, null.

```js
let age = prompt("How old are you?", 100)
```

`confirm`
mostra uma mensagem e espera que o usuário pressione “OK” ou “Cancelar”. Retorna truepara OK e falsepara Cancel/ Esc.

```js
let isBoss = confirm("Are you the boss?")

alert(isBoss) // true if OK is pressed
```

Todos esses métodos são modais: eles pausam a execução do script e não permitem que o visitante interaja com o restante da página até que a janela seja descartada.

Existem duas limitações compartilhadas por todos os métodos acima:

A localização exata da janela modal é determinada pelo navegador. Normalmente, fica no centro.
A aparência exata da janela também depende do navegador. Não podemos modificá-lo.
Esse é o preço da simplicidade. Existem outras maneiras de mostrar janelas mais agradáveis ​​e interação mais rica com o visitante, mas se “sinos e assobios” não importam muito, esses métodos funcionam bem.

[alert-prompt-confirm](https://javascript.info/alert-prompt-confirm)

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
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <script src="./script.js"></script>
  </body>
</html>
```

**✔️Comentários**

Para comentar seu código no Javascript, pode se usar // antes da linha, para definir aquela linha inteira, para comentar mais de uma linha, pode se usar um /_ no começo do comentário e um _/ no final. Comentários não são executados, mas são mostrados para quem visualiza o código.

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
alert("Issufi")
console.log("Badji")
//soma
console.log(1 + 2)

//interpolação
console.log(`soma de ${1 + 2}`)
```

**✔️Number**

No JavaScript temos 4 tipos de números, os inteiros (por exemplo: 13), os reais ou float (por exemplo: 83.1), o Not a Number (NaN) e o infinito (Infinity).

```js
//number int
console.log(33)
//soma de int
console.log(12 + 13)
//divisão d float
console.log(12.5 / 12)
//impossivel
console.log(12.5 / "issufi") // NaN
alert("not a number" / 2) // NaN, such division is erroneous
//Infinity(false/true)
console.log(12.5 === Infinity)
//Infinity
console.log(Infinity)
alert(Infinity) // Infinity
```

**✔️Boolean**
No JavaScript, um dado boolean pode ter apenas 2 valores, verdadeiro (true) e falso (false).

```js
//true==>verdadeiro
console.log(true)
alert(true)
//false==>falso
console.log(false)
alert(false)
```

**✔️Undefined vs null**
No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos. A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.

```js
//indefinido
console.log(undefined)
//objeto sem nada
console.log(null)
//null é igual a undefined= false
console.log(null === undefined) //false
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
  Sobrenome: "Badji",
  idade: `${50} anos`,
  ocupacao: "Estudante",
  andar: function () {
    console.log("andar")
  },
})
```

**✔️Array**
O tipo de dados Array, ou vetor, também é estrutural, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [ ] , por exemplo:` [ "Leite", "Ovos", "Manteiga", 1, 2 ]` . Mais [array](https://javascript.info/array)

```js
//array
console.log(["Leite", "Ovos", 2, 5])
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

Abertura
Descrição
Nesse curso vamos aprender sobre JavaScript, entender os tipos de dados, variáveis, funções, manipulação de dados, pra que precisamos de todos esses recursos, e mais.
**Conhecendo as variáveis**
Descrição
Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: `var, let e const`, por exemplo: `var clima = "quente"`, onde `var` é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

**Variáveis**
Na maioria das vezes, um aplicativo JavaScript precisa trabalhar com informações. Aqui estão dois exemplos:

Uma loja online – as informações podem incluir mercadorias sendo vendidas e um carrinho de compras.
Um aplicativo de bate-papo – as informações podem incluir usuários, mensagens e muito mais.
Variáveis ​​são usadas para armazenar essas informações.

Uma variável
Uma variável é um “armazenamento nomeado” para dados. Podemos usar variáveis ​​para armazenar guloseimas, visitantes e outros dados.

Para criar uma variável em JavaScript, use a palavra- `let` chave.

A instrução abaixo cria (em outras palavras: declara ) uma variável com o nome “message”, em seguida Agora, podemos colocar alguns dados nele usando o operador de atribuição =:

```js
let message

message = "Hello" // store the string 'Hello' in the variable named message
```

Para ser conciso, podemos combinar a declaração e a atribuição da variável em uma única linha:

```js
let message = "Hello!" // define the variable and assign the value

alert(message) // Hello!
```

Também podemos declarar várias variáveis ​​em uma linha:

```js
let user = "John",
  age = 25,
  message = "Hello"
```

Isso pode parecer mais curto, mas não recomendamos. Para melhor legibilidade, use uma única linha por variável.

A variante de várias linhas é um pouco mais longa, mas mais fácil de ler:

```js
let user = "John"
let age = 25
let message = "Hello"
```

_var_ ao invés de _let_
Em scripts mais antigos, você também pode encontrar outra palavra-chave: _var_ em vez de _let_:

```js
var message = "Hello"
```

A varpalavra-chave é quase a mesma que let. Ele também declara uma variável, mas de uma maneira um pouco diferente, “old-school”.

Existem diferenças sutis entre lete var, mas elas ainda não importam para nós. Vamos abordá-los em detalhes no capítulo _O velho "var"_.

**Uma analogia da vida real**
Podemos entender facilmente o conceito de “variável” se a imaginarmos como uma “caixa” de dados, com um adesivo com um nome exclusivo.

Por exemplo, a variável messagepode ser imaginada como uma caixa rotulada "message"com o valor "Hello!"nela:

Podemos colocar qualquer valor na caixa.

Também podemos alterá-lo quantas vezes quisermos:

```js
let message

message = "Hello!"

message = "World!" // value changed

alert(message)
```

Quando o valor é alterado, os dados antigos são removidos da variável:

Também podemos declarar duas variáveis ​​e copiar dados de uma para a outra.

```js
let hello = "Hello world!"
let message

// copy 'Hello world' from hello into message
message = hello

// now two variables hold the same data
alert(hello) // Hello world!
alert(message) // Hello world
```

ou

```js
//var clima = "quente"//muda o seu valor durante aplicação
//let clima = "quente"//muda o seu valor durante aplicação
//clima = "frio"
const clima = "quente" //não muda o seu valor durante aplicação

console.log(clima)
```

**Declarar duas vezes aciona um erro**
Uma variável deve ser declarada apenas uma vez.
Uma declaração repetida da mesma variável é um erro:

```js
let message = "This"

// repeated 'let' leads to an error
let message = "That" // SyntaxError: 'message' has already been declared
```

Portanto, devemos declarar uma variável uma vez e depois nos referir a ela sem let.
<h>
**Resumo**
Podemos declarar variáveis ​​para armazenar dados usando as palavras-chave `var`, `let` ou `const`.

`let`– é uma declaração de variável moderna.
`var`– é uma declaração de variável antiga. Normalmente não o usamos, mas abordaremos diferenças sutis letno capítulo O antigo "`var`" , caso você precise deles.
`const`– é como `let`, mas o valor da variável não pode ser alterado.
As variáveis ​​devem ser nomeadas de uma forma que nos permita entender facilmente o que está dentro delas.

**Tarefa**
Trabalhando com variáveis

1.Declare duas variáveis: admine name.
2.Atribua o valor "John"a name.
3.Copie o valor de namepara admin.
4.Mostre o valor de adminusing alert(deve produzir "John").
solução:

```js
//No código abaixo, cada linha corresponde ao item na lista de tarefas.
let admin, name // can declare two variables at once
name = "John"
admin = name
alert(admin) // "John"
```

[variavel](https://javascript.info/variables)

**Tipos dinâmicos**
Descrição
O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

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

Resumo
Existem 8 tipos de dados básicos em JavaScript.

Sete tipos de dados primitivos:
`number` para números de qualquer tipo: inteiro ou ponto flutuante, os inteiros são limitados por .±(253-1)
`bigint` para números inteiros de comprimento arbitrário.
`string` para cordas. Uma string pode ter zero ou mais caracteres, não há um tipo de caractere único separado.
`boolean` para true/ false.
`null` para valores desconhecidos – um tipo autônomo que tem um único valor null.
`undefined` para valores não atribuídos – um tipo autônomo que tem um único valor undefined.
`symbol` para identificadores exclusivos.
E um tipo de dados não primitivo:
`object` para estruturas de dados mais complexas.
O `typeofo` perador nos permite ver qual tipo está armazenado em uma variável.

Geralmente usado como `typeof x`, mas `typeof(x)` também é possível.
Retorna uma string com o nome do tipo, como "string".
Para `null` retornos "object"– isso é um erro na linguagem, não é realmente um objeto.
**Tarefas**
Aspas de string

Qual é a saída do script?

```js
let name = "Ilya"

alert(`hello ${1}`) // ?

alert(`hello ${"name"}`) // ?

alert(`hello ${name}`) // ?
```

solucção

```js
//Backticks incorporam a expressão dentro ${...}da string.
let name = "Ilya"

// the expression is a number 1
alert(`hello ${1}`) // hello 1

// the expression is a string "name"
alert(`hello ${"name"}`) // hello name

// the expression is a variable, embed it
alert(`hello ${name}`) // hello Ilya
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
Objects
Descrição
Para criarmos um objeto utilizamos as chaves envolvendo as propriedades, que são atribuídas com dois pontos, por exemplo: const person = { name: 'John', age: 20 }, para acessar essas propriedades usamos o ".", por exemplo: console.log(person.name).

```js
const person = {
  name: "John",
  age: 30,
  weight: 88.6,
  isAdmin: true,
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(`${person.name} tem ${person.age} anos`)
```

**Arrays**
Arrays
Descrição
Para criarmos um vetor utilizamos [ ] envolvendo os valores, por exemplo: const animals = [ "Lion", "Monkey" ], para acessar esses valores usamos a posição do valor no vetor, começando por 0, por exemplo: console.log(animals[0]). Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length, por exemplo: animals.length.

```js
const animals = [
  "Lion",
  "Monkey",
  {
    name: "Cat",
    age: 30,
  },
]

//Como acessar valor de um array
console.log(animals) //Lion, Monkey,Cat
console.log(animals[2]) //cat
console.log(animals.length) //3
console.log(animals[2].name) //Cat
console.log(`${animals[2].name} tem ${animals[2].age} anos`) //Cat tem 30 anos
```

**Exercícios**

```js
//1.Declara uma variavel de nome weight
//let weight
//2.Que tipo de dados é a variavel cima
//console.log(typeof weight)
/*
          3.Declara uma variavel e atribua valores para um dos dados
            * name: String
            * age:number(integer)
            * starts: Number(float)
            * isSubcribed: Boolean
        */
//let name = "Issufi"
//let age = 20
//let starts = 2.3
//let isSubcribed = true

/*
 *   4.A variável student abaixo é de que tipo de dados?
 * 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
 * 4.2Mostre no console a seguinte mensagem:
 * <name> de idade <age>pesa<weight>kg
 * Atenção, substitua <name><age> e <weight>pelos valores de cada propriedade do objeto
 */

let student = {
  name: "issufi",
  age: 20,
  weight: 17.5,
}
//console.log(`${student.name} tem ${student.age} anos e ${student.weight} kg`)

/*
5.Declara uma variavel do tipo arary, de nome students e atibua a ela nenhhum valor, ou seja, somente o rarry vazio
*/

//let students = []

/* 
6.Reatibua valor para a variavel acima, colocando dentro dela o objeto student da questão 4(Não copia e colocar o objet, mas usar o objeto criado e inserir ele no array)
*/
students = [student]

//console.log(students)

/*
7.cologque no console o valor da posição zero array acima */
//console.log(students[0])

/*
8.Crie um novo student e coloque na posição 1 do arry students
*/
const John = {
  name: "Jhon",
  age: 23,
  weight: 45.5,
  isSubscribe: true,
}

//students = [student, John]
students[1] = John
console.log(students)
```

<hr>

### **6.❌Funções**

<hr>

### **7.❌Manipulando dados**

**Prototype**

O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.
![console](./GuiaEstelarJavaScript/scripts/protoype.PNG)

```js
"Issufi".length
6
"Issufi".__proto__
String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}anchor: ƒ anchor()at: ƒ at()big: ƒ big()length: 0name: "big"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()[[PrimitiveValue]]: ""
23.0.__proto__
Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
```

**Type conversion**

Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.

```js

```

**Strings em números**

É possível transformar números em formato de string através do método Number() e números em formato number em string usando o método String().

```js

```

**Contando caracteres e digitos**
Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.

```js

```

**Casas decimais**
Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

```js

```

**Maiúsculas e minúsculas**
Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.

```js

```

**Separando strings**
Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("\_") ) as palavras são juntadas com o argumento de separador.

```js

```

**Encontrando palavras em frases**
Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

**Criando array com construtor**
Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").

```js

```

**Elementos do Array**
Para contar a quantidade de elementos em um array pode-se usar o método length.

```js

```

**Strings para arrays**
Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").

```js

```

**Manipulando arrays**
Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.

```js

```

<hr>

### **8.❌Expressões e Operadores**

```js

```

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
