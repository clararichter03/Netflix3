document.addEventListener('DOMContentLoaded', function(){
    var continuar = document.getElementById('continuar');
    var categorias = document.getElementById('categorias');
    var contacto = document.getElementById('contacto');
    var info = document.getElementById('info');
    var perfiles = document.getElementById('perfiles');
    var inicio = document.getElementById('inicio');

    inicio.addEventListener('click', function(){
        window.location.href = "./index.html";
    });

    categorias.addEventListener('click', function(){
        window.location.href = "./categorias.html";
    });

    contacto.addEventListener('click', function(){
        window.location.href = "./contacto.html";
    });

    info.addEventListener('click', function(){
        window.location.href = "./info.html";
    });

    perfiles.addEventListener('click', function(){
        window.location.href = "./perfiles.html";
    });
});

/*document.addEventListener('DOMContentLoaded', ()=>{
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(function (carousel){
        const prevButton = carousel.querySelector('.prev-button');
        const nextButton = carousel.querySelector('.next-button');
        const carouselWrapper = carousel.querySelector('.carousel-wrapper');

        let currentIndex = 0;
        const images = carouselWrapper.querySelectorAll('.carousel-image');
        const imageWidth = images[0].clientWidth;
        const numImages = images.length;

        prevButton.addEventListener('click', ()=>{
            currentIndex = (currentIndex -1 + numImages) % numImages;
            updateCarousel();
        });

        nextButton.addEventListener('click', ()=>{
            currentIndex = (currentIndex + 1) % numImages;
            updateCarousel();
        });

        function updateCarousel(){
            const translateX = -currentIndex * imageWidth;
            carouselWrapper.style.transform = `translateX(${translateX}px)`;
        }
    });
});*/