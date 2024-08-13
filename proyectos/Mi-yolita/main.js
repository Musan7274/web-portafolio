document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar cualquier funcionalidad de JavaScript que necesites
    console.log('Página cargada');
});


const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', () => {
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
};

setInterval(nextSlide, 3000); // Cambia de banner cada 3 segundos
