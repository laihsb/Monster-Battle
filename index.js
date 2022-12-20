
const playerOne = new Demon();
const playerTwo = new Moth();
const battle = new Battle(playerOne, playerTwo);
battle.render();
const image = document.querySelector("body");
image.innerHTML = "hello i am an image";