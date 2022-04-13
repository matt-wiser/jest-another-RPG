const Potion = require('../lib/potion');
const Character = require('./Character');

class Player extends Character{
    constructor(name = ''){
        super(name);
            
        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        } else {
            return false;
        }
    };

    addPotion = function(potion) {
        this.inventory.push(potion);
    };

    usePotion = function(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value
                break;
            case 'health':
                this.health += potion.value
                break;
            case 'strength':
                this.strength += potion.value
                break;            
        }
    }
}

module.exports = Player;