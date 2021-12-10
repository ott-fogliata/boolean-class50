
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





