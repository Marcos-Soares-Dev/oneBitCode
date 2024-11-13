const Characters = require('./Characters.js')

class Thief extends Characters {
    constructor(name, HP, ATK, DEF) {
        super(name, HP, ATK, DEF)
    }

    attack(target) {
        target.hp -= (this.ATK - target.DEF) * 2
        const damage = (this.ATK - target.DEF) * 2
        return damage
    }
}

module.exports = Thief