const gameboardBuilder = require("./gameboard");

const playerBuilder = () => {
  const computerAttackLogic = () => {
    //to be replaced later, if time allows
    let xCoord;
    let yCoord;
    do {
      xCoord = Math.floor(Math.random() * 10);
      yCoord = Math.floor(Math.random() * 10);
      //compare the previous list of attacks to the new randomly generated attack until an original is found
    } while (
      JSON.stringify(computer.attackList).indexOf(`[${xCoord},${yCoord}]`) !==
      -1
    );
    return [xCoord, yCoord];
  };

  const player = {
    gameboard: gameboardBuilder(),
    turn: true,
    attack: (x, y) => {
      return computer.gameboard.receiveAttack(x, y);
    },
    get newShips() {
      this.gameboard = gameboardBuilder();
    },
  };
  const computer = {
    gameboard: gameboardBuilder(),
    turn: false,
    attackList: [],
    attack: () => {
      const attackCoords = computerAttackLogic();
      computer.attackList.push(attackCoords);
      const result = player.gameboard.receiveAttack(...attackCoords);

      let xComp = attackCoords[0];
      let yComp = attackCoords[1];
      let tileNum;
      if (xComp === 0) {
        tileNum = yComp.toString();
      } else {
        tileNum = xComp.toString() + yComp.toString();
      }
      return [tileNum, result];
    },
  };

  return { player, computer };
};

module.exports = playerBuilder;
