let informaçõesIMC = [{nome: "Joaquim", altura: 160, peso: 60},{ nome: "Maria", altura: 180, peso: 150},{ nome: "Pedro", altura: "160", peso: 60}]

function caucularIMC(arr) {
    return new Promise((resolve, reject) => {
        try {
            arr.forEach(item => {
                if(typeof item.altura !== "number" || typeof item.peso !== "number") {
                    throw new Error("Os parâmetros informados devem ser do tipo number")
                }
                item.IMC = item.peso / (item.altura * item.altura)
            })
            resolve(arr)
        } catch (error) {
            reject(error)
        }
    })
}

caucularIMC(infosIMC)
    .then((arr) => {
        console.log(arr)
    })
    .catch((error) => {
        console.log(error)
    })
    