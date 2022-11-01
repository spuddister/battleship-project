const gameboardBuilder = require("../gameboard");
// const locateShips = require("../gameboard");

it("Gameboard initialization test", () => {
  const gameboard = gameboardBuilder();
  expect(gameboard.playerShips[0].length).toStrictEqual(4);
  expect(gameboard.playerShips[1].length).toStrictEqual(3);
});

it("Ship placement test", () => {
  const gameboard = gameboardBuilder();
  const response = [
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
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
  expect(gameboard.placeShip([0, 0], [0, 3])).toEqual(response);
});
