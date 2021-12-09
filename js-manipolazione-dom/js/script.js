
const element = document.querySelector('.red');

element.innerHTML = "Lorem";

const listElements = document.getElementsByClassName('red');
// const listElements = document.querySelectorAll('.red');

console.log(listElements);

let elementByClass = document.querySelector('.yellow');

// utilizzando direttamente il className sovrascriviamo l'attributo class
// elementByClass.className = 'gino'

// invece se volessimo mantenere anche le altre classi, allora:
elementByClass.className += ' gino';

// ----------------------------------------------


const boxElement = document.getElementById('box');
const button = document.getElementById('button-box');

let clickCounter = 0;

/*
 button, ti aggiungo un evento, nel momento in cui
 ricevi un 'click' => allora esegui ciò che c'è scritto
 dentro la function.
*/
button.addEventListener('click', function () {
    clickCounter++; // alias di clickCounter += 1;

    // se clickCounter è dispari, mostro il box
    if (clickCounter % 2 !== 0) {
        boxElement.classList.remove('hide');
        boxElement.classList.add('show');
    } else {
        // se clickCounter è pari, nascono il box
        boxElement.classList.remove('show');
        boxElement.classList.add('hide');
    }
})

// per adesso, per noi, la funzione è semplicemente un 
// insieme di azioni che vengono eseguite "al momento giusto".




