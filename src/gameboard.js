const ship = require("./ship");

function gameboardBuilder() {
  const startingShipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  let playerShips = [];
  let compShips = [];
  let seaLayout = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < startingShipLengths.length; i++) {
    playerShips[i] = ship(startingShipLengths[i]);
    compShips[i] = ship(startingShipLengths[i]);
  }

  const placeShip = (start, end) => {
    seaLayout[start[0]][start[1]] = 1;
    seaLayout[end[0]][end[1]] = 1;

    //check for direction of ship
    if (start[0] === end[0]) {
      let vert = start[1] + 1;
      while (vert < end[1]) {
        seaLayout[start[0]][vert] = 1;
        vert++;
      }
    } else {
      let hor = start[0] + 1;
      while (hor < end[0]) {
        seaLayout[hor][start[0]] = 1;
        hor++;
      }
    }
    return seaLayout;
  };

  return {
    playerShips,
    compShips,
    placeShip,
  };
}

module.exports = gameboardBuilder;
