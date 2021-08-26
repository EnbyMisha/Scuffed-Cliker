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
let idleSpeed1 = 10000;
let idleSpeed2 = 10000;

plScore.innerHTML = `Score: ${score}`;
plLevel.innerHTML = `Level: ${level}`;
levelUp.innerHTML = `Level cost: ${levelCost}`;

clickBtn.addEventListener("click", () => {
  clickBtn.disabled = true;
  levelBtn.disabled = true;
  score += gain;
  plScore.innerHTML = `Score: ${score}`;
  
  setTimeout(() => {
    clickBtn.disabled = false;
    levelBtn.disabled = false;
  }, 125);
})

levelBtn.addEventListener("click", () => {
  if(score < levelCost) return;
  score -= levelCost;
  level++;
  levelCost += Math.floor(levelCost*0.3);

  if(level % 2 == 0) gain++;
  if(level % 5 == 0 && idleSpeed1 >= 2001) {
    idleSpeed1 -= 2000;
  }
  if(level % 10 == 0) {
    gain += Math.round(gain*0.25);
  }

  plScore.innerHTML = `Score: ${score}`;
  plLevel.innerHTML = `Level: ${level}`;
  levelUp.innerHTML = `Level cost: ${levelCost}`;
})

const idleGain1 = setInterval(() => {
  score += level+gain;
  plScore.innerHTML = `Score: ${score}`;
}, idleSpeed1)

const idleGain2 =  setInterval(() => {
  if(level >= 20) {
    score += level+Math.floor((gain+(gain*0.5)));
    plScore.innerHTML = `Score: ${score}`;
  }
}, idleSpeed2)