/*

L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

--------

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba

*/

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min)) + min;
}

function reset() {
    containerHtml.innerHTML = ''
}

function createBombs(maxCells) {
    const listBombs = [];
    while (listBombs.length < 16) {
        const n = getRandomNumber(1, maxCells)
        if (!listBombs.includes(n)) {
            listBombs.push(n);
        }
    }
    return listBombs;
}

function gameOver(isWin, score, container) {
    const modal = document.createElement('div');
    modal.className = 'game-over';

    if (isWin) {
        modal.classList.add('winner');
        modal.innerText = 'Hai vinto! ' 
    } else {
        modal.classList.add('loser');
        modal.innerText = 'Hai perso! ' 
    }

    modal.innerText += `Il tuo punteggio é: ${score}`

    const button = document.createElement('button');
    button.innerText = 'Ricomincia';
    button.addEventListener('click', reset)

    modal.append(button);
    container.append(modal);
}

function app(maxCells, container, createBombsFunction) {

    let clicked = 0;
    const bombs = createBombsFunction(maxCells);
    console.log(bombs);

    for (let i = 1; i <= maxCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = i;
        container.append(cell);

        cell.addEventListener('click', function () {
            // la i è inclusa nella lista bombs => ho beccato la mina
            if (bombs.includes(i)) {
                cell.classList.add('red')
                gameOver(false, clicked, container)

            } else {
                cell.classList.add('blue')
                clicked++;
                
                // se il numero di click è uguale al numero consentito di click, 
                // allora l'utente ha vinto.
                if (clicked === maxCells - 16) {
                    gameOver(true, clicked, container)
                }

            }
        });

    }
}

const buttonLevel1 = document.getElementById('livello-1');
const buttonLevel2 = document.getElementById('livello-2');
const buttonLevel3 = document.getElementById('livello-3');

const containerHtml = document.getElementById('campominato-container');

buttonLevel1.addEventListener('click', function () {
    containerHtml.className = 'livello-1';
    reset();
    app(100, containerHtml, createBombs);
});

buttonLevel2.addEventListener('click', function () {
    containerHtml.className = 'livello-2';
    reset();
    app(81, containerHtml, createBombs);
});

buttonLevel3.addEventListener('click', function () {
    containerHtml.className = 'livello-3';
    reset();
    app(49, containerHtml, createBombs);
});

