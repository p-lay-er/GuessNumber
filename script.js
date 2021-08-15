"use strict";

let ans = Math.trunc(Math.random() * 20) + 1;
const err = new Audio("err.mp3");
const gameOver = new Audio("gameover.mp3");
const win = new Audio("win.mp3");
let score = 20, highScore = 0;

const changeTxt = function (cls, txt) {
  document.querySelector(`${cls}`).textContent = txt;
}

console.log(ans);
let newNum;
const fxn = function () {
  newNum = Number(document.querySelector(".guess").value);

  if (!(newNum > 0 && newNum <= 20)) {
    changeTxt(`.message`, "Enter input between 1 & 20");
  }
  else {
    if (newNum === ans) {
      changeTxt(`.message`, "You nailed it!!🥳🥳");
      highScore = Math.max(score, highScore);
      changeTxt(".highscore", highScore);
      document.querySelector('body').style.backgroundColor = "#60b347";
      changeTxt('.number', ans);
      document.querySelector('.number').style.width = "20%";
      win.play();
    }
    else {
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

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    fxn();
  }
  else if ((e.key == 'ArrowUp') && (newNum > 0 && newNum <= 20)) {
    newNum++;
  }
  else if ((e.key == 'ArrowDown') && (newNum > 0 && newNum <= 20)) {
    newNum--;
  }
});

document.querySelector(`.again`).addEventListener
  ("click", function () {
    score = 20;
    ans = Math.floor(Math.random() * 20) + 1;
    changeTxt(`.message`, "Start Guessing...");
    changeTxt(`.score`, score);
    changeTxt(`.number`, "?");
    document.querySelector(`.guess`).value = "";
    document.querySelector(`body`).style.backgroundColor = '#222';
    document.querySelector(`.number`).style.width = "15rem";
  });