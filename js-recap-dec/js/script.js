const color = 'red'; // è sempre una variabile, ma costante.
// color = 'yellow'; => Uncaught TypeError: Assignment to constant variable. at script.js:2

const listInvitati = ['Anna', 'Luisa'];
listInvitati.push('Mario');

/* anche questo NON possiamo fare */
// color += 'ciao';
// color = color + 'ciao';


let nomeVariabile = 'red';
nomeVariabile = 'yellow';


let num = true;

// il == (uguale) compara i due valori senza "costringere il tipo", un booleano può quindi essere
// comparato a un intero (1) oppure (0)
// il === (strettamente uguale) compara il tipo e i valori, quindi devono 
// coincidere sia il tipo che il valore <- usiamo sempre il triplo uguale
// != (diverso)
// !== (strettamente diverso)

if (num === 1) {
    console.log('è 1');
} else {
    console.log('non è 1');
}


// scope: la visibilità di una variabile rispetto un preciso punto di vista
// -> una variabile se dichiarata (let|const) nelle parentesi graffe, si dice variabile locale
// cioè visibile solo in quel punto (solo in quelle parentesi graffe).


// quando è domenica dobbiamo aggiungere un simbolo al nome utente
let userName = 'Gino Pino';
const isSunday = true;

if (isSunday) {
    userName += '$';
}

console.log(userName);


// l'utente admin richiede di simulare un altro utente, quindi questo utente
// dovrà ottenere un altro nome, solo e solo se decide di simulare quell'altro.

let userNameAdmin = 'Mimmo';
const simulation = true;


if (simulation) {
    // qui c'è tutta l'applicazione in simulazione
    let userNameAdmin = 'Utente Simulato'
    //. .....
    // ....
    console.log('Simulazione:', userNameAdmin);
}


console.log('Simulazione Finita:', userNameAdmin);

// I boolean molto spesso nel codice sono legati al concetto di flag.

// Ho un array di nomi, cerchiamo Mario al suo interno. (senza usare includes)
const listaNomi = ['Gino', 'Anna', 'Mario', 'Laura'];
let flag = false;

for (let i = 0; i < listaNomi.length; i++) {
    if (listaNomi[i] === 'Mario') {
        flag = true;
    } // altrimenti rimane a false, nessuno lo sta modificando
}

// if(flag === true)
if (flag) {
    console.log("Ho trovato Mario");
} else {
    console.log("Non ho trovato Mario");
}

// ora con includes
if (listaNomi.includes('Mario')) {
    console.log("Ho trovato Mario");
} else {
    console.log("Non ho trovato Mario");
}

// array 
let array = [1, false, 'stringa'];

let user = ['Gino', 40]; // array che descrive un utente, con nome Gino e età 40.

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < list.length; i++) {
    console.log('num', list[i])
}


for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// while / do while

// se il for si basa sul contatore, il while si basa su:
// questa cosa la faccio fino a quando la condizione è verificata. (infinito)


// l'utente admin inserisce il nome di 5 utenti (all'interno dell'array)
// const usersList = [];

// while (usersList.length < 5) {
//     const username = prompt('Inserisci nome utente');
//     usersList.push(username);
// }

// do {
// // prima esegue questo
// } while(  ) // 


// LE FUNZIONI

//keyword | nome funzione | argomenti
function getRandomNumber(min, max) {

    // return -> una porta verso l'esterno per il passaggio di un valore
    let random = Math.round(Math.random() * (max - min)) + min;
    return random;
}

let result = getRandomNumber(1, 6);

console.log('random', result);

// funzione che genera un array con 5 numeri random
function generateArrayOfNumbers() {
    let arrayNumbers = []
    while (arrayNumbers.length < 5) {
        arrayNumbers.push(getRandomNumber(1,100))
    }
    return arrayNumbers;
}


let numbers = generateArrayOfNumbers();
console.log(numbers);


setTimeout(function () {
    console.log('successo dopo 3 secondi');
}, 3000)

const interval = setInterval(function (){
    console.log('ogni 5 secondi');
}, 5000)

//clearInterval(interval)


// prende l'elemento dall'id
document.getElementById('nome-id')

// prende un solo elemento (il primo) che corrisponde al selettore
document.querySelector('.nome-classe ul')

// restituisce un array con tutti gli elementi che corrispondon al nome della classe
document.getElementsByClassName('className')

// restituisce un array con tutti gli elementi che corrispondon al nome tag
document.getElementsByTagName('div')