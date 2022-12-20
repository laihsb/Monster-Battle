const playerOne = new Demon();
const playerTwo = new Moth();
const battle = new Battle(playerOne, playerTwo);
console.log(battle);
battle.render();
let btn = document.body.querySelector(".fight");
let log = document.body.querySelector(".log");

btn.addEventListener("click", function () {
  if (!battle.battleOver) {
    battle.fight();
  } else {
    console.log("Hello")
  }
});
// beofre click get image working
// monsters name and php along with bar
