document.getElementById('recetaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const recetaImage = document.getElementById('recetaImage').files[0];
    if (recetaImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('recetaImg').src = e.target.result;
            document.getElementById('recetaPreview').style.display = 'block';
        };
        reader.readAsDataURL(recetaImage);
    }
});
