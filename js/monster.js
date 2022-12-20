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
  
    render(imgSrc) {
        // Monster Container
        const section = document.createElement("section");
        section.classList.add("monster");
    
        // Monster Name Label
        const label = document.createElement("h3");
        label.textContent = this.name;
    
        // Monster HP Bar
        const hp = document.createElement("section");
        hp.classList.add("hp");
    
        const hpBar = document.createElement("div");
        hpBar.classList.add("hp-bar");
        hpBar.style.width = `${Math.floor((100 * this.hp) / this.maxHp)}%`;
    
        const hpText = document.createElement("h4");
        hpText.classList.add("hp-text");
        hpText.textContent = `HP: ${this.hp} / ${this.maxHp}`;
    
        hp.append(hpBar);
        hp.append(hpText);
    
        // Monster Image
        const img = document.createElement("img");
        img.src = imgSrc;
    
        // Fill the container
        section.append(label);
        section.append(hp);
        section.append(img);
    
        return section;
      }
    // const wrapper = document.createElement("section");
    // const nameOfMonster = document.createElement("h3");
    // nameOfMonster.textContent = this.name;
    // game.appendChild(nameOfMonster);
    // nameOfMonster.innerHTML = "this.name";
    // const hpMonster = document.createElement("h3");
    // hpMonster.innerHTML = this.hp;

    // const image = document.createElement("img");
    // image.innerHTML = image;
  }

// let move1 = new Monster("dragon", 45, 2,3,);
// Monster.attack(move1)
///////////////////////////////////////

/* Write your Monster subclasses here! */

class Demon extends Monster {
  constructor() {
    super("Demon", 200, 50, 20, Fireball);
  }
    render(){
      return Dragon.render("https://thumbs.dreamstime.com/b/smoke-monster-3086241.jpg")

      
}
}
class Moth extends Monster {
  constructor() {
    super("Moth", 300, 15, 60, Confusion);
  }
  render(){
    return Moth.render("https://thumbs.dreamstime.com/b/smoke-monster-3086241.jpg")
}
}
class Squirtle extends Monster {
constructor() {
    super("Squirtle", 240, 65, 25, Freez);
}
render(){
    return Squirtle.render("https://thumbs.dreamstime.com/b/smoke-monster-3086241.jpg")
}
}
// Squirtle.image();
class Geoduck extends Monster {
  constructor() {
    super("Geoduck", 150, 30, 65, Earthquake);
  }
  render(){
    return Geoduck.render("https://thumbs.dreamstime.com/b/smoke-monster-3086241.jpg")

    }
}
//create a conatiner variable=> container
// inner conatiner => h3, h3 chikldren
// conatiner.appendChild(child1);
// conatiner.appendChild(child2);
