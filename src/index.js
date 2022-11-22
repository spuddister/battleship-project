import "./style.css";

//Game controller

const playerBuilder = require("./player");

const players = playerBuilder();

const gameFramework = () => {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "main");
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

    playerTiles[i].textContent = "1";
    compTiles[i].textContent = "1";
    playerTiles[i].classList.add("tile");
    compTiles[i].classList.add("tile");
    playerBoardDiv.appendChild(playerTiles[i]);
    compBoardDiv.appendChild(compTiles[i]);
    i++;
  }

  mainDiv.appendChild(boardsDiv);
  boardsDiv.appendChild(playerBoardDiv);
  boardsDiv.appendChild(compBoardDiv);
  document.body.appendChild(mainDiv);
};

gameFramework();
