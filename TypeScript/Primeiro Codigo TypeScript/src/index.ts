// function sendSpaceship(name:string, captain:string) {
//     const spaceship = {
//         name,
//         captain,
//         speed: 20,
//         inMission: true,
//         crew: []
//     }

//     alert(`A nave ${spaceship.name} decolou sob os cuidados do capitão ${spaceship.captain}`)

//     return spaceship
// }

// sendSpaceship("Death Star", "Darth Vaider")

// *** TUPLAS ***

// tupas no typescript sao uma forma de engessar um elemento criado, 
// aquele elemento so podera ser retornado ou criado ou atibuido conforme 
// o padrao que utilizamos na criação ou declaração do mesmo.

// EXEMPLO:

// const tuplaDeDoisNumeros = [1,1]

// tuplaDeDoisNumeros[0] = 10
// tuplaDeDoisNumeros[1] = "10"

// Aqui neste exemplo tuplaDeDoisNumeros[1] esta dando um erro pois na criação
// da tupla foi predeterminado que o array iria receber dois numeos la 
// então qualquer outro tipo vai ocasionar um erro, tambem nao é possivel 
// adicionar mais de 2 argumentos pois tambem ocasionará em um erro 
// .


// *** Enums ***

// os enums são uma forma de declarar um conjunto de valores 
// que podem ser usados em um programa. 

// EXEMPLO:

enum Cores {
    Vermelho = "Vermelho",
    Azul = "Azul",
    Amarelo = "Amarelo"
}

console.log(Cores.Azul) 

