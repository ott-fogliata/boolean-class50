// commento

/* commento */

// alert('Hello World!');


/* oggetto . funzione() */ 
// document.writeln('Hello World');


/*
document è un oggetto che rappresenta 
il nostro codice HTML 
(che chiameremo DOM)
*/

/*
prendi l'elemento #ouput all'interno del document e
all'attributo innerHTML (html interno all'elemento)
dagli un valore che sia uguale a "Hello World"
*/
document.getElementById('output').innerHTML = 'Hello World';

// var age = 34;  // scrittura legacy

/* ----------------------------------------- */

console.log('Ciaone!');

// solo per la prima definizione abbiamo bisogno di let
let numberOne = 5;  // intero (numero)
let numberTwo = 6;
let result = numberOne + numberTwo;
console.log(result);

// adesso aggiungiamo a result 4
result = result + 4;
// alternativa
// result += 4;

console.log(result);


let nome = 'Ottavio'; // stringa => sequenza alfanumerica
let cognome = 'Fogliata';

/*
Se ad un numero aggiungiamo un altro numero => fa la somma
Se invece ad una stringa aggiungiamo un'altra stringa => concatenazione
*/

// variabili in camel case
let nameSurname = nome + ' ' + cognome;
console.log(nameSurname);

console.log('-------------------------------------');

let a = 1; // number
let b = 'ciao';

let test1 = a + b;
console.log(test1);

let c = '10';  // ci ritorneremo eccome! // string
let test2 = a + c;
console.log(test2);

let test3 = c + a;
console.log(test3);

let test4 = a + c + a + a;
console.log(test4);

let test5 = a + c + (a + a);
console.log(test5);

// - per la sottrazione 
// * per la moltiplicazione
// / divisione

let test6 = b * 1;
console.log(test6);

/* esempio BRUTTO di hoisting */


console.log(firstName);
var firstName = 'Gino';

// questo va in errore
// console.log(lastName);
// let lastName = 'Pino';


/* ----------------------------------- */

let miaVariabile;
console.log(miaVariabile);

miaVariabile = 10;
console.log(miaVariabile);

let vero = true;  // => 1
let falso = false; // => 0

/* Template Literal */

let nomeVariabile = 'Ottavio Fogliata';
console.log('Il mio nome è ' + nomeVariabile);

// proviamolo con il template literal

console.log(`Il mio nome è ${nomeVariabile}`);

// ------- PROMPT

// chiediamo all'utente il suo nome e cognome e poi lo salutiamo nell'html

// quello che l'utente scrive nel prompt ora è in userName
const userName = prompt('Inserisci il tuo nome');
const userLastname = prompt('Inserisci il tuo cognome');

// document.getElementById('saluti').innerHTML = `Ciao ${userName}!`;

// in htmlElement noi abbiamo l'oggetto dell'html, in questo
// caso il div #saluti
let htmlElement = document.getElementById('saluti');
htmlElement.innerHTML = `Ciao ${userName} ${userLastname}!`;


console.log(userName);