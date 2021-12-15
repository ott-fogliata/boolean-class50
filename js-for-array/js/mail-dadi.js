// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.

const listEmails = ['ciao@ciaone.it', 'email@email.it', 'emailone@email.com'];

const userEmail = prompt('Inserisci la tua email');

// 1 soluzione => for
let emailTrovata = false;

for (let i = 0; i < listEmails.length; i++) {
    if (listEmails[i].toLowerCase() === userEmail.toLowerCase()) {
        emailTrovata = true;
    }
}

/*
if (emailTrovata)
if (emailTrovata === true)
*/

if (emailTrovata) {
    console.log('EMAIL TROVATA');
} else {
    console.log('EMAIL NON TROVATA');
}


// 2 soluzione => includes
// includes torna un booleano (TRUE|FALSE)
if (listEmails.includes(userEmail)) {
    console.log('Email trovata con includes')
} else {
    console.log('Email NON trovata con includes')

}

// Generare un numero random da 1 a 6, sia per il giocatore 
// sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// include minimo e massimo 
// Math.floor(Math.random() * ((max + 1) - min)) + min
// Math.round(Math.random() * (max - min)) + min;

const humanNumber = Math.round(Math.random() * (6 - 1)) + 1;
const machineNumber = Math.round(Math.random() * (6 - 1)) + 1;

console.log(humanNumber, machineNumber);

console.log('La macchina ha estratto il num:', machineNumber)

if (humanNumber > machineNumber) {
    console.log("L'UMANO HA VINTO");  
} else if (machineNumber > humanNumber) {
    console.log("LA MACCHINA HA VINTO");
} else {
    console.log("PARI")
}

