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