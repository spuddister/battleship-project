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
  console.log(seaLayout[0][0]);

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
    if (seaLayout[x][y] !== undefined && seaLayout[x][y] !== "miss") {
      seaLayout[x][y].hit();
      seaLayout[x][y] = "hit";
      return "hit";
    } else {
      seaLayout[x][y] = "miss";
      return "miss";
    }
  };

  const allShipsSunk = () => {
    for (let i = 0; i < playerShips.length; i++) {
      if (!playerShips[i].isSunk()) return false;
    }
    return true;
  };

  const checkSpace = (x, y) => {
    return seaLayout[x][y];
  };

  const shipPlacer = (shipArray) => {
    shipArray.forEach((element) => {
      let goodPlacement = false;
      let direction = Math.random() < 0.5; //True for Horizontal, False for Vertical
      let startX;
      let startY;
      //Test all ship coordinates to see if there is already a ship there, otherwise find new starting point and try again
      while (!goodPlacement) {
        let goodPlacementTest = true;
        startX = Math.floor(Math.random() * 11);
        startY = Math.floor(Math.random() * 11);
        if (checkSpace(startX, startY) === undefined) {
          //single square ships
          //for all ships bigger than 1 square
          if (element.length > 1) {
            for (let i = 1; i < element.length; i++) {
              //If Horizontal
              if (direction) {
                //if space is not empty then bad ship placement
                if (checkSpace(startX + 1, startY) !== undefined) {
                  goodPlacementTest = false;
                }
                //Else Veritcal
              } else {
                //if space is not empty then bad ship placement
                if (checkSpace(startX, startY + 1) !== undefined) {
                  goodPlacementTest = false;
                }
              }
            }
          }
        }
        goodPlacement = goodPlacementTest;
      }
    });
  };

  return {
    playerShips,
    receiveAttack,
    allShipsSunk,
    checkSpace,
  };
}

module.exports = gameboardBuilder;

//hit miss ship empty
