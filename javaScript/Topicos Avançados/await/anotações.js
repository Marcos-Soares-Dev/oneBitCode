// o await é uma forma de forçar que o codigo assincrono seja executado de forma sincrona
// para que nos tenhamos certeza que aquela promisse seja resolvida par que seja possivel
// ir para as proximas linhas de codigo sem precisar esperar a promisse ser resolvida.a

// EXEMPLO:


async function sun(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promise.reject(`oa parametros nao sao do tipo "number"` )
    } else {
        return a+b
    }
}

sun(6,"2")
.then((res) => console.log(res)
)
.catch((err) => console.log(err)
)

sun(6,9)
.then((res) => console.log(res)
)
.catch((err) => console.log(err)
)