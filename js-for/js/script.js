
// caro codice, per 10 volte scrivi penny

// crea un contatore, aumenta il contatore ad ogni step di 1,
// fino a quando il contatore non supera 10

// creo contatore
// let i = 0;

// incremento il contatore ad ogni step
// i++;
// console.log("penny");

// i++;
// console.log("penny");

// i++;
// console.log("penny");

// i++;
// console.log("penny");

// i++;
// console.log("penny");

// i++;
// console.log("penny");

// i++;
// console.log("penny");

// i++;
// console.log("penny");

//.......
// fino a quando il contatore non supera 10
// if (i > 10) {
//     // stop!
// }




// CHIAMARE PER 10 VOLTE "PENNY"

const output1Html = document.querySelector('.output1');

// creo contatore
// definisco limite
// incremento => (come verrà incrementato)

for (let i = 0; i < 10; i++) {
    output1Html.innerHTML += 'penny!<br/>'; 
}

output1Html.innerHTML += 'FINE!'


// Countdown di capodanno
const output2Html = document.querySelector('.output2');

// creo contatore => 10
// definisco limite => i > 0
// decremento => i - 1 ad ogni step => i--
for (let i = 10; i >= 0; i--) {
    output2Html.innerHTML += `${i}<br/>`
}
output2Html.innerHTML += 'BUON ANNO!';


/*
1. utilizzando un ciclo for contare fino a 20
2. utilizzando un ciclo for stampare nell’html 16 box (dei div)
(bonus, utilizziamo flex per allinearli?) 
 */
const contaHtml = document.querySelector('.conta');

for (let x = 0; x <= 20; x++) {
    contaHtml.innerHTML += `<span>${x}</span> `;
}

// -------------------------------------------------

const containerBoxes = document.querySelector('.container-boxes');



// Vogliamo rendere rossi i box dispari, mentre il box divisibile per 5 è nero

// dentro il form, se il contatore diviso per 2 non ha resto, allora è pari => non faccio nulla
// se il contatore invece, diviso per 2 ha un resto diverso da zero, allora è dispari => 
// => oltre ad aggiungere la classe box inserisco anche la classe box-red
// ... se divisibile per 5, bla bla bla

for (let i = 0; i < 16; i++) {
    if (i % 5 === 0 && i !== 0) {
        // divisibile per 5
        containerBoxes.innerHTML += `<div class="box box-black">${i} (ciao)</div>`  
    }
    else if (i % 2 === 0) {
        // pari
        containerBoxes.innerHTML += `<div class="box">${i}</div>` 
    }  
    else {
        // dispari
        containerBoxes.innerHTML += `<div class="box box-red">${i}</div>`
    }

}