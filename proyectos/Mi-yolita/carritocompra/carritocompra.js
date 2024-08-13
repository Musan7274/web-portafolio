document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cart-container');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartButton = document.querySelector('.buttons .button:nth-child(2)');
    const continueShoppingButton = document.querySelector('.buttons .button:nth-child(3)');
    const payButton = document.querySelector('.buttons .button:nth-child(1)');

    // Simulación de productos en el carrito
    const cartItems = [
        { id: 2, product: 'Transportadora de Viaje', quantity: 1, price: 45.00 },
        { id: 7, product: 'Pelota de Goma', quantity: 2, price: 10.00 }
    ];

    // Renderizar los productos del carrito
    function renderCartItems() {
        cartContainer.innerHTML = ''; // Limpiar el contenedor del carrito
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <p>${item.product} - Cantidad: ${item.quantity} - Precio: S/${item.price.toFixed(2)}</p>
            `;
            cartContainer.appendChild(itemElement);
        });

        // Calcular el total
        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        totalPriceElement.textContent = `S/${totalPrice.toFixed(2)}`;
    }

    renderCartItems();

    // Limpiar carrito
    clearCartButton.addEventListener('click', function() {
        cartItems.length = 0; // Vaciar el array del carrito
        renderCartItems();
    });

    // Continuar comprando
    continueShoppingButton.addEventListener('click', function() {
        window.location.href = '/index.html'; // Redireccionar a la página principal
    });

    // Pagar y generar comprobante en PDF
    payButton.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        const today = new Date();
        const formattedDate = today.toLocaleDateString();
        
        // Configuración del estilo
        doc.setFontSize(16);
        doc.setFont("Helvetica", "bold");
        doc.text('Comprobante de Pago', 10, 10);

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Tienda: Mi Yolita`, 10, 20);
        doc.text(`Fecha de Compra: ${formattedDate}`, 10, 30);
        doc.text(`Número de Compra: ${Math.floor(Math.random() * 1000000)}`, 10, 40);

        // Insertar productos
        doc.setFontSize(14);
        doc.text('Detalle de Compra:', 10, 50);
        doc.setFontSize(12);
        
        cartItems.forEach((item, index) => {
            doc.text(`${index + 1}. ${item.product} - Cantidad: ${item.quantity} - Precio: S/${item.price.toFixed(2)}`, 10, 60 + (index * 10));
        });

        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        doc.text(`Total: S/${totalPrice.toFixed(2)}`, 10, 60 + (cartItems.length * 10) + 10);

        // Insertar IGV (18%)
        const igv = totalPrice * 0.18;
        doc.text(`IGV (18%): S/${igv.toFixed(2)}`, 10, 60 + (cartItems.length * 10) + 20);

        // Insertar código QR (Necesitas una librería para generar QR, aquí solo es un marcador de posición)
        doc.text('Código QR:', 10, 80 + (cartItems.length * 10) + 30);
        doc.text('[Código QR Aquí]', 10, 90 + (cartItems.length * 10) + 30); // Aquí deberías generar un QR real usando una librería como `qrcode.js`

        // Insertar políticas
        doc.text('Políticas de la Tienda:', 10, 110 + (cartItems.length * 10) + 40);
        doc.text('1. Todos los productos pueden ser devueltos dentro de los 30 días.', 10, 120 + (cartItems.length * 10) + 40);
        doc.text('2. Los productos deben estar en su empaque original.', 10, 130 + (cartItems.length * 10) + 40);

        doc.save('comprobante.pdf');
    });
});
