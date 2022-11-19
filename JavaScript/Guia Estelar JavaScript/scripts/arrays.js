//Arrays

const animals = [
    "Lion",
    "Monkey",
    {
        name: "Cat",
        age: 30,
    },
]

//Como acessar valor de um array
console.log(animals) //Lion, Monkey,Cat
console.log(animals[2]) //cat
console.log(animals.length) //3
console.log(animals[2].name) //Cat
console.log(`${animals[2].name} tem ${animals[2].age} anos`) //Cat tem 30 anos