

const x = "10";
const outputHtml = document.getElementById('output');

// se x è uguale a 10, scrivi "è 10"
// altrimenti scrivi "non è 10"
if (x == 10) {
    // è 10
    outputHtml.innerHTML = 'Il numero è 10';
} else {
    // non è 10
    outputHtml.innerHTML = 'Il numero NON è 10';
}

// se x è maggiore o uguale a 10, scrivi maggiore/uguale
// altrimenti scrivi "minore"
if (x >= 10) {
    outputHtml.innerHTML += '<br/>è maggiore/uguale di 10';
    // outputHtml.innerHTML = outputHtml.innerHTML + '<br/>è maggiore/uguale';
} else {
    outputHtml.innerHTML += '<br/>è minore di 10';
}

// se x è STRETTAMENTE uguale a 10, scrivi "è 10"
// altrimenti scrivi "non è 10" 
if (x === 10) {
    outputHtml.innerHTML += '<br/>Il numero è strettamente uguale a 10';
} else {
    outputHtml.innerHTML += '<br/>Il numero NON è strettamente uguale a 10';
}

outputHtml.innerHTML += '<hr>';

// 1 = true
// 0 = false
const y = 1;

// se y è vero, scrivi vero
// altrimenti scrivi falso
if (y === true) {
    outputHtml.innerHTML += '<br/> y è vero';
} else {
    outputHtml.innerHTML += '<br/> y è falso';
}

// caso estremo
const z = true;

// se z è uguale a 1, allora scrivi z è il numero 1
// altrimenti scrivi non è numero 1
if (z === 1) {
    outputHtml.innerHTML += '<br/> z è numero 1';
} else {
    outputHtml.innerHTML += '<br/> z NON è numero 1';
}

// trasformiamo una strina in un numero.
//let age = prompt('Qual è la tua età?');
//age = parseInt(age);

// alternativa con const
const age = parseInt(prompt('Qual è la tua età?'));


// ----------------------- OPERATORI LOGICI.

outputHtml.innerHTML += '<hr>';

const k = 20;

// se il numero è maggiore di 40 e minore di 100, allora scrivi "maggiore 40, minore 100"
// altrimenti se il numero è maggiore di 40 e maggiore di 100, "maggiore 100"
// altrimenti, "minore uguale di 40"

// cond1 AND cond2
if (k > 40 && k < 100) {
    outputHtml.innerHTML += '<br/> maggiore 40, minore 100';
} else if(k >= 100) {
    outputHtml.innerHTML += "<br/> maggiore uguale 100";
} else {
    outputHtml.innerHTML += "<br/> minore uguale 40";
}


const g = 'Gino';

// se l'invitato si chiamo Gino oppure si chiama Pino, può entrare alla festa.
if (g === 'Gino' || g === 'Pino') {
    outputHtml.innerHTML += "<br/> Benvenuto alla festa!";
} else {
    outputHtml.innerHTML += "<br/> Chiamo la sicurezza!";
}







// todo (pari|dispari)
