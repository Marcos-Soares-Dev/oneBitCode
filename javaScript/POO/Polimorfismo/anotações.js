// Polimorfismo é o conceito de por exemplo, temos um veiculo como classe mae e temos as classes filhas que
// extend os metodos e atributos da classe mae veiculo, podem ser por exemplo a classe carro, navio e UserActivation.apply

// na classe mae poderiamos ter um metodo para mover o veiculo. 
// e cada um de seus filhos teria esse mesmo metodo so que mais especifico para ele mesmo 
// dessa forma podemos dizer que o metodo movver sofreu um polimorfismo.

// exemplo:

class Veiculo {
    mover() {
        console.log("mover")
    }
}

class carro extends Veiculo {

    mover() {
        console.log("o carro esta se movendo")
    }
}

class navio extends Veiculo {
    mover() {
        console.log("o navio esta se movendo")
    }
}

class aviao extends Veiculo {
    mover() {
        console.log("o aviao esta se movendo")
    }
}

const fiatUno = new carro();
const barco = new navio();
const jato = new aviao();

console.log(fiatUno.mover());
console.log(barco.mover()); 
console.log(jato.mover());
