// O operador spread(...) tem como função principal espalhar um objeto iteravel como um array ou um objeto.
// exemplo:

// const arr = ["maça", "goiaba", "banana"]
// console.log(...arr)

// Neste exemplo os itens do array arr foram sepados no console log sendo exibidos um separado do outro

// Outra utilidade para o operador spread é utiliza-lo para fazer uma copia de um Array, prevenindo o erro de referencia do javascript, que 
// facilmente podemos pensar que estamos copiando um array assim:


// const arr = ["maça", "goiaba", "banana"]
// const arrCopy = arr
// Dessa forma sempre que mexermos no arrCopy por conta da referencia iremos mexer no array arr, o que pode causar problemas indesejados 
// Entao podemos usar o operador spread para copiar facilmente esse array arr, pois o spread ira espalhar todos os itens que estao la dentro e 
// podemos salvar em um novo array, criando um copia perfeita que nao tera esse problema de referencia, podendo ser alterada de boas

// Exemplo:

// const arr = ["maça", "goiaba", "banana"]
// const arrClone = [...arr]
// arrClone.push("melancia")

// console.log({arr, arrClone});

// aqui podemos ver que o array arr foi clonado e inclusive o clone foi adicionado um novo item, o arr nao foi alterado então o problema de referencia 
// nao aconteceu o que é otimo, evita falhas e é uma maneira bem facil de fazer uma copia. 

// tambem pode ser utilizado em strings ou objetos