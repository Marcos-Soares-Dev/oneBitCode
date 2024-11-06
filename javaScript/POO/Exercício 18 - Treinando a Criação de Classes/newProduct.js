class product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock (quantity) {
        this.inStock += quantity
    }

    calculeDiscount(discountPercentage) { 
        const finalPrice = this.price - (this.price * (discountPercentage / 100))
        return finalPrice
    }
    
}

const sapato = new product("sapato", "sapato bonito", 1000);

sapato.addToStock(5)

console.log(sapato);

console.log(sapato.calculeDiscount(50));
