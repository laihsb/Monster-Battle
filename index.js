const playerOne = new Demon();
const playerTwo = new Moth();
const battle = new Battle(playerOne, playerTwo);
console.log(battle);
battle.render();
let btn = document.body.querySelector(".fight");
let log = document.body.querySelector(".log");
let hb = document.body.querySelector(".hp-bar");
hb.style.backgroundColor="green"
// playerOne.hpBar.inner
let counter=0;
btn.addEventListener("click", function () {
    
  if (!battle.battleOver) {
    battle.fight();
    console.log("Hello")
    counter +=10;
    log.innerHTML =counter;
  } else {
   console.log("Hello")
  }
});

// beofre click get image working
// monsters name and php along with bar
