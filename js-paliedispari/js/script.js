// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma
function isPalindroma(word) {

    let reverse = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i]
        console.log(reverse)
    }

    return reverse === word;

    // if (reverse === word) {
    //     return true;
    // } 

    // return false;

    /*
        if (reverse === word) {
            return true;
        } else {
            return false;
        }
    */

}

const parolaUtente = prompt("Inserisci una parola");

// let result = isPalindroma(parolaUtente)
// if(result) {}

// if(isPalindroma(parolaUtente) === true)
if (isPalindroma(parolaUtente)) {  
    console.log('è palindroma');
} else {
    console.log('NON è palindroma');
}

if (1 + 1 === 2) {
    
}




/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. 
*/


function randomNumber(minNum, maxNum) {
    return Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;

}

function isPari(num) {
    // if (num % 2 === 0) { 
    //     return true;
    // } else {
    //     return false;
    // }

    // if (num % 2 === 0) {
    //     return true;
    // }

    // return false;
    
    return num % 2 === 0;
}

function userWin(totalNumber, userSelection) {
    return (isPari(totalNumber) && userSelection === 'pari') || (!isPari(totalNumber) && userSelection === 'dispari');
}

const userChoice = prompt('Scegli, pari o dispari');
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
const machineNumber = randomNumber(1, 5);

const total = userNumber + machineNumber;

console.log(total);

// if (isPari(total) && userChoice === 'pari') {
//     console.log('Hai vinto!');
// } else if(isPari(total) && userChoice !== 'pari') {
//     console.log('Hai perso!');
// } else if (!isPari(total) && userChoice === 'dispari') {
//     console.log('Hai vinto!');
// } else {
//     console.log('Hai perso');
// }

if (userWin(total, userChoice)) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso!")
}
