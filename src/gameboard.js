const ship = require("./ship");

function gameboardBuilder() {
  const defaultShipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  let playerShips = [];

  let seaLayout = [
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
    [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
  ];

  //temporarily assigning ship locations for codings sake
  const tempShipLocations = [];
  for (let i = 0; i < 10; i++) {
    tempShipLocations[i] = [
      [i, 0],
      [i, defaultShipLengths[i] - 1],
    ];
  }

  //create ships and assign them coordinates from the temp locations
  //update the seaLayout to track where all ships are located
  for (let i = 0; i < tempShipLocations.length; i++) {
    playerShips[i] = ship(tempShipLocations[i][0], tempShipLocations[i][1]);
    playerShips[i].coordinates.forEach((coord) => {
      seaLayout[coord[0]][coord[1]] = "ship";
    });
  }

  const receiveAttack = (x, y) => {
    if (seaLayout[x][y] === "ship") {
      seaLayout[x][y] = "hit";
      let shipIndex = indentifyShip(x,y);
      if (playerShips[shipIndex].isSunk()) {
        sunkenShip();
      }
      return "hit";
    } else {
      seaLayout[x][y] = "miss";
      return "miss";
    }
  };

  const indentifyShip = (x,y)=>{
    playerShips.forEach(ship=>{
      if (ship.coordinates.includes([x,y])) {
        return playerShips.indexOf(ship)
      }
    })
  };

  const sunkenShip = 

  return {
    playerShips,
    receiveAttack,
  };
}

module.exports = gameboardBuilder;

//hit miss ship empty
