const loginsec = document.querySelector('.login-section');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

// Agregado código para verificar credenciales
function verificarCredenciales() {
    // Obten los valores del correo electrónico y la contraseña
    var email = document.querySelector('.login-section .login input[type="email"]').value;
    var password = document.querySelector('.login-section .login input[type="password"]').value;

    // Verifica si las credenciales son correctas (puedes cambiar esto según tu lógica)
    if (email === 'alextello@gmail.com' && password === '123') {
        // Redirige a la página de inicio
        window.location.href = '../index.html';
        // Evita que el formulario se envíe realmente
        return false;
    } else {
        // Puedes agregar un mensaje de error o realizar otras acciones si las credenciales son incorrectas
        alert('Credenciales incorrectas. Intenta de nuevo.');
        // Evita que el formulario se envíe realmente
        return false;
    }
}

// Resto de tu código existente
registerlink.addEventListener('click', () => {
    loginsec.classList.add('active');
});

loginlink.addEventListener('click', () => {
    loginsec.classList.remove('active');
});
