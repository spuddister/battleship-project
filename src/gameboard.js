const ship = require("./ship");

function gameboardBuilder() {
  const defaultShipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  let playerShips = [];

  let seaLayout;

  const checkSpace = (x, y) => {
    return seaLayout[x][y] === undefined ? undefined : false;
  };

  const shipBuilder = () => {
    playerShips = [];
    seaLayout = [
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
    defaultShipLengths.forEach((shipLength) => {
      let goodPlacement = false;
      let direction = Math.random() < 0.5; //True for Horizontal, False for Vertical
      let start;
      let end;
      //Test all ship coordinates to see if there is already a ship there, otherwise find new starting point and try again
      while (!goodPlacement) {
        let goodPlacementTest = true; //default to true, if test fails set false
        start = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ];
        if (checkSpace(start[0], start[1]) === undefined) {
          end = start;
          if (shipLength > 1) {
            for (let i = 1; i < shipLength; i++) {
              if (direction) {
                //if space is not empty or out of bounds then bad ship placement
                if (
                  start[0] + i > 9 ||
                  checkSpace(start[0] + i, start[1]) !== undefined
                ) {
                  goodPlacementTest = false;
                } else {
                  //good placement, assign end
                  end = [start[0] + i, start[1]];
                }
              } else {
                //same for other direction
                if (
                  start[1] + i > 9 ||
                  checkSpace(start[0], start[1] + i) !== undefined
                ) {
                  goodPlacementTest = false;
                } else {
                  end = [start[0], start[1] + i];
                }
              }
            }
          }
        } else {
          goodPlacementTest = false;
        }
        goodPlacement = goodPlacementTest;
      }

      //update the seaLayout to track where all ships are located
      let newShip = ship(start, end);
      newShip.coordinates.forEach((coord) => {
        seaLayout[coord[0]][coord[1]] = newShip;
      });
      playerShips.push(newShip);
    });
  };

  const receiveAttack = (x, y) => {
    if (typeof seaLayout[x][y] === "object") {
      seaLayout[x][y].hit();
      if (seaLayout[x][y].isSunk()) {
        let temp = seaLayout[x][y];
        seaLayout[x][y] = "hit";
        return temp;
      }
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

  shipBuilder();

  return {
    playerShips,
    receiveAttack,
    allShipsSunk,
    checkSpace,
    shipBuilder,
  };
}

module.exports = gameboardBuilder;
