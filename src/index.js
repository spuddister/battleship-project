import { doc } from "prettier";
import "./style.css";

//Game controller

const playerBuilder = require("./player");

let players;

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

const gameLoop = (e) => {
  //event listnr on tiles push game into next step, checks if computer ships are all sunk and then calls computer to make a turn and then checks if players ships are sunk. player clicks new tile and process continues

  //Get coordinates of the tile clicked from the tile-number, tile#96 has coordinates [6,9]
  let tileNum = e.target.getAttribute("tile-num");
  let xPlayer;
  let yPlayer;
  if (tileNum.length === 1) {
    yPlayer = 0;
    xPlayer = tileNum;
  } else {
    yPlayer = tileNum[0];
    xPlayer = tileNum[1];
  }
  //call attack with coordinates and update tile to reflect change
  let playerAttack = players.player.attack(xPlayer, yPlayer);
  e.target.classList.add(playerAttack);
  e.target.removeEventListener("click", gameLoop);
  e.target.classList.remove("clickable-tile");
  if (players.computer.gameboard.allShipsSunk()) {
    //exit game loop and end game by calling end game function
    console.log("game over");
  }
  if (playerAttack === "hit") {
    //if player hit computer, player shoots again
    console.log("hit");
    return;
  }

  //if player misses then its the computers turn, with small delay
  setTimeout(() => {
    const [compAttackCoords, attackResult] = players.computer.attack();
    //get correct tile from computers attack
    let targetTile = document.querySelectorAll(
      `div[tile-num="${compAttackCoords}"]`
    )[0];
    targetTile.classList.add(attackResult);
    if (attackResult === "hit") {
      computerAttack(); //DEFINE THIS SO IT IS CALLED AND THE CODE WIHTIN THE TIMEOUT IS RECURSIVE
    }
  }, 700);
};

const buildGameHMTL = () => {
  const playerBoardDiv = document.createElement("div");
  playerBoardDiv.classList.add("board");
  const compBoardDiv = document.createElement("div");
  compBoardDiv.classList.add("board");

  let i = 0;
  let playerTiles = [];
  let compTiles = [];
  while (i < 100) {
    playerTiles[i] = document.createElement("div");
    compTiles[i] = document.createElement("div");
    playerTiles[i].setAttribute("tile-num", i);
    compTiles[i].setAttribute("tile-num", i);
    playerTiles[i].classList.add("tile");
    compTiles[i].classList.add("tile");
    playerTiles[i].classList.add("player-tile");
    compTiles[i].classList.add("clickable-tile");
    //These event listeners on each tile drive the progression of the game, each time one is clicked, the program moves forward until user input is required again
    compTiles[i].addEventListener("click", gameLoop);
    playerBoardDiv.appendChild(playerTiles[i]);
    compBoardDiv.appendChild(compTiles[i]);
    i++;
  }

  boardsDiv.appendChild(playerBoardDiv);
  boardsDiv.appendChild(compBoardDiv);
};
