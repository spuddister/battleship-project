const gameboardBuilder = require("../gameboard");
// const locateShips = require("../gameboard");

it("Gameboard initialization test", () => {
  const gameboard = gameboardBuilder();
  expect(gameboard.playerShips[0].length).toStrictEqual(4);
  expect(gameboard.playerShips[1].length).toStrictEqual(3);
  //This test will only work with the tempShipLocations
  expect(gameboard.playerShips[0].coordinates).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ]);
});

it("Receiving attack test", () => {
  const gameboard = gameboardBuilder();
  expect(gameboard.receiveAttack(9, 0)).toStrictEqual("hit");
  expect(gameboard.receiveAttack(0, 4)).toStrictEqual("miss");
});

it("Are all ships sunk?", () => {
  const gameboard = gameboardBuilder();
  gameboard.receiveAttack(...gameboard.playerShips[0].coordinates[0]);
  gameboard.receiveAttack(...gameboard.playerShips[0].coordinates[1]);
  gameboard.receiveAttack(...gameboard.playerShips[0].coordinates[2]);
  gameboard.receiveAttack(...gameboard.playerShips[0].coordinates[3]);
  gameboard.receiveAttack(...gameboard.playerShips[1].coordinates[0]);
  gameboard.receiveAttack(...gameboard.playerShips[1].coordinates[1]);
  gameboard.receiveAttack(...gameboard.playerShips[1].coordinates[2]);
  gameboard.receiveAttack(...gameboard.playerShips[2].coordinates[0]);
  gameboard.receiveAttack(...gameboard.playerShips[2].coordinates[1]);
  gameboard.receiveAttack(...gameboard.playerShips[2].coordinates[2]);
  gameboard.receiveAttack(...gameboard.playerShips[3].coordinates[0]);
  gameboard.receiveAttack(...gameboard.playerShips[3].coordinates[1]);
  gameboard.receiveAttack(...gameboard.playerShips[4].coordinates[0]);
  gameboard.receiveAttack(...gameboard.playerShips[4].coordinates[1]);
  gameboard.receiveAttack(...gameboard.playerShips[5].coordinates[0]);
  gameboard.receiveAttack(...gameboard.playerShips[5].coordinates[1]);
  gameboard.receiveAttack(...gameboard.playerShips[6].coordinates[0]);
  gameboard.receiveAttack(...gameboard.playerShips[7].coordinates[0]);
  gameboard.receiveAttack(...gameboard.playerShips[8].coordinates[0]);
  expect(gameboard.allShipsSunk()).toStrictEqual(false);
  gameboard.receiveAttack(...gameboard.playerShips[9].coordinates[0]);
  expect(gameboard.allShipsSunk()).toStrictEqual(true);
});
