const ai = document.getElementById("ai");
const symbol = document.getElementById("symbol");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const character = document.getElementById("character");
const panna = document.getElementById("paper");
const haath = document.getElementById("hand");
const face = document.querySelectorAll(".logo");

const choices = [
  "./assets/rock-hand.png",
  "./assets/paper-hand.png",
  "./assets/scissors-hand.png",
];

const s = document.getElementById("s");
const sc = document.getElementById("sc");
const sco = document.getElementById("sco");

var gameOverText = document.getElementById("end");
var playAgain = document.getElementById("starting");

var ai_score = 0;
var player_score = 0;
var ai_choose = "";

calculations = Math.round(Math.floor(Math.random() * 3));
ai.innerHTML = `<img src="${choices[calculations]}" alt="">`;

var character_choose = "";
face.forEach((face) => {
  face.onclick = (item) => {
    if (item.target.matches("img")) {
      hand.src = "./assets/" + item.target.id + "-hand.png";
      if (item.target.id === "rock") {
        character_choose = "rock";
      } else if (item.target.id === "paper") {
        character_choose = "paper";
      } else if (item.target.id === "scissors") {
        character_choose = "scissors";
      }
    }
    ai_choose();
     if (character_choose === "rock") {
        if (ai_choose === "scissors") {
          player_score++;
          sc.innerText = player_score;
        } else if (ai_choose === "paper") {
          ai_score++;
          sco.innerText = ai_score;
        }
      }
    else if (character_choose === "paper") {
      if (ai_choose === "rock") {
        player_score++;
        sc.innerText = player_score;
      } else if (ai_choose === "scissors") {
        ai_score++;
        sco.innerText = ai_score;
      }
    } else if (character_choose === "scissors") {
      if (ai_choose === "paper") {
        player_score++;
        sc.innerText = player_score;
      } else if (ai_choose === "rock") {
        ai_score++;
        sco.innerText = ai_score;
      }
    }

    if (player_score === 5 || ai_score === 5) {
      var winner =
        player_score === 5 ? "You are the winner" : "Computer is the winner";

      gameOverText.style.visibility = "visible";
      rock.style.visibility = "hidden";
      panna.style.visibility = "hidden";
      scissors.style.visibility = "hidden";

      gameOverText.innerHTML = winner;
      playAgain.style.display = "block";
      playAgain.onclick = function () {
        location.reload();
      };
    }
    function ai_choose() {
        calculations = Math.round(Math.floor(Math.random() * 3));
        if (calculations === 0) {
          ai_choose = "rock";
        } else if (calculations === 1) {
          ai_choose = "paper";
        } else if (calculations === 2) {
          ai_choose = "scissors";
        }
        ai.innerHTML = `<img src="${choices[calculations]}" alt="">`;
      }
  };
});
