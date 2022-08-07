# Apresentação de CSS
Vamos ver os fundamentos do CSS, como funciona, o que é o CSS afinal de contas, conceitos básicos como cascatas, especificidade, box model e muito mais.

Para consumir esse curso, é interessante que você já tenha um conhecimento de HTML.

Vamos embarcar nessa jornada?

# Conhecendo o CSS
## Introdução
## O que significa CSS ?
  * Cascading Style Sheet
  * Codigo para criar estilos no HTML
  * HTML é a estutura e o CSS é a beleza
  * CSS não é uma linguagem de programação, 
  * É uma linguagem style sheet

  ## Vamos ver exemplo

  ```HTML
  <!DOCTYPE html>
<html>
<head>
</head>
<body>

<h1>My First CSS Example</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
CSS

```CSS
    
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
```

# Como fazer comentário no CSS

Os comentários no css não irão afetar seu código, mas pode nos ajudar a lembrar de blocos de códigos ou agrupar e organizar nosso código, deixa dicas para a leitura e ajuda os outros a entenderem nosso código.

Apenas não esqueça de fechar um comentário aberto.

Os comentários abrem com `/* e terminam com */ .`

Você também pode usar um comentário para desabilitar partes do seu código, o que possibilitaria um debug mais fácil, ou caso deseje fazer alguma alteração sem quebrar todo o seu código.
## comentários
  * não irão afetar seu código
  * ajudar a lembrar de blocos de códigos
  * deixa dicas para a leitura
  * Apenas não esqueça de fechar um comentário aberto.
  * Os comentários abrem com /* e terminam com */ .

   ## Por exmplo:
   ```CSS
    /* comentarios em css */
  ```
```CSS
  /*anatomia do CSS*/

h1 {
    color: blue;
    font-size: 50px;
    background: gray;
}
```
# Anatomia
Nesta aula, falaremos sobre a anatomia do CSS, como criar esse CSS para poder alterar algum elemento do HTML.

Na verdade, é bem simples, temos o nome de algum elemento, uma chave aberta e uma fechada embaixo, e no meio vamos ter propriedades e seus valores.

Toda propriedade é seguida de : (dois pontos) e um valor e um ; (ponto e vírgula) para encerrar essa ideia de valor.

Abaixo um exemplo de CSS:
```CSS
  h1 {
    color: blue;
    font-size: 60px;
    background: gray;
  }
```
Os elementos do CSS são então:

Selectors: Nesse caso o h1, que vai buscar no HTML a tag h1 e aplicar as mudanças.

Declaration: As chaves e tudo dentro delas.

Properties: As coisas a serem alteradas.

Property values: Os novos valores que estamos atribuindo a tais propriedades.

# Selectores
Os seletores são o que conectam um elemento HTML com o CSS, existem vários tipos, inclusive, nós vimos um na última aula, o Element/Type selector, mas também temos o seletor global, que é um * (asterisco), ID selector, que é # (cerquilha, cardinal) e o ID do elemento HTML, class selector, que é um . (ponto) e o nome da classe, e mais alguns que podemos entender mais tarde no curso.

Os seletores que mais usaremos serão realmente apenas os anteriormente citados, e vamos entrar em exemplos de como usá-los:
#selector
conectar um elemento HTML COM CSS

## Tipo
  * Global selector `*`
  * Element/Type selector `h1, h2, p, div` 
  * ID Selector `#box, #container`
  * Class Selector `.read, m-4`
  * Attribute sector, Pseudo-classe, Pseudo-element, e outros

```HTML
  <div id="container" class="m-40">
    <h1>Título</h1>
    <h2>Subtitulo</h2>
 </div> 
``` 

```CSS
/*seletor global*/
*{
  margin:0;
}
```


```CSS
/* ID selector */
#container {
	width: 200px;
}

/* Class selector */
.m-40 {
	margin: 40px;
}

/* Element/Type selector + Agrupamento de seletores */
h1, h2 {
	color: blue;
	font-size: 60px;
	background: gray;
}
```

# **Box model**
Nesta aula falaremos sobre o conceito de caixas, já que o CSS trabalha com essa ideia de caixas, ou seja, o box model. Mas o quê exatamente é esse box model?

É uma caixa retangular. Essa caixa possui as mesmas propriedades de uma caixa 2D, e tem como propriedades:

* Tamanho (largura x altura): width e height, respectivamente
* Conteúdo: o content
* Bordas: o border
* Preenchimento interno: o padding
* Espaços fora da caixa: a margin
## <font color=green> Caixa </font>
* Quase todo elemento de uma página é considerado uma caixa: Posicionamentos, tamanhos, espaçamentos, bordas, cores, então, em suma, elementos HTML são caixas, assim como quase tudo no CSS.

```HTML
<h1>Evolua Rapido</h1>
<p>Descrição</p>
<button>Embarcar</button>
```
```CSS
/*
amanho (largura x altura): width e height, respectivamente
Conteúdo: o content
Bordas: o border
Preenchimento interno: o padding
Espaços fora da caixa: a margin
 */
h1{
  border: 1px solid red;
  margin: 20px;
  padding: 60px;
}
```
