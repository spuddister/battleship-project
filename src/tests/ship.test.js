const ship = require("../ship");

it("Ship builder", () => {
  const ship1 = ship(1);
  expect(ship1.hit()).toBe(1);
  expect(ship1.isSunk()).toBe(true);
});
