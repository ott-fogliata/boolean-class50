
// Tramite una chiamata ad una API, stampiamo a schermo un numero casuale.

new Vue({
    el: "#app",
    data: {
        number: 0,
        sentences: []
    },
    methods: {
        newNumber: function () {
            // result.data è l'oggetto js (già trasformato da json a oggetto)
            axios.get('https://flynn.boolean.careers/exercises/api/random/int').then((result) => {
                console.log(result.data);
                // prendiamo la response e salviamola in number
                this.number = result.data.response
            })
        },
    },
    // quando l'applicazione è stata "montata" nel browser, fai una chiamata API
    mounted() {
        
        this.newNumber();


        for (let i = 0; i < 2; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence').then((result) => {
                this.sentences.push(result.data.response)
            })
        }

    }

})