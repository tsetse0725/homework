const blueDiv = document.getElementById("blue");
const blueScore = document.getElementById("score-blue");
const redDiv = document.getElementById("red");
const redScore = document.getElementById("score-red");
const arena = document.getElementById("arena");
const winner = document.getElementById("winner");
const resetButton = document.getElementById("reset");

const checkWinner = () => {
    if(parseInt(blueScore.innerText) >= "100"){
    blueScore.innerText = "winner";
    redScore.innerText = "loser"
    }else if(parseInt(redScore.innerText) >= "100"){
    blueScore.innerText = "winner";
    redScore.innerText = "loser"
    }
}

const blueScoreAdd = () => {
    console.log(123);
    if(blueScore.innerText < 100){
    blueScore.innerText = parseInt(blueScore.innerText) + 5;
    redScore.innerText = parseInt(redScore.innerText) - 5;
    blueDiv.style.width = `${blueScore.innerText}%`;
    redDiv.style.width = `${redScore.innerText}%`;
    checkWinner();
}
}

const redScoreAdd = () =>{
if(redScore.innerText < 100){
blueScore.innerText = parseInt(blueScore.innerText) - 5;
redScore.innerText = parseInt(redScore.innerText) + 5;
blueDiv.style.width = `${blueScore.innerText}%`;
redDiv.style.width = `${redScore.innerText}%`;
checkWinner();
}
}


const resetGame = () => {
    blueScore.innerText = 50;
    redScore.innerText = 50;
    blueDiv.style.width = `${50}%`;
    redDiv.style.width = `${50}%`;
}
blueDiv.addEventListener("click", blueScoreAdd);
redDiv.addEventListener("click", redScoreAdd);
resetButton.addEventListener("click", resetGame);

document.addEventListener('keydown', (event) => {
    if(event.key === "ArrowUp"){
        resetGame();
    }
})

document.addEventListener('keydown', (event) =>{
    if(event.key === "ArrowRight"){
        blueScoreAdd()
    }else if(event.key === "ArrowLeft"){
        redScoreAdd()
    }
}
)
