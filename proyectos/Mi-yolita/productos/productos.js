// Función para añadir productos al carrito
function addToCart(product) {
    alert(product + ' ha sido añadido al carrito.');
    // Aquí puedes agregar la funcionalidad para actualizar la cantidad del carrito.
    // Por ejemplo, podrías incrementar un contador de artículos en el carrito.
}

// Función para animar el banner al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const bannerTitle = document.querySelector('.banner h1');
    const bannerSubtitle = document.querySelector('.banner p');

    // Añadir clases para las animaciones
    setTimeout(() => {
        bannerTitle.style.opacity = 1;
        bannerTitle.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        bannerSubtitle.style.opacity = 1;
        bannerSubtitle.style.transform = 'translateY(0)';
    }, 1000);
});
