import ship from "./ship";
import "./style.css";
const playerBuilder = require("./player");

const players = playerBuilder();
let playerTurn = false;
let playerTiles = [];
let compTiles = [];

//<Initial HMTL Framework> -----------------------

const mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");
const headerDiv = document.createElement("header");
const headerText = document.createElement("div");
headerText.classList.add("title");
headerText.innerText = "BATTLESHIP";
headerDiv.appendChild(headerText);

const boardLabels = document.createElement("p");
boardLabels.classList.add("board-labels");
boardLabels.textContent = "Player vs Computer";

const card = document.createElement("div");
card.classList.add("card");
const directionsText = document.createElement("p");
directionsText.classList.add("text-box");
directionsText.textContent =
  "Click Start Battle when you are happy with your ship configuration";
const boardsDiv = document.createElement("div");
boardsDiv.classList.add("board-wrapper");
const playerBoardDiv = document.createElement("div");
playerBoardDiv.classList.add("board");
const compBoardDiv = document.createElement("div");
compBoardDiv.classList.add("board");

for (let i = 0; i < 100; i++) {
  playerTiles[i] = document.createElement("div");
  compTiles[i] = document.createElement("div");
  playerTiles[i].setAttribute("tile-num", i);
  compTiles[i].setAttribute("tile-num", i);
  playerTiles[i].classList.add("tile");
  compTiles[i].classList.add("tile");
  compTiles[i].classList.add("inactive");
  compTiles[i].classList.add("clickable-tile");
  //These event listeners on each tile drive the progression of the game, each time one is clicked, the program moves forward until user input is required again
  compTiles[i].addEventListener("click", tileClickEvent);
  playerBoardDiv.appendChild(playerTiles[i]);
  compBoardDiv.appendChild(compTiles[i]);
}

card.appendChild(directionsText);
card.appendChild(boardsDiv);
boardsDiv.appendChild(playerBoardDiv);
boardsDiv.appendChild(compBoardDiv);

const btnDiv = document.createElement("div");
btnDiv.classList.add("btn-wrapper");
const startBtn = document.createElement("button");
startBtn.classList.add("start-btn");
startBtn.textContent = "START BATTLE";
const randomBtn = document.createElement("button");
randomBtn.classList.add("random-btn");
randomBtn.textContent = "RANDOMIZE";
const resetBtn = document.createElement("button");
resetBtn.classList.add("hidden");
resetBtn.textContent = "RESET";

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  randomBtn.classList.add("hidden");
  resetBtn.classList.remove("hidden");
  startBtn.disabled = true;
  playerTurn = true;
  randomBtn.disabled = true;
  tileClassRemover(compTiles, "inactive");
  tileClassAdder(playerTiles, "inactive");
  playerBoardDiv.classList.add("inactive-board");
  directionsTextUpdater("turn");
});
randomBtn.addEventListener("click", () => {
  tileClassRemover(playerTiles, "ship");
  tileClassRemover(playerTiles, "ship-single-tile");
  tileClassRemover(playerTiles, "ship-start-horizontal");
  tileClassRemover(playerTiles, "ship-middle-horizontal");
  tileClassRemover(playerTiles, "ship-end-horizontal");
  tileClassRemover(playerTiles, "ship-start-vertical");
  tileClassRemover(playerTiles, "ship-middle-vertical");
  tileClassRemover(playerTiles, "ship-end-vertical");
  players.player.newShips;
  refreshPlayerShips();
});
resetBtn.addEventListener("click", () => {
  location.reload();
});

mainDiv.appendChild(headerDiv);
mainDiv.appendChild(boardLabels);
mainDiv.appendChild(card);
btnDiv.appendChild(randomBtn);
btnDiv.appendChild(startBtn);
btnDiv.appendChild(resetBtn);
mainDiv.appendChild(btnDiv);
document.body.prepend(mainDiv);

//<Initial HMTL Framework/> ----------------------

refreshPlayerShips();

const gameLoop = (e) => {
  //event listener on tiles progress game through steps

  //Get coordinates of the tile clicked from the tile-number, tile#96 has coordinates [6,9]
  let tileNum = e.target.getAttribute("tile-num");
  let pAttackX;
  let pAttackY;
  if (tileNum.length === 1) {
    pAttackX = 0;
    pAttackY = tileNum;
  } else {
    pAttackX = tileNum[0];
    pAttackY = tileNum[1];
  }
  //call attack with coordinates and update tile to reflect change
  let playerAttackResult = players.player.attack(pAttackX, pAttackY);

  e.target.removeEventListener("click", tileClickEvent);
  e.target.classList.remove("clickable-tile");

  if (typeof playerAttackResult === "object") {
    //playerAttackResult is returned as the ship object when a ship is sunk

    e.target.classList.add("hit");
    //apply effects to sunken computer ship tiles
    let targetTile;
    playerAttackResult.coordinates.forEach((coord) => {
      if (coord[0] === 0) {
        targetTile = document.querySelectorAll(
          `div[tile-num="${coord[1]}"]`
        )[1];
      } else {
        targetTile = document.querySelectorAll(
          `div[tile-num="${coord[0]}${coord[1]}"]`
        )[1];
      }
      targetTile.classList.add("sunk");
    });

    if (players.computer.gameboard.allShipsSunk()) {
      endGame();
    }
    return;
  } else if (playerAttackResult === "hit") {
    e.target.classList.add("hit");
    //if player hit computer, check if game over, otherwise return so player shoots again
    if (players.computer.gameboard.allShipsSunk()) {
      endGame(); //player wins
    }
    return;
  } else {
    e.target.classList.add("miss");
  }

  //setup for computer's turn
  playerTurn = false;
  directionsTextUpdater("turn");
  compTiles.forEach((tile) => {
    tile.classList.add("inactive");
  });
  playerTiles.forEach((tile) => {
    tile.classList.remove("inactive");
  });
  playerBoardDiv.classList.remove("inactive-board");

  //Start of computers turn, with small delay
  setTimeout(() => {
    computerAttack();
  }, 500);
};

function endGame() {
  compTiles.forEach((tile) => {
    tile.classList.add("inactive");
    tile.classList.remove("clickable-tile");
    tile.removeEventListener("click", tileClickEvent);
  });
  playerTiles.forEach((tile) => {
    tile.classList.add("inactive");
  });
  directionsTextUpdater("gameover");
}

function computerAttack() {
  let [compAttackCoords, attackResult] = players.computer.attack();
  if (typeof attackResult === "object") {
    //convert ship object to string 'hit' for simplification
    attackResult = "hit";
  }
  //get correct tile from computers attack
  let targetTile = document.querySelectorAll(
    `div[tile-num="${compAttackCoords}"]`
  )[0];
  targetTile.classList.add(attackResult);
  targetTile.classList.remove("ship");
  if (attackResult === "hit") {
    if (players.player.gameboard.allShipsSunk()) {
      endGame(); //computer wins
    }
    setTimeout(() => {
      computerAttack();
    }, 700);
  } else {
    tileClassRemover(compTiles, "inactive");
    tileClassAdder(playerTiles, "inactive");
    playerBoardDiv.classList.add("inactive-board");
    playerTurn = true;
    directionsTextUpdater("turn");
  }
}

function tileClickEvent(e) {
  if (playerTurn) gameLoop(e);
}

function shipTileUpdater(shipToUpdate) {
  for (let i = 0; i < shipToUpdate.coordinates.length; i++) {
    let playerShipCoordinates = shipToUpdate.coordinates[i];
    let x = playerShipCoordinates[0];
    let y = playerShipCoordinates[1];
    let tileNum;
    if (x === 0) {
      tileNum = y.toString();
    } else {
      tileNum = x.toString() + y.toString();
    }

    let tile = document.querySelector(`div[tile-num="${tileNum}"]`);
    tile.classList.add("ship");

    if (shipToUpdate.coordinates.length === 1) {
      tile.classList.add("ship-single-tile");
    } else if (shipToUpdate.isVertical && i === 0) {
      tile.classList.add("ship-start-vertical");
    } else if (
      shipToUpdate.isVertical &&
      i === shipToUpdate.coordinates.length - 1
    ) {
      tile.classList.add("ship-end-vertical");
    } else if (shipToUpdate.isVertical) {
      tile.classList.add("ship-middle-vertical");
    } else if (!shipToUpdate.isVertical && i === 0) {
      tile.classList.add("ship-start-horizontal");
    } else if (
      !shipToUpdate.isVertical &&
      i === shipToUpdate.coordinates.length - 1
    ) {
      tile.classList.add("ship-end-horizontal");
    } else if (!shipToUpdate.isVertical) {
      tile.classList.add("ship-middle-horizontal");
    }
  }
}

function refreshPlayerShips() {
  players.player.gameboard.playerShips.forEach((playerShip) => {
    shipTileUpdater(playerShip);
  });
}

function tileClassRemover(tiles, classString) {
  for (let index = 0; index < tiles.length; index++) {
    tiles[index].classList.remove(classString);
  }
}

function tileClassAdder(tiles, classString) {
  for (let index = 0; index < tiles.length; index++) {
    tiles[index].classList.add(classString);
  }
}

function directionsTextUpdater(command) {
  if (command === "turn") {
    if (playerTurn) {
      directionsText.textContent = "It's your turn";
      directionsText.style.color = "green";
    } else {
      directionsText.textContent = "It's the computer's turn";
      directionsText.style.color = "black";
    }
  } else if (command === "gameover") {
    if (playerTurn) {
      directionsText.textContent = "You WON! Nice shooting.";
      directionsText.style.color = "gold";
    } else {
      directionsText.textContent = "You LOSE. Better luck next time.";
      directionsText.style.color = "red";
    }
  }
}
