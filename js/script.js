const mainCont = document.getElementById("main-container");
const statScreen = document.getElementById("stat-screen");
const plScore = document.getElementById("pl-score");
const clickBtn = document.getElementById("click-btn");

let score = 0;

clickBtn.addEventListener("click", () => {
  score++;
  plScore.innerHTML = `Score: ${score}`;
})