function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

const randomNumbers = [];
const output = document.getElementsByClassName('numbers')[0];

while (randomNumbers.length < 5) {
    const rand = getRandomNumber(1, 100);
    if (!randomNumbers.includes(rand)) {
        randomNumbers.push(rand)
    }
}

for (let i = 0; i < randomNumbers.length; i++) {
    output.innerHTML += randomNumbers[i] + ' ';
}

setTimeout(function () {
    
    // nascondere i numeri in pagina
    output.innerHTML = '';

    let numeriIndovinati = 0;
    let numeriInseritiUtente = [];

    setTimeout(function () {
        // chiedere per 5 volte i numeri all'utente
        for (let i = 0; i < 5; i++) {
            const response = parseInt(prompt("Inserisci il numero che ricordi"))
            // se response è incluso nei numeri random MA non incluso nei numeri che ha già inserito, allora:
            if (randomNumbers.includes(response) && !numeriInseritiUtente.includes(response)) {
                numeriIndovinati++;
            }
            numeriInseritiUtente.push(response);
        }

        alert('Numeri indovinati: ' + numeriIndovinati)
        // verificare che abbia indovinato 5 numeri

    }, 500);

}, 5000)