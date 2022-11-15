const ship = require("./ship");

function gameboardBuilder() {
  const defaultShipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  let playerShips = [];

  let seaLayout = [
    [, , , , , , , , , ,],
    [, , , , , , , , , ,],
    [, , , , , , , , , ,],
    [, , , , , , , , , ,],
    [, , , , , , , , , ,],
    [, , , , , , , , , ,],
    [, , , , , , , , , ,],
    [, , , , , , , , , ,],
    [, , , , , , , , , ,],
    [, , , , , , , , , ,],
  ];

  //temporarily hard code assigning ship locations for codings sake
  const shipLocations = [];
  for (let i = 0; i < 10; i++) {
    shipLocations[i] = [
      [i, 0],
      [i, defaultShipLengths[i] - 1],
    ];
  }

  //create ships and assign them coordinates from the temp locations
  //update the seaLayout to track where all ships are located
  for (let i = 0; i < shipLocations.length; i++) {
    playerShips[i] = ship(shipLocations[i][0], shipLocations[i][1]);
    playerShips[i].coordinates.forEach((coord) => {
      seaLayout[coord[0]][coord[1]] = playerShips[i];
    });
  }

  const receiveAttack = (x, y) => {
    if (seaLayout[x][y] !== undefined) {
      seaLayout[x][y].hit();
      seaLayout[x][y] = "hit";
      return "hit";
    } else {
      return "miss";
    }
  };

  const allShipsSunk = () => {
    for (let i = 0; i < playerShips.length; i++) {
      if (!playerShips[i].isSunk()) return false;
    }
    return true;
  };

  return {
    playerShips,
    receiveAttack,
    allShipsSunk,
  };
}

module.exports = gameboardBuilder;

//hit miss ship empty
