const Characters = require('./Characters.js')

class Warrior extends Characters{
    constructor(name, HP, ATK, DEF, shild) {
        super(name,HP, ATK, DEF)
        this.shild = shild
        this.position = "deffense"
    }

    attack(target){
        if (this.position === "deffense") {
            console.log("O guerreiro esta em defesa e não pode atacar!");            
        } else {
            target.HP -= (this.ATK - target.DEF)
        }
    }

    positionToogle(){
        if (this.position === "attack") {
            this.position = "deffense"
        } else {
            this.position = "attack"
        }
    }
}

module.exports = Warrior