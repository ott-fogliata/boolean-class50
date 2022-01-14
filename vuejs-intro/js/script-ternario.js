/*
chiediamo all'utente l'età, 
se ha age >= 18 scriviamo maggiorenne, altrimenti scriviamo minorenne
*/

const age = parseInt(prompt('Quanti anni hai?'));

let result;

if (age >= 18) {
    result = 'maggiorenne';    
} else {
    result = 'minorenne';
}

console.log(result);


// ternario
// result è uguale, se age >= 18 a 'maggiorenne' altrimenti 'minorenne'
const message = age >= 18 ? 'sei maggiorenne' : 'sei minorenne';

console.log(message);
