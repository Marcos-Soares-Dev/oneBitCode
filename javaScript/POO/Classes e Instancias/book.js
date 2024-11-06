// Exemplo de criação de instancias pela classe:

class Book {
    constructor(title,age){
        this.title = title
        this.age = age
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const harryPotter = new Book("harry potter",1986);

console.log(harryPotter);

harryPotter.publish()

console.log(harryPotter);




// Aqui criamos uma instancia(objeto) atraves de uma classe(forma), nos adicionamos o que iria ter na forma que foi o title, age, e definimos que
// a propriedade published era false para ter como parametro inicial para as instancias criadas por essa class. depois é possivel alterar os valores
// deaas atributis facilmente e ainda mais, utilizei uma função guardada dentro da propria instancia para alterar a questao do published. 