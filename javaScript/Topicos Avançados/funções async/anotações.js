// funções async é uma forma mais facil e moderna de se trabalhar com promisses 
// antes da função devemos utilizar o termo async, logo o javascript entenderá que se trata de uma 
// função async e que ela retorna uma promisse, com o return dessa função podemos resolvela ou rejeitavela
// para resolver a promisse async utilizamos o return e para rejeitar utilizamos o return Promisse.reject("Reason")

// EXEMPLO:

async function sum(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promisse.reject("Os argumentos devem ser do tipo NUMBER")
    } else {
        return a + b
    }
}


sum(5,6).then((res) => console.log(res)).catch((err) => console.log(err))