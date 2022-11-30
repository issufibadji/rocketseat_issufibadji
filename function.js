/**
 function showMessage() {
  console.log("Hello world");
}

showMessage();

 * 
 */
//=======Variáveis ​​locais======
//Uma variável declarada dentro de uma função só é visível dentro dessa função.


/*
function showMessage() {
  let mensagem = "Hello world";//variavel local
  console.log(mensagem );
}

showMessage();
*/

//====variáveis ​​externas======
//Uma função também pode acessar uma variável externa, por exemplo:


/*
let mensagem='Hello word!'
function showMessage(){
  console.log(mensagem)
}
showMessage()
console.log("fim da função")
showMessage()
*/
/*
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, John
*/

/*
//A função tem acesso total à variável externa. Ele também pode modificá-lo.
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

  //console.log( userName ); // John before the function call

showMessage();

  //console.log( userName ); // Bob, the value was modified by the function
*/
/*
//=======Parâmetros========
//Podemos passar dados arbitrários para funções usando parâmetros.
function fazersuco(fruta1, fruta2){
  console.log(fruta1+' + '+fruta2);

}
fazersuco("ananas", "Manga");

const sum = function(num1, num2){
  console.log(num1 + num2)
}

sum(3, 3)

const sub = function(num1, num2){
  console.log(num1 - num2)
}
let num1=5;
let num2=3;

sub(num1,num2)

*/
/*
let total = 0
const soma = function(n1, n2){
  let total = n1 + n2
   return total
}
let n1 = 5;
let n2 = 3;

console.log(`o número 1 é ${n1}`)//o número 1 é 5
console.log(`o número 2 é ${n2}`)//o número 2 é 3
console.log(`A soma é ${soma(n1, n2)}`)//A soma é 8
console.log(total)//0

function fazerSuco(frutaA, frutaB){
  //return frutaA + frutaB
  return 'suco de: ' + frutaA +  frutaB
}
const copo = fazerSuco('banana', 'goiaba')
console.log(copo)//suco de: bananagoiaba
*/

/*
//função scope
let fazerVideo = 'criar video'
function createVideo(fazerVideo){
  fazerVideo = 'fazer audio'
  return fazerVideo
}
console.log(createVideo(fazerVideo))//
console.log(fazerVideo)//criar video
*/
/*
let fazerVideo = 'criar video'
function createVideo(){
  fazerVideo = 'fazer audio'
  return fazerVideo
}
console.log(fazerVideo)//criar video
console.log(createVideo(fazerVideo))//fazer audio
console.log(fazerVideo)//fazer audio
*/
/*
//function hoisting
myName()

function myName(){
  console.log('Issufi')
}
*/

//arrow function
/*
const myName = () =>{
  console.log('issufi')

}
myName()
*/
//calback function
function myName(name) {
    console.log(name)

}
//myName('issufi')//issufi'
//myName(2)//2
myName(
    () => {
        console.log('Estou numa callback')
    }
)

//Funções construtoras
/*
Descrição
Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

function Person(name) {
	this.name = name
	this.walk() = function() {
		return (this.name + "está andando")
	}
}
const mayk = new Person("Mayk")
const joao = new Person("João")
*/
let date = new Date("2022-11-28")
console.log(date)