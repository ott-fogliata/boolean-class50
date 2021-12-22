function getRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function createNewBox(container, i) {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.innerText = i + 1;
    container.append(newBox);
    return newBox;
}

function gameOver(isWin, score, container) {
    const gameOverModal = document.createElement('div')
    gameOverModal.className = 'game-over';

    if (!isWin) {
        gameOverModal.classList.add('loser');
        gameOverModal.innerText = 'Hai Perso! '
    } else {
        gameOverModal.classList.add('winner');
        gameOverModal.innerText = 'Hai Vinto! '
    }

    gameOverModal.innerText += `Punteggio: ${score}`
    container.append(gameOverModal)
}


function createGame(maxCells) {

    const numbers = []

    while (numbers.length <= 16) {
        const n = getRandom(1, 100);
        if (!numbers.includes(n)) {
            numbers.push(n)
        }
    }

    const containerHtml = document.querySelector('.campominato-container');
    containerHtml.innerHTML = '';

    let clicked = 0;

    for (let i = 0; i < maxCells; i++) {
        // qui facciamo la creazione -> 
        // ad ogni step del ciclo aggiungiamo un quadratino
        element = createNewBox(containerHtml, i);

        element.addEventListener('click', function () {
            if (numbers.includes(i)) {
                // qui chiama funzione di stop del gioco (game over)
                this.classList.add('red');
                gameOver(false, clicked, containerHtml)
            } else {
                this.classList.add('green');
                clicked++;
            }

            // se le celle cliccate sono max - 16, l'utente ha vinto
            if (clicked === maxCells - 16) {
                gameOver(true, clicked, containerHtml)
            }
        })
    }
}

// -------------------------------------------------------------------------------------------------------------


document.getElementById('livello-1').addEventListener('click', function () {
    createGame(100)
})  

document.getElementById('livello-2').addEventListener('click', function () {
    createGame(81)
}) 

document.getElementById('livello-3').addEventListener('click', function () {
    createGame(49)
}) 
