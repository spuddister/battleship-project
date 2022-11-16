const playerBuilder = require("../player");

const players = playerBuilder();

it("Computer launches attack on player", () => {
  let testAttack = players.computer.attack();
  expect(JSON.stringify(testAttack).length).toStrictEqual(5);
  expect(JSON.stringify(players.computer.attackList)).toEqual(
    expect.stringContaining(testAttack.toString())
  );
});

it("Player launches attack on computer", () => {
  let testAttack = players.player.attack(0, 0);
  expect(players.computer.gameboard.checkSpace(0, 0)).toEqual("hit");
});
