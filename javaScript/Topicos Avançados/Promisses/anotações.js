// primsses sao utilizadas para executar um bloco de codigo afim de receber um retorno de algo que pode demorar
// é utilizado assim para que nosso codigo restante nao fique travado, entao ela espera ate que tudo esteja 
// pronto e pode retornar um resolve para informar que tudo que a gente esperava deu certo ou pode retornar um
// reject informando que de errado e precisamos ver o por que deu ruim.a
// nas promisses podemos usar algo como o try cath para pegar os erros e tratar eles.
// ao inves do try usamos um then para pegar o resolve e um catch para pegar o reject.a
// tambem existe o finally que ira ser executado independente do resolve ou reject.

// exemplo:

let pedidoRealizado = false;

let pedidoPizza = new Promise((resolve, reject) => {
    if (pedidoRealizado) {
        resolve("Pedido de pizza realizado com sucesso")
    } else {
        reject("Pedido de pizza falhou")
    }
})

pedidoPizza.then((resolve) => {
    console.log(resolve)
}).catch((reject) => {
    console.log(reject)
}).finally(() => {
    console.log("finalizando atendimento")
})

