// Questa la lista degli invitati al party di Gatsby.
// const invitati = ['Mino', 'Gino', 'Lino', 'Pino'];
// Chiedere all’utente il suo nome, se l’utente è nella lista scrivere “Benvenuto!”
// Altrimenti scrivere “Non puoi entrare!”

// 1. definisco array invitati
// 1b definisco variabile false
const invitati = ['Mino', 'Gino', 'Lino', 'Pino'];
let trovato = false; // questa solitamente si definisce variabile flag

// 2. chiedo all'utente il suo nome
let userName = prompt('Dimmi il tuo nome');

// 3. con un for ciclo all'interno dell'array e verifico se il nome inserito dall'utente
// è uguale a quello che in quel momento sto leggendo all'interno del ciclo
// => (if) se il nome dell'utente è uguale a quello dell'invitato trasformo una variabile in TRUE
// altrimenti la lascio in FALSE (non c'è bisogno di un vero else)
for (let i = 0; i < invitati.length; i++) {
    if (userName.toLowerCase === invitati[i].toLowerCase) {
        trovato = true;
        // break; // <= opzionale, esce dal ciclo
    }
}

// 4. uscito dal ciclo controllo se questa variabile sia mai diventata true, se sì vuol dire che 
// l'utente può entrare.

if (trovato) {
    console.log('Benvenuto!')
} else {
    console.log('Non puoi entrare!')
}