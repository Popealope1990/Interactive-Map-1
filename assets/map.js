// console.log('Hello from Map.js')

// Initialize map here
var map = L.map('map').fitWorld();

// Map tile layer

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// adding marker for proof of location found

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are here").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

// setting up location error response

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

// setting map to your location

map.locate({setView: true, maxZoom: 12});

