
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


for (let i = 0; i < 3; i++) {
    // istruzioni da eseguire    
}

/*
  
  1. 
  i è 0 => i è minore di 3? 
  sì => esegue istruzioni
  i++

  2.
  i è 1 => i è minore di 3? 
  sì => esegue istruzioni
  i++

  3. 
  i è 2 => i è minore di 3? 
  sì => esegue istruzioni
  i++

  4. i è 3 => i è minore di 3? 
  no => esci
 
*/


/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

- for
- l'ordine con cui scriviamo if 

*/


// 1^ versione

for (let i = 1; i <= 100; i++) {

    // prima controlliamo che non sia già multiplo sia di 3 che di 5 => FizzBuzz
    // altrimenti se multiplo di 3 scrivi Fizz
    // altrimenti se multiplo di 5 scrivi Buzz
    // altrimenti => scrivi il numero

    // if (i % 3 === 0 && i % 5 === 0) {
    //     console.log('FizzBuzz');
    // } else if (i % 3 === 0) {
    //     console.log('Fizz')
    // } else if (i % 5 === 0) {
    //     console.log('Buzz')
    // } else {
    //     console.log(i)
    // }
}


// 2^ versione

for (let i = 1; i <= 100; i++) {

    // un if e un else: se "i" è multiplo di 3 oppure di 5 deve scrivere una stringa 
    // oppure (else!) => scrivi i

    // definiamo l'elemento 

    if (i % 3 === 0 || i % 5 === 0) { // => basta che il numero sia multiplo o di 3 oppure di 5
        // il che vuol dire che se multiplo di tutti e due entra nell'if.
        
        // preparo una stringa a seconda di alcune condizioni specifiche
        // andrò a stampare la stringa solo quando sarà pronta
        // let stringa; // => undefined
        let stringa = '';

        if (i % 3 === 0) {
            stringa = 'Fizz'
            //elementHtml.classList.add('fizz')
        }

        // se multiplo di 5 concateniamo la stringa Buzz, 
        // questo vuol dire che se in precedenza il numero è stato multiplo di 3
        // allora concateneremo Buzz a Fizz ottenendo FizzBuzz
        if (i % 5 === 0) {
            stringa += 'Buzz'
            //elementHtml.classList.add('buzz')
        }

        console.log(stringa)

    } else {
        console.log(i)
    }
}


// createElement esempio

const element1 = 'HomePage'
const element2 = 'Welcome'
const element3 = 'About Us'
const element4 = 'Login'

// gli elementi (futuri <li>) sono 4
for (let i = 0; i < 4; i++) {
    // TODO! perché ora non possiamo farlo
}

// ora siamo costretti ANCORA al copia incolla

// elemento esistente
const ul = document.querySelector('nav ul');

// creo nuovo li in memoria (all'interno di una
// variabile) => non è ancora in pagina
const li = document.createElement('li');
li.innerHTML = element1;

// prendiamo l'elemento in memoria e lo inseriamo
// all'interno dell'html
ul.append(li)


const li2 = document.createElement('li');
li2.innerHTML = element2;
ul.append(li2)

// Ma non c'è un modo più semplice e più elegante?


let invitato1 = 'Pippo';
let invitato2 = 'Pino';
let invitato3 = 'Mimmo';

// array => sono una lista di valori 
// => ogni valore può essere una stringa, un intero, un boolean, un altro array e così via.

const invitati = ['Pippo', 'Pino', 'Mimmo', 'Anna']

console.log('La lunghezza dell\'array è: ' + invitati.length)

// l'indice di un valore all'interno di un array indica la posizione 
// del valore rispetto a tutti gli altri

// l'indice inizia sempre da 0

const primoValore = invitati[0]
console.log('Il primo valore è ' + primoValore);

console.log('Il secondo varlore è ' + invitati[1]);

// prendiamo in maniera dinamica l'ultimo valore nell'array (lista) invitati
const ultimoIndice = invitati.length - 1
const ultimoValore = invitati[ultimoIndice];

console.log('L\'ultimo valore dinamico è ' + ultimoValore)
console.log('L\'ultimo valore dinamico è ' + invitati[invitati.length - 1])

invitati.push('Chiara');  // per aggiungere in coda un elemento

console.log(invitati)

/*
Abbiamo una lista di invitati: Anna, Maura, Mimmo, Pino, Gianluca
Chiedere all’utente il suo nome e aggiungerlo alla lista
Stampare in console:
il primo invitato
l’ultimo invitato
lunghezza array => quanti sono gli invitati?
 */

// const invitatiList = ['Anna', 'Maura', 'Mimmo', 'Pino', 'Gianluca'];
// const userName = prompt('Dimmi il tuo nome');
// invitatiList.push(userName);

// console.log('Il primo invitato è: ' + invitatiList[0]);

// console.log('L\'ultimo invitato è: ' + invitatiList[invitatiList.length - 1]);

// console.log('Gli invitati sono: ' + invitatiList.length);

const nomi = ["Luca", "Marco", "Paolo"];
 
for (let i = 0; i < nomi.length; i++) {
    console.log(nomi[i])
}

// let i = 0;
// console.log(nomi[i]);
// i++;

// console.log(nomi[i]);
// i++;

// console.log(nomi[i]);
// i++;
