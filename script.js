const box = document.getElementById("box");
const yellowButton = document.getElementById("yellow");
const blueButton = document.getElementById("blue");
const redButton = document.getElementById("red");
const randomButton = document.getElementById("random");

yellowButton.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});

blueButton.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});

redButton.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});

randomButton.addEventListener("click", () => {
  const colors = ["yellow", "blue", "red"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  box.style.backgroundColor = colors[randomIndex];
});
