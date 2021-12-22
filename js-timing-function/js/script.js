

// 1
setTimeout(function () {
    alert('CIAO');
}, 3000)

// 2
function salutaUtente() {
    alert('CIAO');
}

setTimeout(salutaUtente, 3000)



const interval = setInterval(function () {
    const element = document.getElementById('output');
    element.append('|');
}, 2000)


const button = document.getElementById('stop'); 

button.addEventListener('click', function () {
    clearInterval(interval);
});

setTimeout(function () {
    clearInterval(interval);
}, 10000)


console.log('CIAONE');