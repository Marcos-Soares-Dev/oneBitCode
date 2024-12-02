async function calcIMC(peso, altura) {
    if (typeof peso !== "number" || typeof altura !== "number") {
        return Promise.reject(`Os argumentos devem ser do tipo "NUMERO"`)
    } else {
        return peso / (altura * altura)
    }
}


calcIMC(76,1.72)
.then((res) => console.log(res))
.catch((err) => console.log(err))


calcIMC(76,"vixe")
.then((res) => console.log(res))
.catch((err) => console.log(err))
