function calcIMC(weigth, heigth) {
    return new Promise((resolve, reject) => {
        if (typeof weigth !== 'number' || typeof heigth !== 'number') {
            reject(`Os argumentos devem ser do tipo NUMBER` )
        } else {
            console.log("Calculando o IMC, por favor aguarde...");            
            setTimeout(() => {
                resolve(weigth / (heigth * heigth))
            }, 2000);
        }
    })
}

function showIMC(weigth, heigth) {
    calcIMC(weigth, heigth).then((result) => {
        console.log(`O resultado do IMC foi: ${result}`);
        if (result < 18.5) {
            console.log("Situação: MAGREZA");                       
        } else if (result < 25) {
            console.log("Situação: NORMAL");            
        } else if (result < 30) {
            console.log("Situação: SOBREPESO");            
        } else if (weigth < 40) {
            console.log("Situação: OBESIDADE");            
        }  else {
            console.log("Vixe, Morreu");            
        }
    }).catch((erro) => {
        console.log(erro);        
    })
}

showIMC(76, "1.71")