const bikes = [

    {
        nome: 'bici1',
        peso: 6
    },
    {
        nome: 'bici2',
        peso: 7
    },
    {
        nome: 'bici3',
        peso: 5
    }

]


/*
ciclo il mio array bikes e se il peso è minore di una variabile esterna
allora salvo il peso nella variabile esterna e l'oggetto attuale 
in una nuova variabile che chiamerò lightestBike
*/

let pesoLeggero = 100;
let lightestBike;

for (let i = 0; i < bikes.length; i++) {
    
    if (bikes[i].peso < pesoLeggero) {
        pesoLeggero = bikes[i].peso;
        lightestBike = bikes[i];
    }
}

const bikeOutput = document.querySelector('.bike');

const { nome, peso } = lightestBike;

bikeOutput.innerHTML = `
<h3>Nome: ${nome}</h3>
<span>Peso: ${peso}Kg</span>
`
