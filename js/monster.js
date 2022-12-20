/* Write your Monster class here! */
class Monster {
  constructor(name, hp, atk, def, move) {
    this.name = name;
    this.atk = atk;
    this.hp = hp;
    this.def = def;
    this.move = move;
  }
  attack(ele) {
    if (ele) {
      let damage = this.move.power * (this.atk / this.def);
      ele.hp -= damage;
      return `${this.name} used Fireball to deal ${ele.hp} damage to Moth!`;
    } else {
      return "Dragon missed";
    }
  }
  
  render(ele) {
    let img = document.createElement("img");
    img.src = "https://thumbs.dreamstime.com/b/smoke-monster-3086241.jpg";

    img.style.border = "10px solid orange";
    img.style.borderRadius = "10px";

    document.body.appendChild(img);
    return this.name + this.hp+img;
  }
}
// let move1 = new Monster("dragon", 45, 2,3,);
// Monster.attack(move1)
///////////////////////////////////////

/* Write your Monster subclasses here! */

class Dragon extends Monster {
  constructor() {
    super("Dragon", 200, 50, 20, Fireball);
  }
  render(){
    return Dragon.render(""){

    }
}

class Moth extends Monster {
  constructor() {
    super("Moth", 300, 15, 60, Confusion);

  }
  
  }
}

class Squirtle extends Monster {
  constructor() {
    super("Squirtle", 240, 65, 25, Freez);
  }
}
// Squirtle.image();
class Geoduck extends Monster {
  constructor() {
    super("Geoduck", 150, 30, 65, Earthquake);
  }
}
