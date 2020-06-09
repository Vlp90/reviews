// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, damage) {
    super(health, damage);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

addViking(viking) {
    this.vikingArmy.push(viking)
}

addSaxon(saxon) {
    this.saxonArmy.push(saxon)
}

vikingAttack() {
   let randomSaxonIndex = getRandomInt(this.saxonArmy.length);
   let randomVikingIndex = getRandomInt(this.vikingArmy.length)

   let randomSaxon = this.saxonArmy[randomSaxonIndex];
   let randomViking = this.vikingArmy[randomVikingIndex];

   let damage = randomViking.attack();
   let message = randomSaxon.receiveDamage(damage)

   if (randomSaxon.health <= 0 ) {
       this.saxonArmy.splice(randomSaxonIndex, 1);
   }
   return message;
}

saxonAttack() {
    let randomSaxonIndex = getRandomInt(this.saxonArmy.length);
    let randomVikingIndex = getRandomInt(this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];
    let damage = randomSaxon.attack(); // This method returns the strength of the saxon
    let message = randomViking.receiveDamage(damage);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return message;
  }

  
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }