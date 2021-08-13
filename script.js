"use strict";

let ans = Math.trunc(Math.random() * 20) + 1;
const err = new Audio("err.mp3");
const gameOver = new Audio("gameover.mp3");
const win = new Audio("win.mp3");
let score = 20, highScore = 0;

const changeTxt = function (cls, txt) {
  document.querySelector(`${cls}`).textContent = txt;
}

const stopAudio = function () {
  err.pause();
  win.pause();
  gameOver.pause();
}

console.log(ans);
let newNum;
function fxn() {
  newNum = Number(document.querySelector(".guess").value);

  if (!(newNum > 0 && newNum <= 20)) {
    changeTxt(`.message`, "Enter input between 1 & 20");
  }
  else {
    if (newNum === ans) {
      stopAudio();
      changeTxt(`.message`, "You nailed it!!🥳🥳");
      highScore = Math.max(score, highScore);
      changeTxt(".highscore", highScore);
      document.querySelector('body').style.backgroundColor = "#60b347";
      changeTxt('.number', ans);
      document.querySelector('.number').style.width = "30rem";
      win.play();
    }
    else {
      stopAudio();
      if (score == 1) {
        changeTxt(`.message`, "You lost 😖😖");
        gameOver.play();
      }
      else {
        score--;
        changeTxt(".score", score);
        err.play();
        changeTxt(`.message`, newNum > ans ? "Guess a smaller one😅" : "Guess a bigger one😅");
      }
    }
  }
}
document.querySelector(".check").addEventListener("click", fxn);


document.querySelector(`.again`).addEventListener
  ("click", function () {
    stopAudio();
    score = 20;
    ans = Math.floor(Math.random() * 20) + 1;
    changeTxt(`.message`, "Start Guessing...");
    changeTxt(`.score`, score);
    changeTxt(`.number`, "?");
    document.querySelector(`.guess`).value = "";
    document.querySelector(`body`).style.backgroundColor = '#222';
    document.querySelector(`.number`).style.width = "15rem";
  });