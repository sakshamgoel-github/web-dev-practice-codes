let player1 = 0;
let player2 = 0;
let gameScore = 5;
const h3 = document.querySelector("#player-scores");
h3.textContent = `${player1} to ${player2}`;

const btn1 = document.querySelector("#player1-btn");
const btn2 = document.querySelector("#player2-btn");
const reset = document.querySelector("#reset-btn");

const game_Score = document.querySelector("#max-score");

btn1.addEventListener('click',() => {
    console.log("Hello");
    ++player1;
    h3.textContent = `${player1} to ${player2}`;
    
})
btn2.addEventListener('click',() => {
    console.log("Hello");
    ++player2;
    h3.textContent = `${player1} to ${player2}`;
})
reset.addEventListener('click',() => {
    console.log("Hello");
    player1=0;
    player2=0;
    h3.textContent = `${player1} to ${player2}`;
})