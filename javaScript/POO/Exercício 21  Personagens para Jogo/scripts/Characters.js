class Character {
    constructor(name, HP, ATK, DEF) {
        this.name = name
        this.HP = HP
        this.ATK = ATK
        this.DEF = DEF
    }

    attack(target) {
        target.hp -= (this.ATK - target.DEF)
    }
}

module.exports = Character