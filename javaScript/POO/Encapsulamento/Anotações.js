// encapsulamento é uma forma de deixar os atributos e metodos de uma instancia ocultos ou privados.
// é muito utilizado para que um metodo ou um atributo nao possa ser acesssado diretamente fora da instancia.
// por exemplo:
// se existir um atriuto chamado "balance" que representa o saldo que o usuario tem disponivel em sua conta, esse é um dado 
// sigiloso e deve ser preservado oculto, entao podemos encapsular esse atributo para nao deixar ele disponivel facilmente fora da instacia

// Para tornar um elemento privado ou encapsulado é muito facil basta definir fora do "constructor" utilizando o #, e dentro do constructor 
// voce pode tambem colocar o # depois do this.

// Exemplo de uma classe com atributo privado:

class userAcount {
    #balance
    #email
    #password
    constructor(name, email, password) {
        this.name = name
        this.#email = email
        this.#password = password
        this.#balance = 0
    }

    checkBalnceValue(email, password) {
        if (this.#email === email && this.#password === password) {
            return `O saldo atual da sua conta é: ${this.#balance}`
        } else {
            return "Email ou senha invalidos!"
        }
    }
}

const newUser = new userAcount("Marcos", "marcos@gmail.com","123");

console.log(newUser);

console.log(newUser.checkBalnceValue("marcos@gmail.com","123"));

