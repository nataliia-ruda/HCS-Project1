console.clear();
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const description = document.getElementById("description");
const icon = document.getElementById("icon");
const country = document.getElementById("country");
const feelsLike = document.getElementById("feels-like");
const date = document.getElementById("date");

async function currentWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=d64679413247de0d354479bf57489481&units=metric
`
  );
  const data = await response.json();
  console.log(data);

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  icon.appendChild(img);

  city.innerText = data.name;
  country.innerText = data.sys.country;
  description.innerText = data.weather[0].description.trim();
  temperature.innerText = `${Math.round(data.main.temp)} °C`;
  feelsLike.innerText = `${Math.round(data.main.feels_like)} °C`;

  const timezoneOffset = data.timezone;
  const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
  const localTime = new Date(utcTime + timezoneOffset * 1000);
  date.innerText = localTime.toLocaleString();
}
currentWeather();

//slide-show

const btnPrevious = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

btnPrevious.addEventListener("click", (e) => {
  plusSlides(-1);
});

btnNext.addEventListener("click", (e) => {
  plusSlides(1);
});

dots.forEach((el, i) => {
  el.addEventListener("click", () => showSlides((slideIndex = i + 1)));
});

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
