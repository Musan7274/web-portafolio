document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores de los campos de formulario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificar credenciales
    if (email === "admin@gmail.com" && password === "admin") {
        // Redirigir a admin.html
        window.location.href = "../admin/admin.html";

    } else if (email === "alexis@gmail.com" && password === "alexis") {
        // Redirigir a index.html
        window.location.href = "../index.html";

    } else if (email === "vendedor@gmail.com" && password === "vendedor") {
        // Redirigir a index.html
        window.location.href = "../vendedor/vendedor.html";

    } else if (email === "marketing@gmail.com" && password === "marke") {
        // Redirigir a index.html
        window.location.href = "../marketing/marketing.html";
    
    } else {
        // Mostrar mensaje de error
        document.getElementById("error-message").style.display = "block";
    }
});
