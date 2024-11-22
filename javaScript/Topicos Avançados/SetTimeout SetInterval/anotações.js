// // o set timeout é usado para definir um tempo para que seja execultado um determinado bloco de codigo.bloco
// // nele é utilizado milisegundos para determinar o tempo de espera.
// // tambem é gerado um id para aquele timeout, o que pode ser armazenado em uma variavel, o que pode ser 
// // bastante util para cancelar o timeout com a função clearTimeout


// // // EXEMPLO:
// console.log("o tempo começou em 0");

// setTimeout(() => {
//     console.log("aggora se passou 3 segundos do inicio, por causa do setTimeOut");    
// }, 1000 * 3);

// o setInterval é muito parecido com o setTimeOut porem ele funciona no formato de looping, ele sera 
// executado por vezes indeterminadas a cada periodo de tempo que a gente definir por isso é muito importante
// que possamos fazer com que o looping seja interrompido e pra isso podemos usar o clearInterval passando o 
// id do set interval, isso até mesmo pode ser implementado dentro do bloco do proprio setInterval. 


// // EXEMPLO:

// let intervalo = 0

// const loopingInterval = setInterval(() => {
//     console.log(`se passou ${intervalo}`);
//     intervalo += 2

//     if (intervalo > 10) {
//         clearInterval(loopingInterval)        
//     }
    
// }, 1000 * 2);

