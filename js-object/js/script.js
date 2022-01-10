

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
