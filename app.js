const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const nextBtn = document.querySelector(".next-btn");
const mazeLevel = document.querySelector(".maze-level");
const mazeMessage = document.querySelector(".maze-message");
const mazePopup = document.querySelector(".maze-popup");
const popUpBtn = document.querySelector(".popup-btn");

const collisionCheck = (value) => {
  if (value === "maze-border") {
    alert("You lost the game");
  }
  if (value === "finish") {
    nextBtn.style.opacity = 1;
    nextBtn.style.pointerEvents = "all";
  }

  if (value === "end-game") {
    alert("You won 🥳");
    levelOne.style.display = "block";
    levelTwo.style.display = "none";
    mazeLevel.textContent = "Level 1";
    mazeMessage.textContent = "Make it to the finish line";
  }
};

window.addEventListener("mousemove", function (e) {
  let check = e.target.classList.value;
  collisionCheck(check);
});

nextBtn.addEventListener("click", function () {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  nextBtn.style.opacity = 0;
  nextBtn.style.pointerEvents = "none";
  mazeLevel.textContent = "Level 2";
  mazeMessage.textContent = "Final level";
});
