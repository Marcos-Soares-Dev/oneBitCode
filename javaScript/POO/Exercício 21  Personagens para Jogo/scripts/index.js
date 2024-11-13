const Characters = require('./Characters.js')
const Thief = require("./Thief.js");
const Warrior = require('./Warrior.js');

const legonas = new Thief("Legonas", 100, 20, 10);
const aragorn = new Warrior("Aragorn", 100, 20, 10, 20);

console.log(legonas.attack(aragorn));
