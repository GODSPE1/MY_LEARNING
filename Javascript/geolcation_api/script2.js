console.log('Leaflet script loaded');
const map = L.map('map').setView([0, 0], 2);
// const map = L.map('map').setView([0, 0], 2);
L.control.zoom(false).remove();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const marker  = L.marker([0, 0]).addTo(map);
navigator.geolocation.getCurrentPosition( (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    marker.setLatLng([lat, lng]).update();
    map.setView([lat, lng], 13);
    marker.bindPopup('<strong>Hello world</strong> <br> <i>This is my location</i>').openPopup();
}, (error) => {
    console.error('Error obtaining location', error);
});