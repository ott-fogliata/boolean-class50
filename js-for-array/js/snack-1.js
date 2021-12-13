// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
// Alla fine stampiamo in console il nostro array.

const numberList = [];

for (let i = 0; i < 6; i++) {
    let number = parseInt(prompt('Inserisci un numero'));
    if (number % 2 !== 0) {
        numberList.push(number)
    }
}

console.log(numberList);
