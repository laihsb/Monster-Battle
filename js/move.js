/* Write your Move class here! */
class Move {
  conctructor(name, power, accuracy) {
    this.name = name;
    this.power = power;
    this.accuracy = accuracy;
  }

  didHit() {
    if (Math.random() > 0.6) {
      return true;
    }
    return false;
  }
}
///////////////////////////////////////
// let move1 = new Move("dragon", 45, 2);
/* Write your Move subclasses here! */
// move1.didHit();
