import { doc } from "prettier";
import "./style.css";

//Game controller

const playerBuilder = require("./player");

let players;
let playerTurn = true;
let playerTiles = [];
let compTiles = [];

//Initial HMTL Framework
const mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");
const headerDiv = document.createElement("header");
const boardsDiv = document.createElement("div");
boardsDiv.classList.add("board-wrapper");

const startBtnDiv = document.createElement("div");
startBtnDiv.classList.add("start-btn-wrapper");
const startBtn = document.createElement("button");
startBtn.setAttribute("id", "start-btn");
startBtn.textContent = "Start Battle";
startBtn.addEventListener("click", () => {
  startBtn.classList.add("start-hidden");
  buildGameHMTL();
  players = playerBuilder();
  startBtn.disabled = true;
});

mainDiv.appendChild(headerDiv);
startBtnDiv.appendChild(startBtn);
mainDiv.appendChild(startBtnDiv);
mainDiv.appendChild(boardsDiv);
document.body.appendChild(mainDiv);

const buildGameHMTL = () => {
  const playerBoardDiv = document.createElement("div");
  playerBoardDiv.classList.add("board");
  const compBoardDiv = document.createElement("div");
  compBoardDiv.classList.add("board");

  let i = 0;

  while (i < 100) {
    playerTiles[i] = document.createElement("div");
    compTiles[i] = document.createElement("div");
    playerTiles[i].setAttribute("tile-num", i);
    compTiles[i].setAttribute("tile-num", i);
    playerTiles[i].classList.add("tile");
    compTiles[i].classList.add("tile");
    playerTiles[i].classList.add("player-tile", "inactive");
    compTiles[i].classList.add("clickable-tile");
    //These event listeners on each tile drive the progression of the game, each time one is clicked, the program moves forward until user input is required again
    compTiles[i].addEventListener("click", tileClickEvent);
    playerBoardDiv.appendChild(playerTiles[i]);
    compBoardDiv.appendChild(compTiles[i]);
    i++;
  }

  boardsDiv.appendChild(playerBoardDiv);
  boardsDiv.appendChild(compBoardDiv);
};

const computerAttack = () => {
  const [compAttackCoords, attackResult] = players.computer.attack();
  //get correct tile from computers attack
  let targetTile = document.querySelectorAll(
    `div[tile-num="${compAttackCoords}"]`
  )[0];
  targetTile.classList.add(attackResult);
  if (attackResult === "hit") {
    if (players.player.gameboard.allShipsSunk()) {
      endGame();
    }
    setTimeout(() => {
      computerAttack();
    }, 900);
  } else {
    compTiles.forEach((tile) => {
      tile.classList.remove("inactive");
    });
    playerTiles.forEach((tile) => {
      tile.classList.add("inactive");
    });
  }
};

const gameLoop = (e) => {
  //event listener on tiles push game into next step, checks if computer ships are all sunk and then calls computer to make a turn and then checks if players ships are sunk. player clicks new tile and process continues

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
  let playerAttack = players.player.attack(pAttackX, pAttackY);
  e.target.classList.add(playerAttack);
  e.target.removeEventListener("click", tileClickEvent);
  e.target.classList.remove("clickable-tile");
  if (players.computer.gameboard.allShipsSunk()) {
    endGame();
  }
  if (playerAttack === "hit") {
    //if player hit computer, player shoots again
    return;
  }
  playerTurn = false;
  //Start of computers turn, with small delay
  compTiles.forEach((tile) => {
    tile.classList.add("inactive");
  });
  playerTiles.forEach((tile) => {
    tile.classList.remove("inactive");
  });
  setTimeout(() => {
    computerAttack();
    playerTurn = true;
  }, 700);
};

const endGame = () => {
  compTiles.forEach((tile) => {
    tile.classList.add("inactive");
    tile.classList.remove("clickable-tile");
    tile.removeEventListener("click", tileClickEvent);
  });
  playerTiles.forEach((tile) => {
    tile.classList.add("inactive");
  });
  console.log("game over");
};

function tileClickEvent(e) {
  if (playerTurn) gameLoop(e);
}
