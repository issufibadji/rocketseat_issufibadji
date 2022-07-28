#Apresentação de CSS
Vamos ver os fundamentos do CSS, como funciona, o que é o CSS afinal de contas, conceitos básicos como cascatas, especificidade, box model e muito mais.

Para consumir esse curso, é interessante que você já tenha um conhecimento de HTML.

Vamos embarcar nessa jornada?

# Introdução
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
# comentários
  * não irão afetar seu código
  * ajudar a lembrar de blocos de códigos
  * deixa dicas para a leitura
  * Apenas não esqueça de fechar um comentário aberto.
  * Os comentários abrem com /* e terminam com */ .

   ## Por exmplo:
   ```CSS
    /* comentarios em css */
  ```
