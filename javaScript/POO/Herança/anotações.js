// a herança é usada para que uma classe mae passe seus atributos e seus metodos para uma classe filha 

// por que usar isso?

// vamos imaginar que existe uma classe chamada propiedade que será a classe mae, dessa classe podemos ter 
// uma classe filha chamada casa e outra chamada apartamento. ambas as subclasses herdam as propriedades da 
// classe mae e podem ter suas proprias propriedades complementares.a

// exemplo:


class Property {
    constructor(area, price) {
        this.area = area    
        this.price = price
    }
}

class house extends Property {
    constructor(rooms, area, price) {
        super(area, price)
        this.rooms = rooms
    }
}

class apartment extends Property {
    constructor(bathrooms, area, price) {
        super(area, price)
        this.bathrooms = bathrooms
    }
}

const myHouse = new house(3, 100, 500000)
const myApartment = new apartment(2, 50, 300000)

console.log(myHouse)
console.log(myApartment)