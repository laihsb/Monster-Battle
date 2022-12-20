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
  //let img= "https://thumbs.dreamstime.com/b/smoke-monster-3086241.jpg";
  render(ele) {
    // let img = document.createElement("img");
    // img.src = "https://thumbs.dreamstime.com/b/smoke-monster-3086241.jpg";
    // img.style.border = "10px solid orange";
    // img.style.borderRadius = "10px";
    // document.body.appendChild(img);
    alert("hello");
    // return this.name + this.hp+img;
    let game = document.querySelector("#game");
    game.innerHTML = "HELLO";
    const wrapper = document.createElement("section");
    const nameOfMonster = document.createElement("h3");
    nameOfMonster.textContent = this.name;
    game.appendChild(nameOfMonster);
    nameOfMonster.innerHTML = "this.name";
    const hpMonster = document.createElement("h3");
    hpMonster.innerHTML = this.hp;

    const image = document.createElement("img");
    image.innerHTML = image;
  }
}
// let move1 = new Monster("dragon", 45, 2,3,);
// Monster.attack(move1)
///////////////////////////////////////

/* Write your Monster subclasses here! */

class Demon extends Monster {
  constructor() {
    super("Demon", 200, 50, 20, Fireball);
  }
  //   render(){
  //     return Dragon.render("hello"){

  //     }
}

class Moth extends Monster {
  constructor() {
    super("Moth", 300, 15, 60, Confusion);
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
//create a conatiner variable=> container
// inner conatiner => h3, h3 chikldren
// conatiner.appendChild(child1);
// conatiner.appendChild(child2);
