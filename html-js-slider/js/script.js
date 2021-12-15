// creiamo array di colori
// prepariamo la variabile currentIndex
// salviamo in variabile il nostro box (a cui cambieremo colore)
// salviamo in variabile il nostro button
// evento click sul button che incrementa il currentIndex
// nell’evento cambiamo colore al box utilizzando la currentIndex appena incrementata

// const colors = ['blue', 'red', 'yellow', 'green', 'black', 'orange'];
const images = [
    'https://media.istockphoto.com/photos/abstract-background-wallpaper-picture-id952039286?b=1&k=20&m=952039286&s=170667a&w=0&h=LmOcMt7FHxFUAr2bOSfTUPV9sQhME6ABtAYLM0cMkR4=',
    'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://cdn.wallpapersafari.com/13/37/3dELnR.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcPlTmipQnr0xENAVN1oXb7ewqokCiv182w&usqp=CAU'
];

let currentIndex = 0;

const boxImage = document.querySelector('.box');
const nextButton = document.querySelector('.next');

boxImage.src = images[currentIndex];

nextButton.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    boxImage.src = images[currentIndex];
});





// const arrayHeadlines = ['Primo titolo', 'balabla', 'altro titolo']
// const arrayParagraphs = [
//     'lorem ipsum',
//     'altro paragrafo più lungo e così via',
//     'ultimissimo paragrafo'
// ]


// Esercizio studenti - media.

const students = [
    ['Mario', 18],
    ['Luigi', 30],
    ['Anna', 21],
    ['Aurora', 34],
    ['Isa', 26],
    ['Pino', 31],
    ['Ezio', 22],
]

let sum = 0;

let higherAge = 0;  // qui inseriremo l'età più grande "mai vista"
let oldestStudent;  // qui inseriremo lo studente più grande di volta in volta.

for (let i = 0; i < students.length; i++) {

    const [studentName, studentAge] = students[i]

    // sum = sum + studentAge
    sum += studentAge

    // controlliamo se l'età attuale è > della variabile higherAge
    // se è maggiore => che attualmente, questo studente è il più grande.
    if (studentAge > higherAge) {
        higherAge = studentAge
        oldestStudent = studentName
    }
}

const avg = sum / students.length
console.log('La media è:', avg)

console.log('Studente più grande:', oldestStudent)

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let word1 = prompt('Inserisci la prima parola');
let word2 = prompt('Inserisci la seconda parola');

if (word1.length < word2.length) {
    console.log(word1, word2)
} else {
    console.log(word2, word1)
}