let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
const song = new Audio("music.mp3");
let turn = "X";
let isGameOver = false;
const turnText = document.querySelector(".turn");
const reset = document.querySelector(".reset");
const boxes = document.getElementsByClassName("box");
const boxText = document.getElementsByClassName("boxtext");
const line = document.querySelector(".line");
const winImage = document.querySelector(".win-image");

// Function for Change the turn  //
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function for Win //
const winCheck = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((winsArray) => {
    if (
      boxText[winsArray[0]].innerText === boxText[winsArray[1]].innerText &&
      boxText[winsArray[2]].innerText === boxText[winsArray[1]].innerText &&
      boxText[winsArray[0]].innerText !== ""
    ) {
      turnText.innerText = boxText[winsArray[0]].innerText + " Won";
      isGameOver = true;
      music.play();
      winImage.style.width = "100px";
    }
  });
};

//  Game Logic  //

Array.from(boxes).forEach((element) => {
  element.addEventListener("click", () => {
    let boxText = element.querySelector(".boxtext");
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      winCheck();
      audioTurn.play();
      if (!isGameOver) {
        turnText.innerText = "Turn of " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", () => {
  Array.from(boxText).forEach((element) => {
    element.innerText = "";
  });
  music.pause();
  audioTurn.pause();
  gameOver.pause();
  winImage.style.width = "0";
  turn = "X";
  isGameOver = false;
  turnText.innerText = "Turn for " + turn;
});
