//===prototype====
//"Issufi".length//6

//"Issufi".__proto__

//===Type conversion coersion======

//console.log(Number("9") + 5) //14

//=====Strings em números
/*
//transformação de string para number
let string = "123"
console.log(Number(string))//123

//transformação de number para

let number = 321
console.log(String(number))//321
*/
/*
//===Contando caracteres e digitos

let word = "issufibadji"
console.log(word.length) //11

let number = 123456
console.log(String(number).length) //6
*/
/*
//===Casas decimais
let number = 345.465827
console.log(number.toFixed(2)) //234.47

let number = 345.465827
console.log(number.toFixed(2).replace(".", ",")) //234,47
*/
/*
//=========Maiúsculas e minúsculas

let word = "Issufi Badji"
console.log(word.toLowerCase())

let word = "Issufi Badji"
console.log(word.toUpperCase())
*/
/*
//==Separando strings
let phrase = "Te Amo muito"
let myArray = phrase.split(" ") //split("o")
    //console.log(myArray) //(3) ['Te', 'amo', 'muito']

let phraseWithUnderscore = myArray.join("_") //.join("")
console.log(phraseWithUnderscore.toLowerCase())
*/
/*
//======Encontrando palavras em frases

let phrase = "Te Amo muito"

console.log(phrase.includes("Amo")) //true
*/
/*
let myArray = new Array("a", "b", "c")
console.log(myArray) //["a", "b", "c"]
*/

//== Elemento array====

//console.log(["a", "b", "c"].length)//3
/*
//=====Strings para arrays

let word = "manipulação"
console.log(Array.from(word)) //
*/

//=====Manipulando arrays

let tech = ["html", "css", "js"]
    // Adicionar um item no fim
tech.push("node.js") //["html", "css", "j","node.js"]
    //Adcionar um item no começo
tech.unshift("jQuery") //[,"jQuery","html", "css", "j","node.js"]
    //Reomover no inicio
tech.shift() //["html", "css", "j","node.js"]
    //Reomover no fim
tech.pop() //["html", "css", "j"]
    //pegar somente alguns elementos do array
console.log(tech.slice(1, 2)) //['css]
    //remover 1 ou mais items em qualquer posição do Array
tech.splice(1, 2) //['html']
    //encontrar a posição de um elemento no
let index = tech.indexOf("html")
console.log(index)
    //
console.log(tech)