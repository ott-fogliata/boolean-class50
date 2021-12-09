
/* Costante per la definizione del prezzo al km
    così è più facile da modificare :)
*/
const pricePerKm = 0.21;
const discount18 = 20;
const discount65 = 40;

const outputHtml = document.getElementById('total');

const km = parseInt(prompt('Inserisci il numero di chilometri che vuoi percorrere'));
const age = parseInt(prompt('Inserisci la tua età'));

/* BONUS, facciamo un po' di check */
if (isNaN(km) || isNaN(age)) {
    alert('Attenzione inserisci un numero per i valori richiesti.')
} else {

    /* end check */

    let price = pricePerKm * km;
    console.log(price);


    if (age < 18) {
        const discount = price * discount18 / 100;
        price = price - discount;
    }
    if (age >= 65) {
        const discount = price * discount65 / 100;
        price = price - discount;
    }

    console.log(price)

    price = parseFloat(price.toFixed(2));

    console.log(price);

    outputHtml.innerHTML = `Il prezzo del tuo biglietto è ${price}€`;


}
    