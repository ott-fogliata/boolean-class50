
// chiamare per 10 volte penny!
for (let i = 0; i < 10; i++) {
    console.log(i, 'Penny!')
}


console.log('-------------------------------')


let i = 0;
while (i < 10) {
    console.log(i, 'Penny!')
    i++;
}

// Quiz: chiediamo all'utente quale sia la capitale d'Italia.
// glielo chiediamo all'infinito fin quando non risponde in maniera esatta

let userResponse = ''; // perché la stiamo mettendo esternamente?

while (userResponse.toLowerCase() !== 'roma') {
    userResponse = prompt('Qual è la capitale d\'Italia?');
}

console.log('-------------------------------')

// utilizzo del break
let x = 0;
while (x < 10) {
    console.log(x, 'Penny!')
    x++;
    if (x === 5) {
        break;
    }
}

console.log('-------------------------------')

// let i = 0;
// while (i < 10) {
//     console.log(i, 'Penny!')
//     i++;
// }

let y = 0;

do {
    console.log(y, 'Penny');
    y++;
} while (y < 10)

console.log('-------------------------------')

// let userResponse = '';

// while (userResponse.toLowerCase() !== 'roma') {
//     userResponse = prompt('Qual è la capitale d\'Italia?');
// }

let userResponseB;

do {
    userResponseB = prompt('Qual è la capitale d\'Italia?');
} while (userResponseB.toLowerCase() !== 'roma')


// una verifica con il do-while
let statoPc = false;
console.log('Il computer è spento')
let h = 0;

do {
    console.log('Accendo il computer. Il suo stato precedente è:', statoPc)
    statoPc = true;
    h++;
    if (h === 10) {
        console.log('Spengo il pc.')
        statoPc = false;
    }
} while(statoPc)