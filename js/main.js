const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for (const key in images) {
    console.log(images[key]);       
}


// INIZIALIZZAZIONE DELLA PAGINA

// globali
let currentSlide = 1;

// cambiamo il testo della prima slide
document.querySelector("#slideText h2").innerText = images[0].title;
document.querySelector("#slideText h3").innerText = images[0].text;

// costruiamo la prima slide
const primaSlide = `<img id="activeSlide" class="img-fluid" src="${images[0].image}" alt="${images[0].title}"></img>`;
document.getElementById("activeImgWrapper").innerHTML = primaSlide;

cambiaSlide(1);

// costruiamo le thumbnails
for (let i = 0; i < images.length; i++) {
    const element = images[i];

    const currentThumb = `<img class="img-fluid" src="${images[i].image}" alt="${images[i].title}"></img>`;
    document.getElementById("thumbsWrapper").innerHTML += currentThumb;
}


// event handler button previous
document.getElementById("prevSlide").addEventListener("click", function() {
    if(currentSlide > 1) {
        cambiaSlide(currentSlide-1);
    } else {
        cambiaSlide (images.length)
    }
});

// event handler button next
document.getElementById("nextSlide").addEventListener("click", function() {
    if(currentSlide < images.length) {
        cambiaSlide(currentSlide+1);
    } else {
        cambiaSlide(1);
    }
});


// FUNZIONI

function cambiaSlide(toSlide) {

    if(toSlide > 0 && toSlide <= images.length) {

        currentSlide = toSlide;
        const currentObj = images[toSlide-1];
        document.getElementById("activeSlide").src = images[currentSlide-1].image;
        document.querySelector("#slideText h2").innerText = currentObj.title;
        document.querySelector("#slideText h3").innerText = currentObj.text;
        console.log("Slide cambiata: ", currentSlide)
        
    } else {
        console.error("Questa slide non esiste")
    }
};
