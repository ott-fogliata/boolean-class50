

// smartphone

const smartphoneMemory = 64;
const smartphoneRam = 6;
const smartphoneGorillaGlass = true;
const smartphone5G = true;

// const smartphone = [
//     64, 6, true, true
// ];

const smartphone = {
    // key: value
    memory: 64,
    ram: 6,
    gorillaGlass: true,
    rete5g: true,
    "5g": true
}


console.log(smartphone.memory)

/*
- gli apici per le chiavi servono se il nome non è standard 
    => NON E' STANDARD SE: inizia con un numero, oppure se contiene dei simboli

- per prender il valore di una precisa chiave all'interno di un oggetto scrivero:
    oggetto.chiave
    nel caso in cui la chiave NON SIA STANDARD allora utilizzerò le parentesi quadre + apici.
    smartphone["5g"]
*/

const nomeChiaveMemoria = 'memory';

// utilizzando la variabile nomeChiaveMemoria 
// recuperare il valore che corrisponde a questa chiave

console.log(smartphone[nomeChiaveMemoria])
console.log(smartphone['memory'])

// per eseguire il set di una proprietà di un oggetto: 
smartphone.ram = 12;

// se la proprietà non esiste, allora js aggiungerà la nuova coppia chiave valore:
// (simile al push per l'array)
smartphone.wifi6 = true;


console.log("-------------------------------------")


/*
Non conosciamo le proprietà di un oggetto. 
    => non conosciamo le chiavi.


Obiettivo: Stampare tutte le proprietà di un oggetto (con il valore)
*/

const outputHtml = document.getElementById('output');

// for-in 
// per ogni chiave in smartphone
for (let key in smartphone) {
    const output = `${key} => ${smartphone[key]}` 
    outputHtml.innerHTML += output + '<br/>'
}


/**
Altro piccolissimo snack:
Creiamo un array di 3 oggetti smartphone, ogni smartphone ha queste proprietà:
- nome modello
- memory
- se è presente il 5g o meno

Stampare in pagina il nome, la memoria e se è 5g o meno di ciascun smartphone. 
*/

const smartphonesHtml = document.querySelector('.smartphones');

// array di oggetti
const negozio = [

    {
        nome: 'Iphone 13',
        memory: 64,
        rete5g: true
    },

    {
        nome: 'Samsung',
        memory: 128,
        rete5g: true
    },

    {
        nome: 'Xiaomi',
        memory: 64,
        rete5g: false
    }

];

for (let i = 0; i < negozio.length; i++) {

    const smartphone = negozio[i];

    smartphonesHtml.innerHTML += `<br/><h2>${smartphone.nome}</h2>`
    // smartphonesHtml.innerHTML += `<br/><h2>${negozio[i].nome}</h2>`

    for (let k in smartphone) {
        console.log(k, smartphone[k])
        const output = `${k}: ${smartphone[k]} <br/>`
        smartphonesHtml.innerHTML += output
    }

    // for (let k in negozio[i]) {
    //     const output = `${k}: ${negozio[i][k]} <br/>`
    //     smartphonesHtml.innerHTML += output
    // }

    // oppure avremmo potuto fare così, qualora fosse già chiara 
    // e prestabilita la struttura dell'oggetto
    // smartphonesHtml.innerHTML += 'nome: ' + smartphone.nome + '<br/>';
    // smartphonesHtml.innerHTML += 'memory: ' + smartphone.memory + '<br/>';
    // smartphonesHtml.innerHTML += '5g: ' + smartphone['5g'] + '<br/>';

}


// creiamo un nuovo oggetto e pushiamolo in negozio

// const name = 'motorola'
// const memory = 64
// const rete5g = true

// // Se le chiavi corrispondono ai nomi delle variabili 
// // possiamo inserirle direttamente


// const newObject = {
//     name,   // qui lui crea una chiave dal nome della variabile e il suo valore è il valore della variabile
//     memory,
//     rete5g
// }

// console.log(newObject)

// negozio.push(newObject)

const newSmartphone = {
    memory: 64,
    ram: 6,
    gorillaGlass: true,
    rete5g: true,
    "5g": true
}

const { memory, gorillaGlass } = newSmartphone

// const {memory, gorillaGlass} <= newSmartphone

console.log(memory, gorillaGlass)