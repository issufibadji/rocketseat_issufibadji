//===============variaveis===============
/*
let user = "John",
    age = 25,
    message = "Hello"

alert(`${message},${user},${age}anos`)

*/

//======Alterar valor de variavel===============
/*
let message

message = "Hello!"

message = "World!" // value changed

alert(message)
//Quando o valor é alterado, os dados antigos são removidos da variável:
*/

//=======Também podemos declarar duas variáveis ​​e copiar dados de uma para a outra.

let hello = "Hello world!"

let message
    // copy 'Hello world' from hello into message
message = hello
    // now two variables hold the same data
alert(hello) // Hello world!
alert(message) // Hello world!

/*
//===============Declarar duas vezes aciona um erro=================
Uma variável deve ser declarada apenas uma vez.
Uma declaração repetida da mesma variável é um erro:*/
/*
let message = "This"
    // repeated 'let' leads to an error
let message = "That" // SyntaxError: 'message' has already been declared
    //Portanto, devemos declarar uma variável uma vez e depois nos referir a ela sem let.
    */