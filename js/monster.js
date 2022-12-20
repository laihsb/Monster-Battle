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
}
// let move1 = new Monster("dragon", 45, 2,3,);
// Monster.attack(move1)
///////////////////////////////////////

/* Write your Monster subclasses here! */
class Dragon extends Monster {
    constructor() {
      super("Dragon", 100, 0.65);
    }
  }