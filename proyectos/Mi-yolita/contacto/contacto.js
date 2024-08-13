// script.js
function initMap() {
    var location = { lat: -12.025, lng: -77.035 }; // Coordenadas de Av. Túpac Amaru, Carabayllo 15321
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
