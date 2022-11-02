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
