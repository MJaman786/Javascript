let score = {
    user: 0,
    computer: 0,
    draw: 0
};

function checkWin(user, computer) {
    if (user === 'rock' && computer === 'scissors'
        || user === 'scissors' && computer === 'paper'
        || user === 'paper' && computer === 'rock') {

        score.user++;
        document.querySelector('.player-win').innerText=`You Won !`
    }
    else if (user === computer) {
        score.draw++;
        document.querySelector('.player-win').innerText=`Computer Won !`
    }
    else {
        score.computer++;
        document.querySelector('.player-win').innerText=`It's a tie !`
    }
    document.querySelector('.players-info').innerText=`User : ${score.user} | Computer : ${score.computer} | Draw : ${score.draw}`;
    // 
    localStorage.clear();
    localStorage.setItem('score', JSON.stringify(score));
    // 
    let result = JSON.parse(localStorage.getItem('score'));
    console.log(result);
}

function computerGenerator(user) {
    let computer = Math.floor(Math.random() * 3) + 1;
    if (computer == 1) {
        computer = "rock";
    }
    else if (computer == 2) {
        computer = "paper";
    }
    else {
        computer = "scissors";
    }
    // return computer;
    checkWin(user, computer);
}
