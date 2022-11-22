import { doc } from "prettier";
import "./style.css";

//Game controller

const playerBuilder = require("./player");

const players = playerBuilder();

const gameLoop = () => {};

const gameFramework = () => {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "main");
  const headerDiv = document.createElement("header");

  const startBtnDiv = document.createElement("div");
  startBtnDiv.classList.add("start-btn-wrapper");
  const startBtn = document.createElement("button");
  startBtn.setAttribute("id", "start-btn");
  startBtn.textContent = "Start Battle";

  const boardsDiv = document.createElement("div");
  boardsDiv.classList.add("board-wrapper");
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
    compTiles[i].classList.add("comp-tile");
    compTiles[i].addEventListener("click", (e) => {
      let tileNum = e.target.getAttribute("tile-num");
      let x;
      let y;
      if (tileNum.length === 1) {
        y = 0;
        x = tileNum;
      } else {
        y = tileNum[0];
        x = tileNum[1];
      }
      e.target.classList.add(players.player.attack(x, y));
      // e.target.classList.add("miss");
    });
    playerBoardDiv.appendChild(playerTiles[i]);
    compBoardDiv.appendChild(compTiles[i]);
    i++;
  }

  mainDiv.appendChild(headerDiv);
  startBtnDiv.appendChild(startBtn);
  mainDiv.appendChild(startBtnDiv);
  mainDiv.appendChild(boardsDiv);
  boardsDiv.appendChild(playerBoardDiv);
  boardsDiv.appendChild(compBoardDiv);
  document.body.appendChild(mainDiv);
};

gameFramework();
