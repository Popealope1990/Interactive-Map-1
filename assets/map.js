// console.log('Hello from Map.js')

// Initialize map here
var map = L.map('map').fitWorld();

// Map tile layer

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// setting map to your location

map.locate({setView: true, maxZoom: 16});

