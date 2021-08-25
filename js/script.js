const mainCont = document.getElementById("main-container");
const statScreen = document.getElementById("stat-screen");
const plScore = document.getElementById("pl-score");
const plLevel = document.getElementById("pl-level");
const levelUp = document.getElementById("lvl-up");
const clickBtn = document.getElementById("click-btn");
const levelBtn = document.getElementById("level-btn");

let gain = 1;
let score = 0;
let level = 1;
let levelCost = 25;

plScore.innerHTML = `Score: ${score}`;
plLevel.innerHTML = `Level: ${level}`;
levelUp.innerHTML = `Level cost: ${levelCost}`;

clickBtn.addEventListener("click", () => {
  score += gain;
  plScore.innerHTML = `Score: ${score}`;
})

levelBtn.addEventListener("click", () => {
  if(score < levelCost) return;
  score -= levelCost;
  level++;
  levelCost += Math.floor(levelCost*0.5);

  if(level % 2 == 0) gain++;

  plScore.innerHTML = `Score: ${score}`;
  plLevel.innerHTML = `Level: ${level}`;
  levelUp.innerHTML = `Level cost: ${levelCost}`;
})

const idleGain1 = setInterval(() => {
  score += level+2;
  plScore.innerHTML = `Score: ${score}`;
}, 10000)