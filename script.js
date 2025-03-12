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

// randomButton.addEventListener("click", () => {
//   const colors = ["yellow", "blue", "red"];
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   box.style.backgroundColor = colors[randomIndex];
// });



// randomButton.addEventListener("click", () => {
// const r = Math.floor(Math.random() * 256);
// const g = Math.floor(Math.random() * 256);
// const b = Math.floor(Math.random() * 256);
//   box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//   console.log(r)
// } );



randomButton.addEventListener("click", () =>{
  const hexNumbers ="0123456789ABCDEF";

  let colorCode = "#";
  for(let i = 0; i < 6; i++){
    colorCode += hexNumbers[Math.floor(Math.random() * 17)];
  box.style.backgroundColor = colorCode;
  }
});


