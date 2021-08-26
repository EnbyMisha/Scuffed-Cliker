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
let startedIdle2 = false;

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
  levelCost += Math.floor(levelCost*0.5);

  if(level % 2 == 0) gain++;
  if(level % 10 == 0 && idleSpeed1 >= 2001) {
    idleSpeed1 -= 2000;
  }

  plScore.innerHTML = `Score: ${score}`;
  plLevel.innerHTML = `Level: ${level}`;
  levelUp.innerHTML = `Level cost: ${levelCost}`;
})

const idleGain1 = setInterval(() => {
  score += level+2;
  plScore.innerHTML = `Score: ${score}`;
}, idleSpeed1)

idleGain1 *= 2;
  const idleGain2 =  setInterval(() => {
    if(level >= 20) {
      if(!startedIdle2) {
      idleGain1 *= 2
      startedIdle2 = true;
    }

    score += Math.floor((level+(level*0.5)));
    plScore.innerHTML = `Score: ${score}`;
    }
  }, idleSpeed2)