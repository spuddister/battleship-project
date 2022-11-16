const gameboardBuilder = require("./gameboard");

const playerBuilder = () => {
  const computerAttackLogic = () => {
    //replace this with something less resource consuming later if time
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
      computer.gameboard.receiveAttack(x, y);
    },
  };
  const computer = {
    gameboard: gameboardBuilder(),
    turn: false,
    attackList: [],
    attack: () => {
      let attackCoords = computerAttackLogic();
      computer.attackList.push(attackCoords);
      player.gameboard.receiveAttack(...attackCoords);
      return attackCoords;
    },
  };

  return { player, computer };
};

module.exports = playerBuilder;
