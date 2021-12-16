
let max = 10;
let min = 1;

const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
console.log(result);


// la funzione qui viene solo dichiarata
function saluto(nomeUtente) {
    console.log('CIAOOOOO! ' + nomeUtente);
}

// per eseguirla la devo richiamare
let userName = 'Ottavio'
saluto(userName);

// ------------------------------------------


function randomNumber(minNum, maxNum) {
    const result = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result;
}


//randomNumber(1, 4);

function getScore(numberOne, numberTwo, elementHTML) {
    if (numberOne > numberTwo) {
        elementHTML.innerHTML = 'Ha vinto il player 1';
    } else if (numberTwo > numberOne) {
        elementHTML.innerHTML = 'Ha vinto il player 2';
    } else {
        elementHTML.innerHTML = 'Pareggio';
    }
}


const scoreHtml = document.querySelector('.score');
const buttonPlayerOne = document.getElementById('player1-run');
const buttonPlayerTwo = document.getElementById('player2-run');

const outputPlayerOne = document.querySelector('.player1-result');
const outputPlayerTwo = document.querySelector('.player2-result');

let numberOne;
let numberTwo;

buttonPlayerOne.addEventListener('click', function () {
    numberOne = randomNumber(1, 6)
    outputPlayerOne.innerHTML = numberOne;
    getScore(numberOne, numberTwo, scoreHtml);
});

buttonPlayerTwo.addEventListener('click', function () {
    numberTwo = randomNumber(1, 6)
    outputPlayerTwo.innerHTML = numberTwo;
    getScore(numberOne, numberTwo, scoreHtml);
})


