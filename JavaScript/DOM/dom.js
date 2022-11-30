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
const elements = document.querySelectorAll(".subtitle") //tds que tem atributo src.

elements.forEach((el) => console.log(el)) //é usado só querySelectorAll

//Qual usar?