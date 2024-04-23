let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
const getComp = () => {
    const chosen = ['rock', 'paper', 'scissors'];
    const randex = Math.floor(Math.random() * 3);
    return chosen[randex]
}

const drawGame = () => {
    console.log ('gams draw');
    msg.innerText = 'Game Draw';
}
const winner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        console.log('you won');
        msg.innerText = 'you won';
    } else{
        compScore++;
        compScorePara.innerText = compScore
        console.log('you lost')
        msg.innerText = 'you lost';
    }
}


const playGame = (userChoice) => {
    console.log('user choice = ', userChoice)
    const compChoice = getComp();
    console.log('comp choice = ', compChoice);

    if( userChoice === compChoice){
        drawGame();
    } else{
        userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper'? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors'? false : true;

        } else {
            userWin = compChoice === 'rock'? false : true;
        }
        winner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice); 
    })
})