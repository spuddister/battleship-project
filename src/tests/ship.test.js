const ship = require("../ship");

it("Ship building test", () => {
  const ship1 = ship([2, 2], [2, 3]);
  expect(ship1.length).toStrictEqual(2);
  expect(ship1.hit()).toBe(1);
  expect(ship1.isSunk()).toBe(false);
});

it("Ship hitting test", () => {
  const ship1 = ship([2, 2], [2, 3]);
  expect(ship1.hit()).toBe(1);
  expect(ship1.hit()).toBe(2);
});

it("Ship sinking test", () => {
  const ship1 = ship([2, 2], [2, 3]);
  ship1.hit();
  ship1.hit();
  expect(ship1.isSunk()).toBe(true);
});
