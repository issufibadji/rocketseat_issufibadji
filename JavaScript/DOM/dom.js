//Selecionando elementos
/*
//getElementById
//console.log(document.getElementById("title"))

const element = document.getElementById("title")
console.log(element)
*/
/*
    //getElementsByClassName
const className = document.getElementsByClassName("subtitle")
console.log(className)
*/
/*
    //getElementsByTagName
const body = document.getElementsByTagName("body")
console.log(body)
*/
/*
//querySelector
const element = document.querySelector(".css") //css,tag html,src ect.
console.log(element)*/
//querySelectorAll
// const elements = document.querySelectorAll(".subtitle") //tds que tem atributo src.

// elements.forEach((el) => console.log(el)) //é usado só querySelectorAll

// //Qual usar?
// //  `getElementById`(retorna element)
// // - `getElementsByClassName`(retorna HTMLCollection )
// // - `getElementsByTagName`(retorna HTMLCollection )
// // - `querySelector`(retorna element )
// // - `querySelectorAll`(retorna Nodelist)//forEach

// //========Manipulando conteúdos==
// /**
//  * textContent
//  * Recebe texto simples, retorna todo o texto que a tag contém, mesmo que algo esteja sendo escondido da visualização por meio de CSS, porém sem as tags.
//  */

// // const titleElement = document.getElementsByClassName("text")
// // titleElement.textContent = "New title" // Modifica o conteúdo de texto
// // console.log(titleElement.textContent) // Também retorna o texto
// // titleElement.textContent += " - Updates Concatenados" // Usar += para concatenar

// /**
//  * innerText
//  * Recebe texto simples, retorna somente o texto visível que a tag contém.
//  */
// // const titleElement = document.querySelector("h1")
// // titleElement.innerText = "Olá Devs" //Modifica elemento interno de texto

// /**
//  * innerHTML
//  * Recebe html e interpreta, retorna o conteúdo total, incluindo as tags.
//  */
// // const titleElement = document.querySelector("h1")
// // titleElement.innerHTML = "Olá Devs <h2> Subtitle </h2>" //Adciona HTML no meu conteudo /**
// /* value
//  * Altera o atributo "value"
//  */
// // Value
// // const inputElement = document.querySelector("input")
// // console.log(inputElement)
// // inputElement.value = "valor2"
// // Manipulando atributos

// /**
//  * Outros atributos:
//  * setAttribute(<"attr">, <"value">)
//  * getAttribute(<"attr">)
//  * removeAttribute(<"attr">)
//  */
// // const header = document.querySelector("header")
// // header.setAttribute("id", "header")

// // const headerID = document.querySelector("#header") //add atributo id no header
// // console.log(headerID)
// // console.log(headerID.getAttribute("id")) //pegar atributo id

// // header.removeAttribute("id") //remover
// // header.setAttribute("class", "bg header") //add class

// // -----------------------------------------------------------------

// // style
// // const titleElement = document.querySelector("body")
// //     // titleElement.style.backgroundColor = "blue"
// //     // titleElement.style.color = "white"

// // // classList
// // console.log(titleElement.classList) // Retorna um DOMTokenList de tamanho 1, com '0: "title"'
// // titleElement.classList.add("green")
// // console.log(titleElement.classList) // Retorna um DOMTokenList de tamanho 2, com '0: "title"' e '1: "green"'
// // titleElement.classList.remove("green")
// // console.log(titleElement.classList) // Retorna um DOMTokenList de tamanho 1, com '0: "title"'
// // titleElement.classList.toggle("red") // Se existe, remove. Se não existe, adiciona.
// // console.log(titleElement.classList) // Retorna um DOMTokenList de tamanho 2, com '0: "title"' e '1: "red"'

// // -----------------------------------------------------------------

// const divElement = document.querySelector("#div")
// console.log(divElement)

// /* PAI: parentNode ou parentElement */
// console.log(divElement.parentNode) // Retorna o pai (Node): body
// console.log(divElement.parentElement) // Retorna o pai (Element): body

// /* FILHOS: childNodes, firstChild e lastChild ou children, firstElementChild e lastElementChild */
// console.log(divElement.childNodes) // Retorna uma NodeList com os filhos: tamanho 7 com texts (4) e tags span (3):
//     // NodeList(7) [text, span, text, span, text, span, text] (antes de colocar os ids nos spans)
//     // Se houver espaços/quebras de linha/textos, serão considerados "text" na lista de filhos

// console.log(divElement.children) // Retorna uma HTMLCollection com os filhos
//     // Ignora os espaços/quebras de linha/textos puros: tamanho 3 com apenas tags span (3):
//     // HTMLCollection(3) [span, span, span] (antes de colocar os ids nos spans)

// // Primeiro filho:
// console.log(divElement.firstChild) // Retorna o primeiro filho (Node): texto " Texto puro 1 " com as quebras de linha
// console.log(divElement.firstElementChild) // Retorna o primeiro filho (Element): tag span <span>Filho 1</span>

// // Último filho:
// console.log(divElement.lastChild) // Retorna o primeiro filho (Node): texto " Texto puro 4 " com as quebras de linha
// console.log(divElement.lastElementChild) // Retorna o primeiro filho (Element): tag span <span>Filho 3</span>

// /* IRMÃOS: nextSibling e previousSibling ou nextElementSibling e previousElementSibling */
// const child2 = document.querySelector("#child2")
// console.log(child2)

// // Irmão anterior
// console.log(child2.nextSibling) // (Node): texto " Texto puro 3 " com as quebras de linha
// console.log(child2.nextElementSibling) // (Element): tag span <span>Filho 3</span>

// // Irmão posterior
// console.log(child2.previousSibling) // (Node): texto " Texto puro 2 " com as quebras de linha
// console.log(child2.previousElementSibling) // (Element): tag span <span>Filho 1</span>

// -----------------------------------------------------------------

// Criar um novo elemento
// const newDiv1 = document.createElement("div")
// newDiv1.style.backgroundColor = "gray"
// newDiv1.innerHTML =
//     '<br><span style="background-color: yellow">Texto na nova div1</span>'

// const newDiv2 = document.createElement("div")
// newDiv2.style.backgroundColor = "yellow"
// newDiv2.innerHTML =
//     '<br><span style="background-color: gray">Texto na nova div2</span>'

// const newDiv3 = document.createElement("div")
// newDiv3.style.backgroundColor = "red"
// newDiv3.innerHTML =
//     '<br><span style="background-color: white">Texto na nova div3</span>'

// const newDiv4 = document.createElement("div")
// newDiv4.style.backgroundColor = "green"
// newDiv4.innerHTML =
//     '<br><span style="background-color: white">Texto na nova div4</span>'

// const body = document.querySelector("body")

// // Adicionar como primeiro filho
// body.prepend(newDiv1) // Adiciona "newDiv1" como o primeiro filho de "body"

// // Adicionar como último elemento
// body.append(newDiv2) // Adiciona "newDiv1" como o último filho de "body"

// // Adicionar antes de uma tag específica
// const script = body.querySelector("script") // Pega a tag script de dentro do body, será a referência
// console.log(script)
// body.insertBefore(newDiv3, script)

// // Não existe "insertAfter", mas para inserir após uma tag especifica, pode-se fazer:
// body.insertBefore(newDiv4, inputElement.nextSibling) // Insere após o elemento de input

// console.clear()

// -----------------------------------------------------------------

// Eventos

function print() {
    console.log("Print!!")
}

const input = document.querySelector("input")

input.onkeydown = print // Aqui deve ser passado apenas o nome da função, como uma variável

// É possível definir a função diretamente:
input.onfocus = function() {
    console.log("Recebendo input...")
}

// Adicionar evento com addEventListener passando o evento e a função:
input.addEventListener("blur", function() {
    console.log("Parei de receber input.")
})

// Obs: os nomes de eventos quando passados para o EventListener não têm o 'on' no início.
// Obs2: É mais recomendável passar eventos utilizando addEventListener pois isso evita que algum evento seja sobrescrito, com addEventListener é possível que com um único evento de click, por exemplo, várias funções sejam executadas.

// As funções passadas para eventos podem receber, entre outros, o parâmetro 'event', que contém diversas informações sobre o evento, como a posição do mouse em um click, uma tecla pressionada, etc:

const h2Element = document.querySelector("h2")

h2Element.addEventListener("dblclick", (event) => {
    console.log(event)
})

// TESTE

const popUp = document.createElement("div")

popUp.textContent = "Olar"

popUp.setAttribute(
    "style",
    "display: none; position: fixed; float: left; background-color: pink; color: red; padding: 20px; border-radius: 10%"
)
body.prepend(popUp)

document.addEventListener("click", (e) => {
    if (popUp.style.display === "none") {
        popUp.style.display = "block"
        popUp.style.left = `${e.clientX + 20}px`
        popUp.style.top = `${e.clientY + 10}px`
    } else {
        popUp.style.display = "none"
    }
})

// TESTE (fim)