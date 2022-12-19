/* Write your Move class here! */
class Move {
  conctructor(name, power, accuracy) {
    this.name = name;
    // this.power = power;
    // this.accuracy = accuracy;
  }

  didHit() {
    if (Math.random() > 0.6) {
      return true;
    }
    return false;
  }
}
///////////////////////////////////////
console.log(this.name);
/* Write your Move subclasses here! */

class Fireball extends Move {
  constructor() {
    super("fireBall", 120, 0.75);
  }
}
class Confusion extends Move {
  constructor() {
    super("Confusion", 80, 1);
  }
}
class Freez extends Move {
  constructor() {
    super("Freez", 100, 0.65);
  }
}
class Earthquake extends Move {
  constructor() {
    super("Earthquake", 60, 0.01);
  }
}
