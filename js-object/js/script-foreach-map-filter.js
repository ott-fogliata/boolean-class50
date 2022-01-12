const list = ['Mino', 'Pino', 'Gino', 'Maura', 'Lino', 'Anna', 'Paola'];

// // stampare ciascun nome nel console.log

// for (let i = 0; i < list.length; i++) {
//     console.log(list[i])
//     break;
// }

// console.log('--------------------------------')

// list.forEach((element, index, array) => {
//     console.log(element, index);
// })

// console.log('--------------------------------')

// // per ogni nome in list
// list.forEach((nome) => {
//     console.log(nome)
// })

// console.log('--------------------------------')

// // si scrive sia con arrow function sia con function classica
// list.forEach(function (nome) {
//     console.log(nome);
// })

console.log('--------------------------------')


// abbiamo un array di numeri, creare un nuovo array di tutti i numeri moltiplicati per 2.

// prima con il for
// const nums = [2, 3, 4, 5, 6, 7, 8];

// const newNums = [];

// for (let i = 0; i < nums.length; i++) {
//     newNums.push(nums[i] * 2);
// }

// console.log(newNums);

// // con il map
// // creo un nuovo array con i valori che ritornano ad ogni step del ciclo.
// const newArrayNums = nums.map(function (number) {
//     return number * 2;
// })

// console.log(newArrayNums);


// da list, creare un nuovo array con solo i nomi che iniziano con M o P.

// for
const newNamesList = [];

for (let i = 0; i < list.length; i++) {
    const currentName = list[i];

    const firstChar = currentName[0].toLowerCase();
    if (firstChar === 'm' || firstChar === 'p') {
        newNamesList.push(currentName);
    }

}

console.log(newNamesList);


// filter

// const newFilterNamesList = list.filter(function (name) {
//     const firstChar = name[0].toLowerCase();
//     if (firstChar === 'm' || firstChar === 'p') {
//         return true;
//     } 
//     return false;
// })

const newFilterNamesList = list.filter(function (name) {
    const firstChar = name[0].toLowerCase();
    // ritorna il valore solo se...
    return firstChar === 'm' || firstChar === 'p';
})

console.log(newFilterNamesList)