# **<font color=red>CSS - Anotações</font>** 
Paginas da [Documentação de JS MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML) | [Documentação de JS devdocs.io](https://devdocs.io/html/) | [Documentação de JS nodeschool.io](https://nodeschool.io/pt-br/index.html#workshoppers)
# **<font color=green>Guia Estelar de CSS</font>**

## Apresentação de CSS
Vamos ver os fundamentos do CSS, como funciona, o que é o CSS afinal de contas, conceitos básicos como cascatas, especificidade, box model e muito mais.

Para consumir esse curso, é interessante que você já tenha um conhecimento de HTML.

Vamos embarcar nessa jornada?

## Conhecendo o CSS
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

## Como fazer comentário no CSS

Os comentários no css não irão afetar seu código, mas pode nos ajudar a lembrar de blocos de códigos ou agrupar e organizar nosso código, deixa dicas para a leitura e ajuda os outros a entenderem nosso código.

Apenas não esqueça de fechar um comentário aberto.

Os comentários abrem com `/* e terminam com */ .`

Você também pode usar um comentário para desabilitar partes do seu código, o que possibilitaria um debug mais fácil, ou caso deseje fazer alguma alteração sem quebrar todo o seu código.
### comentários
  * não irão afetar seu código
  * ajudar a lembrar de blocos de códigos
  * deixa dicas para a leitura
  * Apenas não esqueça de fechar um comentário aberto.
  * Os comentários abrem com /* e terminam com */ .

### Por exmplo:
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
## Anatomia
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

## Selectores
Os seletores são o que conectam um elemento HTML com o CSS, existem vários tipos, inclusive, nós vimos um na última aula, o Element/Type selector, mas também temos o seletor global, que é um * (asterisco), ID selector, que é # (cerquilha, cardinal) e o ID do elemento HTML, class selector, que é um . (ponto) e o nome da classe, e mais alguns que podemos entender mais tarde no curso.

Os seletores que mais usaremos serão realmente apenas os anteriormente citados, e vamos entrar em exemplos de como usá-los:
#selector
conectar um elemento HTML COM CSS

### Tipo
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

## **Box model**
Nesta aula falaremos sobre o conceito de caixas, já que o CSS trabalha com essa ideia de caixas, ou seja, o box model. Mas o quê exatamente é esse box model?

É uma caixa retangular. Essa caixa possui as mesmas propriedades de uma caixa 2D, e tem como propriedades:

* Tamanho (largura x altura): width e height, respectivamente
* Conteúdo: o content
* Bordas: o border
* Preenchimento interno: o padding
* Espaços fora da caixa: a margin
### <font color=green> Caixa </font>
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
## **Origem do CSS**

Vamos primeiro aprender a adicionar um estilo no nosso documento HTML, certo?

Começaremos pelo inline, que é dentro do próprio HTML, através da tag style, utilizada das seguintes formas:
```HTML
<h1 style="color: blue;">Título
	<strong style="color: red;">alo</strong>
</h1>
Ou na head do HTML, assim:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
	<style>
		h1 {
		color: blue;
		}

		strong {
			color: red;
		}
	</style>
</head>
```	
Porém, a forma mais comum, é através da tag link, onde vamos linkar um documento CSS externo, um outro arquivo para nosso documento HTML, feito da seguinte forma:
```HTML
<link rel="stylesheet" href="style.css">
```
Neste caso, o nosso documento CSS se chama style.css e sua relação com o HTML é de stylesheet.

A última forma é através do @import, que é na verdade uma regra do CSS, portanto, deve ser usada dentro do css, ao invés de dentro do HTML, como as duas primeiras formas, e seu uso é mostrado a seguir:
```CSS
@import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
```
Não é recomendado seu uso, pois leva um pouco mais de tempo do que através da tag link, fazendo a página ficar menos responsiva, demorando mais para o carregamento da mesma.

#A cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

*Seu estilo é lido de cima para baixo*, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.
São levados em consideração 3 fatores:
1. A origem do estilo;
2. A especificidade;
3. A importância; 


## origem do estilo
inline > tag style > tag link

```HTML
<!--tag style -->
<style>
  h1{
    color: gray;
  }
</style>

<!--inline -->
<h1 style="color:green" class="title"  id="my-title">Titulo <strong>Ola</strong></h1>
<p>Paragrafo</p>
```
```CSS
/*tag link */
h1{
  color: red;
}
h1{
  color: blue;
}

#my-title, 
#my-title strong{
color:gray;
}

.title{
  color:red;
}

body h1{
  color:blue;
}
*{
  color:green;
}
```
## especificidade
É um calculo matematica, onde tipo de selector e origem do estilo, possuem valores a serem considerados.

É um cálculo matemático, onde cada tipo de seletor e origem do estilo possuem valores a serem considerados.

Os mais fracos são universal selector, combinators e negation pseudo-class, com o valor de 0. 
Em seguida, com valor de 1, são os element type selector e pseudo-elements.

Também temos os classes e attribute selectors, com valor de 10, ou seja, são mais fortes que os anteriores.

O segundo mais forte, ID selector, com um valor de 100, vence todos os selectors anteriores.

Por fim, temos o inline, com o valor 1000, quaisquer desses selectors anteriormente citado

Resumido 
0.seleteor universal
1.elementos typo seletor
10.classe e atributo de selector
100.ID selesctor
1000.Inline
 ```HTML
<h1 style="color:green" class="title"  id="my-title">Titulo <strong>Ola</strong></h1>
<p>Paragrafo</p>
```
```CSS
#my-title, 
#my-title strong{
color:gray;
}

.title{
  color:red;
}

body h1{
  color:blue;
}
*{
  color:green;
}
```

## A regra  importância

sintaxe: !important

São raras as ocasiões nas quais se devem usar um iportant, pois é em geral uma má pratica, visto que quebra o fluxo natural da cascata e pode acabar te atrapalhando caso você a deixe em algum lugar no seu código.

Portanto evite ao máximo seu uso.

* Cuidado, evite o uso
* Não é considerado uma boa prática 
* Quebra o Fluxo natural da cascata
*Ele sobre escriver tudo 


OBS:
Só necessario usar quando está usando a biblioteca de outra pessoa que não é seu e vc  não consegue acessar biblioteca dele. Aí pode usar para forçar o seu estilo.

```CSS
#my-title, 
#my-title strong{
color:gray;
}

.title{
  color:red;
}

 h1{
  color:blue !important;
}
*{
  color:green;
}
```

## At rules @

Descrição
São regras relacionadas ao comportamento do CSS, começa com um sinal de @ seguido do identificador e do valor.

São as seguintes:

`@import` serve para incluir um CSS externo.
`@media` são regras condicionais para vários dispositivos.
`@font-face` é para colocar fontes externas.
`@keyframes` serve para as animations do CSS.

### Exemplos comuns

```CSS
@import"http://local.co/style.css";
@import url("http://local.co/style.css");

@media(min-width:500px){
/* rule here*/
}

@font-face{
  /* rules here*/
}

@fontframe nameofanimation{
  /*rules here*/
}
```
## Shorthand
Descrição
`Shorthand`É basicamente a ideia de junção de propriedades, para que fiquem de forma resumida e legível.

Abaixo um exemplo de propriedades com e sem o shorthand:

```CSS
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand*/
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */ 
    font: bold italic .8em/1.2 Arial, sans-serif;
}
```
### Detalhes
Algumas das características do shorthand:

Não irá considerar propriedades anteriores, ou seja, caso faça um shorthand, apenas ele será considerado, quaisquer propriedades anteriores serão substituídas pelas do shorthand.

Os valores que não forem especificados irão assumir o valor padrão.

Por fim, geralmente, a ordem descrita não importa, mas, caso haja muitas propriedades com valores semelhantes, poderemos encontrar problemas.

### Propriedades que aceitam shorthand
`all, animation, background,border,border-block-end,border-block-start,border-bottom,border-color,border-image,border-inline-end, border-inline-start,border-left,border-radius,border-right,border-style,border-top,border-width,column-rule,columns,contain-intrinsic-size,flex,flex-flow,font,gap,grid,grid-area,grid-column,grid-row,grid-template,list-style,margin,mask,offset,outline,overflow,padding,place-content,place-items,place-self,scroll-margin,scroll-padding,scroll-timelin,text-decoration,text-emphasis,transition`

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**

## Funções
Descrição
Um tipo de valor existente no CSS, é estruturado com um nome seguido de abre e fecha parênteses.

Recebe um argumento, que são seus valores.

Um exemplo de função é:

```CSS
@import url("http://local.co/style.css");
{
color: rgb(255,0,100);
width:calc(100%-10px);

}

```

## DevTools

Descrição
Uma das ferramentas mais importantes para o desenvolvedor CSS é o DevTools (do inglês, Ferramentas de Desenvolvedor), é recomendado que você estude e faça uso da mesma, pois será muito utilizada.

f12-> abre DevTools

## Cuidados com a escrita
Descrição
É importante prestar atenção à sua escrita do CSS, identar seu código para facilitar a leitura, e mais importante, manter tudo organizado e funcionando!
## Formatação de texto/erro no escrita de css
```CSS
p{
  margin: 0 auto;
  padding - left:15px;/*Cuidado com espaços no valores de atributos*/

}

```

## Vendor prefixes
Descrição
São coisas que permitem que browsers adiocionem `features` a fim de colocar em uso alguma novidade que vemos no CSS.

Exemplos:
```CSS
p {
	-webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge*/
	-o-background-clip: text; /* Opera */
```
Você também pode consultar se a feature pode ser utilizada através dos 
sites:

[https://ireade.github.io/which-vendor-prefix]

[https://caniuse.com]
# **<font color=green>Nem tudo são Pixels</font>**
## Abertura
Descrição
Nesse curso vamos aprender como funcionam as unidades de medidas e valores no CSS, como tipos numéricos, unidades comuns, distâncias absolutas e relativas entre os elementos, porcentagens e muito mais.

## Introdução
Descrição
Nessa aula vamos falar sobre valores e unidades de medidas no CSS e como podemos usar a documentação do MDN para aprender mais.

Valores e unidades de medidas
Cada propriedade possui valores `property: value`
Estudo constante a fim de entender as propriedades e seus valores

### Na prática
Como conhecer e estudar os valores na documentação?
`<color> <length>`
Os termos podem variar `values` ou `data types`
[Documentação MDN:] [https://developer.mozilla.org/en-US/]

## Tipos numéricos e unidades comuns
Descrição
Nessa aula vamos falar sobre tipos numéricos.

### Tipos numéricos
`<integer>` - número inteiro como `-10 ou 223`
`<number>` - número decimal como `-2.4, 64 ou 0.234`
`<dimension>` - é um `<number>` com uma unidade junto: `90deg`, `2s`, `8px`
`<percentage>` - representa uma fração de outro número: `50%`

### Unidades comuns
`<length>` - é um dos mais usados no CSS e representa um valor de distância: `px`, `em`, `vw`
`<angle>` - representa um ângulo: `deg`, `rad`, `turn`
`<time>` - representa um tempo: `s`, `ms`
`<resolution>` - representa resoluções para dispositivos: `dpi`

## Distâncias absolutas e relativas
Descrição
Nessa aula vamos entender sobre distâncias absolutas e relativas.

### Distâncias absolutas <length>

São fixas e não alteram seu valor.

| Unidade  | Nome                | Equivalência         |
|----------|---------------------|----------------------|
| cm       | Centímetros         | 1cm = 96px/2.54      | 
| in       | Inches (polegadas)  | 1in = 2.54cm = 96px  | 
| px       | Pixels              | 1px = 1/96th of 1in  |

*o mais comum e mais utilizado é o **px**

*não é recomendado usar cm

### Distâncias relativas

São relativas a um outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

Benefício: Maior adaptação aos diferentes tipos de tela.

| Unidade  | Relativo a                                    |
|----------|-----------------------------------------------|
| em       | Tamanho da font do elemento pai               |
| rem      | Tamanho da font do elemento raiz (root/html)  | 
| vw       | 1% da viewport wid                            |  
| vh       | 1% da viewport height                         |

Normalmente o tamanho da font padrão do navegador é de 16px e para mudar esse valor temos que fazer a alteração no root ou no elemento html.
```CSS
:root {
	font-size: 18px;
}
```
/* OU */
```HTML
html {
	font-size: 18px;
}
```
O viewport é a parte da tela que está sendo exibida. No caso dos navegadores web, é o que é exibido na janela/tela do documento. Conteúdos que estão fora do viewport só serão exibidos quando feito um scroll da área de visualização.

## Porcentagens %
Descrição

As porcentagens são valores bem flexíveis
Em muitos casos é tratado da mesma maneira que as distâncias <length>
Sempre será relativo a algum valor
💻 Exemplo
Relativo ao elemento pai
```HTML
<ul>
	<li>One</li>
	<li>Two</li>
	<li>Three
		<ul>
			<li>Three A</li>
			<li>Three B</li>
			<ul>
				<li>Three B 2</li>
			</ul>
		</ul>
	</li>
</ul>
```
```CSS
li {
    font-size: 80%;
}
```

## Position
Descrição

Posições
 `<position>`

Representa um conjunto de coordenadas 2D:
top, right, bottom, left e center
Usado para alguns tipos de propriedades como o background-position

Não confundir com a propriedade `position`

```HTML

<div class="box">
  </div>
```

```CSS
.box{
  height: 300px;
  width:400px;
  background-image: url(http://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-position: right 50px;
}
```

## Funções
Descrição
 Vamos falar sobre funções no CSS.

Em programação, funções são reconhecidas por causar um reaproveitamento de código.
Exemplos de funções do CSS:

`rgb()`
`hsl()`
`url()`
`calc()`
Dentro dos parêntesis são passados argumentos

[Link da documentação do MDN:](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)

## Strings e identificadores
Descrição
Strings: texto envolto em aspas
```CSS
.box::after {
	content: "Isso é uma string" /*o texto ficara dentro da img*/
}
```
Identificadores: podemos ter nomes de cores como red, black, gold
# **<font color=green>Uma caixa dentro da outra</font>**
## Abertura
Descrição
Nesse curso vamos aprender como funciona o Box Model, espaçamentos, preenchimentos, bordas, além dos display-block e display-inline. Esses são conceitos base que vão te ajudar a evoluir muito no CSS.
## Introdução
Descrição
O **Box Model** é fundamental para fazer layouts para web porque ele vai te dar maior facilidade na hora de aplicar o CSS. Ao entender os conceitos do Box Model muitas questões do CSS começam a fazer sentido.

### O que é o Box Model?

Cada elemento é representado como uma caixa retangular

Essa caixa possui propriedades de uma caixa em 2 dimensões (largura x altura)
Propriedades da caixa

Tamanho (largura x altura) → width | height
Conteúdo → `content` 
Bordas → `border` 
Preenchimento interno → `padding` 
Espaços fora da caixa → `margin` 

<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/box-model.png">
</div>
## Box Sizing

Descrição
Nessa aula vamos ver sobre o `box-sizing` que é o responsável pelo calculo do tamanho total da caixa `(box)`.

Podemos usar a ferramenta de desenvolvedor do próprio navegador para visualizar as especificações dos elementos da página

<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/box-sizing.png">
</div>

💻 Exemplo:
HTML:
```HTML
<div>
	CSS é incrível!
</div>
```
CSS:
```CSS
div {
   width: 100px; 
   height: 100px;
   border: 1px solid red;
   margin: 10%;
}
```
Esse é o resultado obtido ao usar o código acima:
<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/img1.png">
</div>

Quando o padding é adicionado (`padding: 0 20px;`) faz com que aumente a largura da caixa, deixando de respeitar os 100px de largura:

<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/img2.png">
</div>

E é por isso que é tão importante conhecer a propriedade do `box-sizing`.

Por padrão o navegador vai calcular o tamanho da caixa pelo content-box e vai somar com os outros boxes, no exemplo acima no lugar de `100px` a caixa vai ficar com uma largura de `140px`. Para que isso não aconteça, é possível mudar qual vai ser a referência para o calculo do tamanho da caixa adicionando a propriedade `box-sizing: border-box;`.

Dessa forma o elemento vai ficar com a largura `(width)` determinado, que no caso do exemplo citado é de `100px`.

<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/img3.png">
</div>
Normalmente usa-se o código abaixo como forma de "resetar" o box-sizing que vem por padrão nos navegadores.

```CSS
* {
   box-sizing: border-box;
}
```
O seletor * seleciona todos os elementos da página.
## Display-block-inline
Descrição

`display: block; vs display: inline;`
Como as caixas se comportam em relação as outras caixas
Comportamento externo das caixas
## Display Block
Ocupa toda a linha, colocando o próximo elemento abaixo desse
<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/img4.png">
</div>
width e height são respeitados no  Display Block
<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/img5.png">
</div>

`padding, margin, border` irão funcionar normalmente

<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/img6.png">
</div>

`<p> <div> <section>`, todos os headings `<h1> <h2>`...

## Display Inline
Os elementos ficam ao lado do outro e não empurram outros elementos para baixo

<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/img7.png">
</div>

`width e height` não funcionam ou seja, não respeitados Display Inline

<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/img8.png">
</div>

Somente valores horizontais de `margin`

<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/img9.png">
</div>

`<a>, <strong>, <span>, <em>`

## Margin

Descrição
`Margin`, é o espaço (margem) entre os elementos

Podemos dividir o margin em 4 valores:

- margin-top | margin-right | margin-bottom | margin-left 
- values: `<length> | <percentage> | auto` 

Geralmente usamos uma forma abreviada (`shorthand`) para escrever o `margin`. Esse formato segue o sentido horário iniciando pelo `top`, seguindo para `right`, `bottom` e `left`.

`margin: 12px 16px 10px 4px;` /* TOP = 12px | RIGHT = 16px | BOTTOM = 10px | LEFT = 4px */
`margin: 12px 16px 0; `/* TOP = 12px | RIGHT = 16px | BOTTOM = 0px | LEFT = 16px */
`margin: 8px 16px; `/* TOP = 8px | RIGHT = 16px | BOTTOM = 8px | LEFT = 16px */
`margin: 8px; `/* TOP = 8px | RIGHT = 8px | BOTTOM = 8px | LEFT = 8px */ 

O `margin` é aplicado em elementos com `display block`
Cuidado com o `margin` collapsing que é quando o `top` se junta ao `bottom`

## Padding
Descrição
O padding é o preenchimento interno da caixa.

A propriedade padding pode ser escrita como nos formatos apresentados abaixo:

`padding-top | padding-right | padding-bottom | padding-left`

Geralmente usamos uma forma abreviada (shorthand) para escrever o padding. Esse formato segue o sentido horário iniciando pelo top, seguindo para right, bottom e left.

`padding: 12px 16px 10px 4px;` /* TOP = 12px | RIGHT = 16px | BOTTOM = 10px | LEFT = 4px */
`padding: 12px 16px 0;` /* TOP = 12px | RIGHT = 16px | BOTTOM = 0px | LEFT = 16px */
`padding: 8px 16px;` /* TOP = 8px | RIGHT = 16px | BOTTOM = 8px | LEFT = 16px */
`padding: 8px;` /* TOP = 8px | RIGHT = 8px | BOTTOM = 8px | LEFT = 8px */
O `padding` pode ter valores (`values`) de comprimento (`px, em, rem`) ou de porcentagem (`%`)

O `padding` poderá causar diferença na largura de um elemento

## Border-outline
Descrição
São as bordas da caixa

[Documentação do MDN:](https://developer.mozilla.org/en-US/docs/Web/CSS/border)

`value: <border-style> | <border-width> | <border-color>` 

` style: solid | dotted | dashed | double | groove | ridge | inset | outset` 
` width: <length>` 
` color: <color> ` 
```CSS
div {
	/* shorthand */
	border-top: solid 2px; /* top | right | bottom | left */

	/* style */
	border: solid;

	/* width <length> | style */
	border: 2px dotted;

	/* style | color */
	border: outset #f33;

	/* width | style | color */
	border: medium dashed green;

}
```
### E o outline?
O outline é muito semelhante ao border, mas difere em 4 sentidos:
Não modifica o tamanho da caixa, pois não é parte do Box Model
Poderá ser diferente de retangular
Não permite ajuste individuais
Mais usado pelo user agent para acessibilidade
# **<font color=green>Agora sim, cores</font>**
## Abertura cores
Descrição
Nesse curso vamos aprender a como trabalhar com cores e backgrounds nos nossos elementos. Adicionar cores é algo necessário para qualquer layout e saber como trabalhar com imagens e cores de fundo é essencial.
### Introdução
Descrição

**Cores**
Usamos CSS para alterar cores do nosso documento.

**Tipos**
background-color (para caixas)
color (para textos)
border-color (para caixas)
outros

**Valores**
Podemos definir valores por:

palavra-chave `(blue, transparent)`
hexadecimal `(#990011)` -->RGB(veremlho 99, verde 00 e azul 11)
funções: `rgb, rgba, hsl, hsla`

### Keyword named values
Descrição
Nessa aula vamos entender as bases de como aplicar cores no CSS.
```CSS
element{
  /* Keiword values*/
color: currentcolor;

/*<nam-color> values*/
color:red;
color:orange;
color:tan;
}
```
Por exemplo:
HTML
```HTML
<div>
    <h1>Um texto aqui</h1>
    <p>Mais texto</p>
</div>
```
CSS

```CSS
div {
    color: blue;
}

h1 {
    color: red;
}
p{
  color:currentcolor;
}
```
### Hexadecimal
Descrição
Nessa aula vamos aprender a trabalhar com valores hexadecimal

```CSS
element{
/*<hex-color> values 0-9 e A-F*/
color: #090; /* RED, GREEN, BLUE */
color: #009900;
color: #090a;
color:#009900aa;/* o quarto grupo de num é trasparencia de cor*/
}
```
### RGB
Descrição

RGB → `Red, Green e Blue`
O alpha representa a transparência da cor
```CSS
element{
/*<rgb()> values */
color: rgb(34, 12, 64, 0.6) /* 0-255 */
color: rgba(255, 12, 64, 0.6)
}
```
### HSL
Descrição
HSL → `Hue - Saturation - Lightness`


<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/hsl-color-wheel.png">
</div>

```CSS
element{
  /** <hls()>values*/
color: hsl(180, 100%, 50%, 60%)
color: hsla(180, 100%, 50%, 60%)
}
```
### Global values
Descrição
Nessa aula vamos ver sobre os valores globais da propriedade color.
```CSS
element{
/* Global values */
color: inheritr; /* Herda a cor do elemento anterior */
color: initial; /* Volta a sua cor inicial */
color: unset; /* Pega a cor do contexto */
}
```
### Conclusão
Descrição
Entendendo esses princípios e com a prática, fica cada vez mais fácil entender como aplicar cores no CSS.
Referência
[Documentação do MDN-Color:](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
[convertacolor:] (https://convertacolor.com/)

<hr>

## Abertura Background
Descrição
Nesse curso vamos aprender a como trabalhar com cores e backgrounds nos nossos elementos. Adicionar cores é algo necessário para qualquer layout e saber como trabalhar com imagens e cores de fundo é essencial.
###  Introdução
Descrição
Nas próximas aulas nós vamos ver mais sobre a propriedade background.

**Background** Define um fundo para nosso elemento Sua área de atuação é a caixa toda Por padrão, é transparente

Exemplos:

- Usar cores solidas
- Usar imagens
- Controlar
   - a posição das imagens
   - se elas se repetem ou não
   - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente 
###  Background-color
Descrição
A propriedade background-color define a cor de fundo do elemento selecionado.
<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/bg1.png">
</div>
HTML
```HTML
<header>

</header>
<main>
    <h1>Evolua rápido com a tecnologia</h1>
    <p>Junte-se a milhares de devs e acelere
    na direção dos seus objetivos</p>
</main>
```
CSS
```CSS
* {
    margin: 0;
}

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
}
```

###  Background-image-repeat
Descrição
Para adicionar uma imagem como background podemos usar a propriedade background-image
Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade background-repeat
<div align="center">
 <img height="300px" alt="Box-model" src="https://github.com/issufibadji/rocketseatIssufiBadji/blob/master/CSS/2-Estrela_CSS/bg2.png">
</div>
```CSS
css{
/* Values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podedmos usar 2 valores: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;
}
```
###  Background-position
Descrição
Com a propriedade background-position podemos mudar a posição da imagem do background.
```CSS
css{
/* Pricipais valores */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;
}
```
###  Background-size
Descrição
Para mudar o tamanho da imagem do background usamos a propriedade background-size.
```CSS
css{
/* Values */
background-size: cover;
background-size: contain;

/* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;
}
```
###  Background-origin-clip
Descrição
A propriedade background-origin é quem define o ponto de origem de uma imagem específica.
```CSS
css{
/* Principais valores */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.
/* Principais valores */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
}
```

###  Background-attachment
Descrição
A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.
```CSS
css{
/* Principais valores */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;
}
```
###  Shorthand
Descrição
Podemos usar o shorthand background para definir todos os valores do background

###  Gradient
Descrição

`linear-gradient()` é a função usada para criar gradient linear com o CSS.
```CSS
css{
background: linear-gradient(45deg, red, yellow)
}
```
`radial-gradient()` é a função usada para criar gradient circular.

```CSS
css{
background: radial-gradient(green, red, yellow)
background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))
}
```
###  Múltiplos valores
Descrição
Podemos aplicar múltiplos backgrounds em um mesmo elemento, podendo ter cor sólida, gradiente ou imagem. Para isso basta separar por vírgula cada background.

###  Experimentar
Descrição
A partir daqui você deve praticar e fazer vários experimentos com a propriedade background para que você possa entender cada vez mais os conceitos.

# **<font color=green>Posicionando foguetes</font>**
##
