# rockeseatIssufiBadji

# **<font color=red>HTML - Anotações</font>** 
Paginas da [Documentação de JS MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML) | [Documentação de JS devdocs.io](https://devdocs.io/html/) | [Documentação de JS nodeschool.io](https://nodeschool.io/pt-br/index.html#workshoppers)| [Tutoriale Html](https://tutorialehtml.com/pt/)
## **<font color=green>O Guia Estelar de HTML</font>**
<!-- ❌✅✔️-->
### **1.✅Conceito**
**✔️Abertura**
Nesse curso iremos aprender o que é HTML,seus conceitos essenciais, tags, atributos, aninhamentos,hierarquias de tags, elementos de diretórios.

**✔️Instalando plugin de preview HTML**
Nesta aula iremos aprender a instalar uma extensão no VSCode que irá nos permitir poder ver o HTML em tempo real enquanto digitamos.

Então você irá até a parte de extensões, que fica na esquerda, sendo o último ícone, digite "HTML Preview" e baixe a extensão.

1. Instalando plugin de preview HTML: Vsc⇒HTML preview 
2. ctrl+sft+p⇒ preview⇒Html: open preview

**✔️O que é HTML**
Agora estaremos aprendendo o que é o HTML.

HTML é um acrônimo para Hypertext (hipertexto) Markup (marcação) Language (linguagem), ela não é uma linguagem de programação em si, porém é uma linguagem na forma de escrever, tendo sintaxe e semântica, Hypertext é uma marcação especifica que nos leva a outro texto, isso mais no passado, agora sendo relacionado a imagens, a videos. Bastante simples usar o HTML, podemos ver ele clicando com o botão direito na pagina e selecionar a opção "view Page Source". Agora vamos ver mais sobre o HTML.

HTML⇒ é uma linguagem hipertexto: link, textos etc...
- HT=> Hypertexto, 
- M=>MarkP, 
- L=> Linguagem

**✔️Comentários**
Comentários servem para nos ajudar a não nos perder em nossos códigos, sendo bem simples abrir um comentário, dessa forma:

```html
 <!-- comentários -->

 <!--  HT=> Hypertexto, M=>MarkP, L=> Linguagem  -->
```
O que há em um comentário não afetará o código.
### **2.✔️Animação com Tags**
  - Abertura da Tag
  - Fechamento das Tag
  - Conteudo da Tag
  - Elemento da Tag
Estaremos vendo a parte que constitui o Markup do HTML, as Tags.
As Tags funcionam da seguinte forma:
Você faz a abertura delas, coloca o nome da Tag e as fecha como no exemplo. No caso dessa Tag, seu conteúdo é a de título, juntando a abertura, fechamento e o conteúdo, teremos um Elemento HTML.Por exemplo:

```html
<!-- Elementos-->
<h1> TÍTULO </h1>
<h2>SUBTÍTULO</h2>
```
Um elemento HTML é definido por uma tag inicial, algum conteúdo e uma tag final:
```html
  <tagname> O conteúdo vai aqui ... </tagname>
  O elemento HTML é tudo, desde a tag inicial até a tag final:

  <h1> Meu primeiro título </h1>
  <p> Meu primeiro parágrafo. </p>
```
Há também Elementos vazios que diferente do exemplo acima não se fecha daquela forma, mas assim:
```html
 <!-- Elementos vavzio(não tem fichamento)-->
    <img>
    <input>
```
Essa sendo para imagem possuindo atributos, que veremos mais tarde seu funcionamento.
```html
 <img src=" " alt=" ">
```
- Rosumindo as animação de Tags na HTML⇒ o tag comoça com siblo maior e menor”<>”, por ex:
Exemplo Explicado
A `<!DOCTYPE html>`declaração define que este documento é um documento HTML5
O `<html>`elemento é o elemento raiz de uma página HTML
O `<head>`elemento contém metainformações sobre a página HTML
O `<title>`elemento especifica um título para a página HTML (que é mostrado na barra de título do navegador ou na guia da página)
O `<body>`elemento define o corpo do documento e é um contêiner para todo o conteúdo visível, como títulos, parágrafos, imagens, hiperlinks, tabelas, listas, etc.
O `<h1>`elemento define um grande título
O `<p>`elemento define um parágrafo


**✔️Atributos HTML**
  - Formações extras
  - Configuraçoes
Os atributos HTML fornecem informações adicionais sobre os elementos HTML.
- Todos os elementos HTML podem ter atributos
- Os atributos fornecem informações adicionais sobre os elementos
- Os atributos são sempre especificados na tag inicial
- Os atributos geralmente vêm em pares nome / valor como: nome = "valor"
- Há também os atributos booleanos, que não precisam de conteúdo, booleano significando que apenas possuem dois tipos de valores, sendo eles verdadeiro ou falso, não havendo texto, apenas essas duas opções.
- O atributo src
A `<img>`tag é usada para inserir uma imagem em uma página HTML. O src atributo especifica o caminho para a imagem a ser exibida:

```html
<img src="w3school.png" alt="Imagem">
```
**✔️Atributos Booleanos**
  - Não precisam de conteúdo
Há também os atributos booleanos, que não precisam de conteúdo, booleano significando que apenas possuem dois tipos de valores, sendo eles verdadeiro ou falso, não havendo texto, apenas essas duas opções.

```html
<input type="button" disabled>
```
**✔️Aspas**
  - Omissão
  - Simples
  - Dupla
  obs: Usa aspas duplas
Outro fator que devemos levar em consideração são as aspas, recomendado apenas o uso das aspas duplas, para não desencadear problemas no código.
```html
    <a href="https://www.google.com.br/" title="Ins't ">Link</a>

    <p title="I'm a tooltip">This is a paragraph.</p>
```
**✔️Atributo Globais mais utilizados**
Atributos globais são atributos aplicáveis em todas as Tags, sendo as principais:
  - Classe
  - Contenteditable
  - data-*
  - hidden
  - Style
  - Tabindex
  - title
- `class` — além de classificar as Tags, é usada para aplicar estilo css e também para acessar com o Java Script.

```html
    <div class="carrinho">
        <!--usa-se quando tem mais de que um nome serve para usar na js e css-->
        Conteudo-class
    </div>
```

- `contenteditable` — usado para editar o conteúdo da página, porém não é mantido após salvar.

```html
  <div class="carrinho" contenteditable="true">
        <!--O conteudo pode ser editado-->
        Conteudo-contenteditable
   </div>
```
- `data-*` — usado para expandir os tipos de atributos que podemos usar para fazer mais tarde lógica no Java Script , utilizado em css também.

```html
  <div class="carrinho" data-id="">
        <!--serve para usar na js e css-->
        Conteudo-data-id
  </div>
```
- `hidden` — usado para esconder uma Tag.

```html
   <div class="carrinho" hidden>
        <!--Esconde o conteudo-->
        Conteudo-Hidden
   </div>
```
- `id` — usado apenas 1 por Tag para identificação, para também mais tarde usar no Java Script e css.

```html
    <div class="carrinho" id="car1">
        <!--id serve só para um nome-->
        Conteudo-id
    </div>
```
- `style` — aplica a estilização na Tag, normalmente não se usa "style" dentro da Tag, mas sim em arquivos externos.

```html
  <p style="color:red;">This is a paragraph.</p>
```
- `tabindex` — usado para ordenar o Tab na página.

```html
    <div tabindex="1">tabindex1 </div>
    <div tabindex="2">tabindex2 </div>
    <div tabindex="3">tabindex3 </div>
```
- `title` — serve para definir um título para a Tag, quando colocamos o mouse descansando em cima do conteúdo da página.

```html
  <div title="Meu Website">Titulo</div>
```
Se você quiser estudar outros Atributos Globais vá ao site **[https://developer.mozilla.org/pt-BR/](https://developer.mozilla.org/pt-BR/)** .
### **3.✅Links**
**✔️Abertura**
### **4.✅Tabelas**
### **5.✅Cabeçalho**
**✔️Abertura**
## **<font color=green>HTML que faz sentido, para todos</font>**
<!-- ❌✅✔️-->
Elementos semânticos

- `blockquote` : bloco de citação
- `cite` : autor da citação
- `header` : cabeçalho (pode mais de um por página)
- `nav` : barra de navegação (geralmente dentro do header)
- `main` : conteudo principal (um por página, dentro do body)
- `article` : artigo (dentro do main)
- `aside` : conteúdos levemente relacionados (glossário, biografia, etc)
- `footer` : rodapé (autor, contato, copyright, sitemap, etc)
- `section` : seção, componente de outra tag, tem título e conteúdo

Elementos Genéricos Não-Semânticos

- `div` : elemento de bloco, usar classes para mais significado
- `span` : elemento de texto, usar classes para mais significado


## **<font color=green>Posso ver e ouvir o HTML</font>**

- `video`

Aceita os atibutos: src, controls, width, height, autoplay, preload="metadata ou none", loop, muted, poster="./thumbnail.png".

```html
<video src="./video.mp4" controls>
  <p>alt text</p>
</video>
```

Fallback content:

```html
<video controls>
  <source src="./video.mp4" type="video/mp4" />
  <source src="./video.avi" type="video/avi" />
  <p>alt text</p>
</video>
```

```html
<!--
    <video>
      -src
      -controls
      -se não funcioar?
        -fallback content
      -source
        -src
        -type
      -sobre serviços de terceiros
 -->
<video controls width="800" poster="./assets/ball.png">   
  <source src="./assets/rocket.mp4" type="video/mp4">
  <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4'>
  <source src="http://media.w3.org/2010/05/sintel/trailer.webm" type='video/webm' />
  <p>Este Browser não suport video</p>
</video>
```

- `audio`

Semelhante a tag `video`.

```html
  <!--
  <audio>
    -src
    -controls
    -se não funcioar?
      -fallback content
    -source
      -src
      -type
    -sobre serviços de terceiros
-->
<audio controls autoplay> 
    <source src="./assets/viper.mp3" type="audio/mp3">
    <source src="./assets/viper.ogg" type="audio/ogg">
    <p>Este Browser não suport video</p>
</audio>
```


- `iframe` : inline frame element

Adiciona conteúdo externo.

Aceita os atributos: src, width, height, title (para acessibilidade), allow="", allowfullscreen, frameborder="0", style

```html
<!--
      <iframe>
        -atributos
        -src
        -height
        -width
        -titlr(acessabidade)
        -allowfullscreen
        -frameborder
    -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/ft1rmupJFcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14701.996612563547!2d-43.12399595206512!3d-22.894952920567658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x998163372c483f%3A0xf1f22d78a2736925!2sMuseu%20de%20Arte%20Contempor%C3%A2nea%20de%20Niter%C3%B3i!5e0!3m2!1spt-BR!2sbr!4v1665760866336!5m2!1spt-BR!2sbr"
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
</iframe>

  <hr>


<iframe width="100% " height="300 " scrolling="no " frameborder="no " allow="autoplay " src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1362993376&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true "></iframe>
    <div style="font-size: 10px; 
    color: #cccccc;
    line-break: anywhere;
    word-break: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
    font-family: Interstate,
    Lucida Grande,
    Lucida Sans Unicode,
    Lucida Sans,
    Garuda,
    Verdana,
    Tahoma,
    sans-serif;
    font-weight:100; ">
        <a href="https://soundcloud.com/issufi-badji " title="Issufi Badji " target="_blank " style="color: #cccccc; 
        text-decoration: none;
         ">Issufi Badji</a> ·
        <a href="https://soundcloud.com/issufi-badji/horned-viper " title="Horned Viper" target="_blank " style="color: #cccccc; 
        text-decoration: none; ">Horned Viper
        </a>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14701.996612563547!2d-43.12399595206512!3d-22.894952920567658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x998163372c483f%3A0xf1f22d78a2736925!2sMuseu%20de%20Arte%20Contempor%C3%A2nea%20de%20Niter%C3%B3i!5e0!3m2!1spt-BR!2sbr!4v1665760866336!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```


- `img`

Aceita os atributos: src, width, height, alt, title...

```html

<img
  src="https://source.unsplash.com/random"
  alt="alt text"
  title="titulo da imagem"
/>
```

```html
<!--
Background image

-com a tag style
-somente para estilo
-não é semantico e falta significado
-->
<p style="background-image: url('./icon.png')">Imagem</p>

```
- `figure`

Adiciona imagens de maneira semântica, aceitando captions, por exemplo:

```html
<a href="https://google.com">
  <figure>
      <img src="https://source.unsplash.com/random" alt="imagem" title="Coloca titulo img" height="200px">
      <figcaption>Coloca um titulo na imagem</figcaption>
  </figure>
</a>
```

- `svg`

Scalable Vector Graphics, imagens vetorizadas. Aceita atributos como width e height e tags filhas para descrever elementos, como `circle`, `rect`...

`<svg>` é uma marcação, estilo html, mas não é para textos, e sim para fazer imagens.possuimos elementos para gerar formas.

para entender melhor
-Imagem rasterizada x Imagem vetorizada

Beneficios
-Mais leve
-Mais detalhada
-Maior acessibilidade e SEO
-Pode ser editada via CSS ou atributos

Desvantagens
-Pode ser mais complicado de trabalhar 
-Quanto mais complexa a imagem, mais trabalho para o navegador
-Navegadores mais antigo não possuem suporte a esse tag

Para fotografias, ainda prefira imagens rasterizadas.(.png, .jpg, .jpeg) 

Se for um arquivo, pode ser adicionado com a tag `img`

```html

<svg width="200" height="200"> <circle cx="100" cy="100" r="80" stroke="blue" stroke-width="6" fill="yellow" /></svg>

<svg width="200" height="200"> <rect cx="100" cy="100" r="80" stroke="red" 
  width="100%" height="100%"
  stroke-width="6" fill="green" /></svg>
<hr>
<img src="./assets/retangulo.svg" alt=""> <br>
<a href=" https://developer.mozilla.org/en-US/docs/Web/SVG">SVG</a>

```


[tutorialehtml-video-audio](https://tutorialehtml.com/pt/html-tutorial-embed-video/)
#

## Formulários de outro planeta

\- `form`

Atributos básicos:\
-> _Action_: para onde o formulário vai ser submetido, se vazio envia para a página onde estou\
-> _Method_: método http para envio (GET, POST...)

```html
<input action="login" method="post"></form>
```

Para deixar o formulário mais semântico, utilizar as tags `fieldset` e `legend`:

Atributos:\
-> _disabled_ desativa a entrada de dados.\
-> _form=""_ referencia o ID de um form, caso a tag `fieldset` fora da tag `form`.\
-> _name=""_ define o nome do grupo.

Elemento `label`: serve para associar ou identificar uma ou mais tags de entrada de dados, utilizar o atributo _for=""_ para referenciar um ID de uma tag `input`.

Elemento `button`: representa um botão e é utilizado para envia os dados de um formulário.

Atributos:.\
-> _type=""_: pode ser submit, reset ou button\
-> _autofocus_: foco automático\
-> _disabled_: desativa o botão\
-> _name=""_: key para o conteúdo passado por _value_\
-> _value=""_: valor que será passado\
-> _form=""_: link com o ID de um form

```html
<form action="">
  <fieldset name="inputs-contact">
    <legend>Contato</legend>
    <label for="">Nome</label>
    <input type="text" />
    <button type="submit">Enviar</button>
  </fieldset>
</form>
```

Elemento `datalist`: dropdown com uma lista de valores como sugestão a uma tag `input`, porém os valores são apenas sugestões, não são obrigatórios. O usuário pode digitar no campo. Cada opção da lista é dada por uma tag `option`.

```html
<input type="text" list="fruitsdata" placeholder="Escolha uma fruta" />

<datalist id="fruitsdata">
  <option>apple</option>
  <option>banana</option>
  <option>mango</option>
  <option>orange</option>
</datalist>
```

**Tag `input`:**

Atributos:

-> _type=""_: text, date, number, file, email password...\
-> _name=""_\
-> _id=""_\
-> _autocomplete=""_: busca valores de um certo tipo para sugerir autocomplete\
-> _autofocus_: foco automático do cursor\
-> _value=""_: valor pré preenchido automaticamente no campo\
-> _disabled_: bloqueia o campo para edição\
-> _readonly_: bloqueia o campo para edição\
-> _form=""_: referencia o ID de uma tag `form`\
-> _name=""_: key para os valores enviados ao backend\
-> _required_: campo de preenchimento obrigatório\
-> _placeholder=""_: texto sugestivo dentro do campo

<br>

**Tipo _password_ - `<input type="password">`:**

```html
`<input
  type="password"
  pattern="[0-9a-fA-F]{4, 8}"
  title="Coloque um HEX de no min 4 e max 8 caracteres"
/>`
```

Atributos:\
-> _minlength=""_ / _maxlength=""_: limite o número de caracteres.\
-> _pattern=""_: expressão regular para validar o que está sendo digitado no campo, ex: `pattern="[0-9a-fA-F]{4,8}"` valida se a entrada contém somente letras e números, no mínimo 4 e no máximo 8 caracteres.\
-> _title_: é exibido junto com o balão de erro quando o formulário não pode ser enviado.\
-> _placeholder_ \
-> _readonly_ \
-> _disabled_ \
-> _required_ \
-> _inputmode=""_: configura o tipo de teclado que deve aparecer: numeric, por exemplo\
-> _autocomplete=""_: ligado/desligado: "on/off", tem outras opções

<br>

**Tipo _email_ - `<input type="email">`:**

Espera que o usuário entre um email e faz uma validação básica.

Atributos: \
-> _placeholder=""_ \
-> _value=""_: valor previamente preenchido no campo\
-> _readonly_ \
-> _disabled_ \
-> _required_ \
-> _multiple_: aceita várias entradas separadas por vírgula\
-> _minlength / maxlength_ \
-> _size=""_: tamanho do campo em número de caracteres \
-> _pattern_: regex, por ex, apenas emails do domínio rocketseat: `pattern=".+@rocketseat\.com\.br"` \
-> _title_: o title é mostrado quando um valor inválido tenta ser enviado \
-> _list_: faz link com um ID de uma `datalist` para sugestões

<br>

**Tipo *URL* - `<input type="url">`:**

Espera que o usuário digite uma URL e faz validação.

Atributos: \
-> _placeholder=""_: ex. http://example.com \
-> _value=""_: valor previamente preenchido no campo\
-> _readonly_ \
-> _disabled_ \
-> _required_ \
-> _minlength / maxlength_ \
-> _size=""_: tamanho do campo em número de caracteres \
-> _pattern_: regex \
-> _list_: faz link com um ID de uma `datalist` para sugestões \
-> _spellcheck="true"_: habilita correção ortográfica neste campo

<br>

**Tipo *file* - `<input type="file">`:**

Permite o usuário escolher um ou mais arquivos para enviar no formulário.

Atributos: \
-> _value=""_: contém o arquivo a ser enviado \
-> _accept=""_: descreve os tipos de arquivos aceitos, ex: .doc, .png, image/* \
-> _files_: lista de arquivo(s) a serem enviados \
-> _multiple_: permite o envio de múltiplos arquivos 

Para enviar arquivos, a tag `form` deve possuir um atributo _action=""_, com o destino, _method="post"_, e _enctype="multipart/form-data"_:

```html
<form action="" method="post" enctype="multipart/form-data">
  <input type="file">
  <button>Send</button>
</form>
```

<br>

**Tipo *color* - `<input type="color">`:**

Interface para selecionar uma cor

Atributos: \
-> _value=""_: RGB, se for inválido, será exibido preto \
-> _list_: faz link com um ID de uma `datalist` para sugestões 

<br>

**Tipo *checkbox* - `<input type="checkbox">`:**

Caixas de seleção que podem ser marcadas/desmarcadas. Seleciona um valor a ser enviado. Se estiver desmarcado, nao envia nada. Se estiver marcado, envia o nome=on.

Atributos: \
-> _name_ \
-> _value=""_: valor que é passado, por padrão é "on" \
-> _checked_: estado inicial marcado 

Para várias caixas, utiliza o mesmo _name_ e trocar os _value_. 

<br>

**Tipo *hidden* - `<input type="hidden">`:**

É invisível para o usuário, porém é enviado junto com o formulário. Por exemplo, para enviar um timestamp.

<br>

**Tipo *radio* - `<input type="radio">`:**

Permite a seleção de uma única opção em uma lista (com bolinhas).

Atributos: \
-> _checked_: indica o campo marcado inicialmente \
-> _value_: valor que o campo contém 

<br>

**Tipo *search* - `<input type="search">`:**

Usado para campos de busca. Igual ao tipo "text", porem podendos ser diferente dependendo do user agent (navegador).

Atributos: \
-> _list_: faz link com uma `datalist`  \
-> _pattern_: regex \
-> _aria-label_: opção de acessibilidade quando não se pode usar `label` 

<br>

**Tipo *number* - `<input type="number">`:**

Espera uma entrada numérica.

Atributos: \
-> _min="" / max=""_ \
-> _step_

<br>

**Tipo *range* - `<input type="range">`:**

Exibe um controle para selecionar um valor numérico. Pode ser um slider ou dial control.

Atributos: \
-> _min="" / max=""_ \
-> _step_

<br>

**Tipo *date* - `<input type="date">`:**

Exibe um calendário para selecionar uma data.

<br>

**Tipo *datetime-local* - `<input type="datetime-local">`:**

Utilizado para selecionar data e hora.

<br>

**Tipo *month* - `<input type="month">`:**

Utilizado para selecionar um mês.

<br>

**Tipo *week* - `<input type="week">`:**

Utilizado para selecionar uma semana.

<br>

**Tipo *time* - `<input type="time">`:**

Utilizado para selecionar uma hora.

#

**Tag `textarea`:**

Recebe entradas de texto com múltiplas linhas.

Atributos: \
-> _id=""_ \
-> _name=""_ \
-> _rows=""_ \
-> _cols=""_ \
-> _maxlength="" / minlength=""_ \
-> _wrap="off"_: desativa a quebra de linha, pode ser *soft* ou *hard*, pesquisar \
-> outros como para input: *autocomplete*, *autofocus*, *disabled*, *placeholder*, *readonly*, *form*, *required*. 

```html
<textarea name="message" id="message" cols="30" rows="10"></textarea>
```

#

**Tags `select` e `option`:**

Cria um dropdown com opções descritas com a tag `option` usando o atributo _value_.

Atributos: \
-> *multiple*: permite multiplas escolhas \
-> *size*: define quantas opções aparecem na lista

```html
<label for="listaOpcoes">Qual a opção?</label>
<select name="opcao" id="listaOpcoes">
  <option value="" selected disabled>Selecione uma opção</option>
  <option value="op1">Opção 1</option>
  <option value="op2">Opção 2</option>
  <option value="op3">Opção 3</option>
  <option value="op4">Opção 4</option>
</select>    
```

Elemento `optgroup`: cria grupos de opções que podem ser escolhidas, é filho de `select` e pai dos `option`.

```html
<label for="listaOpcoes">Qual a opção?</label>
<select name="opcao" id="listaOpcoes"  multiple size="5">
  <option value="" selected disabled>Selecione uma opção</option>
  <optgroup label="Grupo 1">
    <option value="op1">Opção 1</option>
    <option value="op2">Opção 2</option>
    <option value="op3">Opção 3</option>
  </optgroup>
    <optgroup label="Grupo 2">
    <option value="op1">Opção 1</option>
    <option value="op2">Opção 2</option>
    <option value="op3">Opção 3</option>
  </optgroup>
</select>    
```
