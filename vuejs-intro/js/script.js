// 1. un input, dove tutto ciò che scrive l'utente
// compare in uno span sottostante (senza click)

// 2. in un input l'utente scriverà un colore
// il box sottostante si colora del colore appena inserito

// 3. al click su di un pulsante compare un alert con
// quello che abbiamo scritto in message

new Vue({
    el: "#app",
    data: {
        message: '',
        color: 'black'
    },
    methods: {
        saluta: function () {
            // il this in vue.js è la 
            // "conoscenza" che ha vue.js dei
            // vari oggetti (data, methods...)
            // con il this accediamo direttamente 
            // alle proprietà di data.
            alert(this.message)
        },
    }
})



