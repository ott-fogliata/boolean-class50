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
        color: 'black',
        modalShow: false,
        age: 0,
        students: [
            'Mino',
            'Pino',
            'Gino'
        ],
        currentIndex: 0,
        freddure: [
            {
                titolo: 'Elettronica',
                frase: 'Cosa fa un uccellino di un milligrammo su un ramo? Micro-cip! Micro-cip! Micro-cip!'
            },
            {
                titolo: 'Il mare',
                frase: 'Cosa fanno due squali in una gara? Vengono squalificati'
            },
            {
                titolo: 'Fai da te!',
                frase: 'Che vitaccia, ci vorrebbe un cacciavite più grosso.'
            },
            {
                titolo: 'Colazione',
                frase: 'Un uomo entra in un caffè...Splash'
            },
            {
                titolo: 'Dieta',
                frase: 'Ma perché se io mi nutro e tu ti nutri, Frank Sinatra?'
            },
            {
                titolo: 'Psicologo',
                frase: 'Dottore, soffro di personalità multipla… vi prego, aiutateci!'
            },
            {
                titolo: 'Business',
                frase: 'Chiude una fabbrica di carta igienica: andava a rotoli.'
            }
        ]
    },
    beforeCreate: function () {
        console.log('beforeCreate()')
    },
    created: function () {
        console.log('created()')
    },
    beforeMount: function () {
        console.log('beforeMount()')
    },
    mounted: function () {
        console.log('mounted()')
    },
    beforeUpdate: function () {
        console.log('beforeUpdate()')
    },
    updated: function () {
        console.log('updated()')
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
        openModal: function () {
            // this.modalShow === false
            // if (!this.modalShow) { // qui è false
            //     this.modalShow = true;
            // } else {  // qui è true
            //     this.modalShow = false;
            // }
            
            // this.modalShow deve essere il contrario di sé stesso
            this.modalShow = !this.modalShow;
        },
        nextFreddura: function () {
            this.currentIndex++;
            // todo -> e se arrivo alla fine dell'array?
        },
        prevFreddura: function () {
            this.currentIndex--;
            // todo -> e se arrivo a 0?
        }
    }
})



