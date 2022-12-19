/* Write your Battle class here! */
class Battle {
  constructor(player, opponent) {
    // super(Monster);
    this.player = player;
    this.opponent = opponent;
    this.battleOver = false;
  }
  //
  checkWin() {
    let winner = null;

    if (this.opponent.hp <= 0 && this.player.hp <= 0) {
      winner = "no one. Both parties lose";
    } else if (this.opponent.hp <= 0) {
      winner = this.player.name;
    } else if (this.player.hp <= 0) {
      winner = this.opponent.name;
    }

    return winner;
  }
  fight() {
    const playerAttackMessage = this.player.attack(this.opponent);
    const opponentAttackMessage = this.opponent.attack(this.player);

    let message = `${playerAttackMessage}\n${opponentAttackMessage}\n`;

    const winner = this.checkWin();

    // Game is over
    if (winner) {
      this.battleOver = true;
      message += `The winner is ${winner}!`;
    }

    return message;
  }
}
