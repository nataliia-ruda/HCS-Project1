const conceptItems = document.querySelectorAll(".concept__item");

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;

  function showNextImage() {
    conceptItems[currentIndex].classList.remove("active");
    
    currentIndex = (currentIndex + 1) % conceptItems.length;

    conceptItems[currentIndex].classList.add("active");
  }

  conceptItems[currentIndex].classList.add("active");
  setInterval(showNextImage, 4000);
}); 

// map starts here 
var map = L.map('map').setView([51.5719, 4.7683], 7);
// Style URL format in XYZ PNG format; see our documentation for more options
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
}).addTo(map)

var marker = L.marker([51.2085, 3.2251]).addTo(map); //Brugge
var marker = L.marker([51.5072, 0.1276]).addTo(map); //London 
var marker = L.marker([50.8229, 0.1363]).addTo(map); //Brighton 
var marker = L.marker([51.9244, 4.4777]).addTo(map); //Rotterdam 









