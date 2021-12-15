
// DESTRUCTURING (aka "distribuzione degli elementi")

const students = ['Maria', 'Paolo', 'Anna'];

// const studentFirst = students[0];
// const studentSecond = students[1];
// const studentThird = students[2];


const [studentFirst, _,studentThird] = students;


// SPREAD

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const altroArray = ['ciao', 'pippo'];

// come uniamo i due array?
const mergedArray = [...array1, ...array2, ...array3, ...altroArray];
console.log(mergedArray)

// e se volessi creare una copia di un array? (clone)
const riferimentoArray = array1;

const cloneArray = [...array1];