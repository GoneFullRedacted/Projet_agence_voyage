// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([12.53094, 53.91000], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map);
  });

  document.querySelector('.flip-card').addEventListener('mouseenter', () => {
    setTimeout(() => {
      map.invalidateSize();
    }, 400); // attendre le flip
  });