const posts = [
    {
        "id": 1,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
          "name": "Phil Mangione",
          "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
          "name": "Sofia Perlari",
          "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
          "name": "Chiara Passaro",
          "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
          "name": "Luca Formicola",
          "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
          "name": "Alessandro Sainato",
          "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }              
]; 

/*
Creiamo una funzione che accetta l'oggetto post come argomento e ritorna
il template formattato con i dati giusti.
*/
function createTemplateHtml(post) {

    return `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${post.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${post.content}</div>
    <div class="post__image">
        <img src="${post.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div> 
    </div>            
    </div>
    `;

}

/*
 Render dell'html
*/
const containerHtml = document.getElementById('container');
for (let i = 0; i < posts.length; i++) {
    const currentPost = posts[i];
    containerHtml.innerHTML += createTemplateHtml(currentPost);
}

// 3^ milestone: 
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone 
// e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.


const likeButtons = document.querySelectorAll('.js-like-button')  // ritorna un array di button
// assunto: per ogni post c'è un solo pulsante like.
// assunto (2): per ogni post c'è un solo counter.
const likeCounters = document.querySelectorAll('.js-likes-counter');

//for (let i = 0; i < likeButtons.length; i++) {
likeButtons.forEach(function (button, i) {

    button.addEventListener('click', function (event) {

        // una volta scatenato l'evento, quello di default non viene preso in considerazione
        // => non scrolla verso l'alto (perché è un href!)
        event.preventDefault();
        
        // salvo in una variabile l'html del counter
        const currentCounterHtml = likeCounters[i];
        
        this.classList.add('like-button--liked');

        // salvo in un'altra variabile il parseInt dell'innerHtml del counter 
        // (così da ottenere il numero intero di likes)
        const currentCounterInt = parseInt(currentCounterHtml.innerHTML);
        console.log(currentCounterInt);

        // Ri-salvo (sovrascrivo) l'innerHTML con il contatore attuale + 1;
        currentCounterHtml.innerHTML = currentCounterInt + 1;
        
        // salviamo il nuovo valore all'interno dell'oggetto
        posts[i].likes++;

    },
        {
            once: true
        }
    );

});