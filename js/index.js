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
var map = L.map('map').setView([51.591555, 2.250720], 7);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
}).addTo(map)

var marker = L.marker([51.2085, 3.2251]).addTo(map); //Brugge
var marker = L.marker([51.5072, 0.1276]).addTo(map); //London 
var marker = L.marker([50.8229, 0.1363]).addTo(map); //Brighton 
var marker = L.marker([51.9244, 4.4777]).addTo(map); //Rotterdam 

//feedback-form starts here 
const allStars = document.querySelectorAll(".star"); 
const footerFormBtn = document.querySelector(".btn-submit-feedback"); 
const footerFormName = document.querySelector(".feedback-name"); 
const footerFormMessage = document.querySelector(".feedback-message"); 
let currentStarLevel = 0; 

const modalBtn = document.querySelector(".footer__modal-btn"); 
const modalBox = document.querySelector(".footer__modal"); 

allStars.forEach((star, i) => {
    star.addEventListener ("click", function(){
      currentStarLevel = i+1; 

     allStars.forEach((star,j) =>{
      if(currentStarLevel >= j+1){
        star.innerHTML= "&#9733"; 
      } else {
        star.innerHTML="&#9734";
      }
     })
    })
  })

  footerFormBtn.addEventListener("click", function(event){
    event.preventDefault();
    let formInfo = {
      name: footerFormName.value.trim(), 
      star: currentStarLevel,
      message: footerFormMessage.value.trim()
    }
    console.log(formInfo); 
    modalBox.style.display="flex";
    footerFormName.value = ''; 
    allStars.forEach((star) => {
      star.innerHTML = "&#9734";
     });

    currentStarLevel = 0;
    footerFormMessage.value = ''; 

  })

  modalBtn.addEventListener("click", function(){
    modalBox.style.display = "none"; 
  })











