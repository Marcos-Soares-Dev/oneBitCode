const Characters = require('./Characters.js')

class Mage extends Characters {
    constructor(name, HP, ATK, DEF, MP) {
        super(name,HP, ATK, DEF)
        this.MP = MP
    }

    attack(target){
        target.HP -= (this.ATK + this.MP) - target.DEF
    }
}

module.exports = Mage