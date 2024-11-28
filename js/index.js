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









