//challenge 1
let timeNow = new Date();
console.log(timeNow);
let currentHour = timeNow.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinutes = timeNow.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[timeNow.getDay()];

//Challenge 2
let currentDate = document.querySelector("#main-date");
currentDate.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;

function showData(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#feel").innerHTML = Math.round(
    response.data.main.feels_like
  );
}

function citySearch(cityInput) {
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showData);
}

function getCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input").value;
  citySearch(cityInput);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", getCity);

//Challenge 3
//Celsius
function changeToF(event) {
  event.preventDefault();
  let changeUnit = document.querySelector("#temperature");
  changeUnit.innerHTML = `33`;
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", changeToF);

//Farhenheit
function changeToC(event) {
  event.preventDefault();
  let changeUnit = document.querySelector("#temperature");
  changeUnit.innerHTML = `91`;
}

let farhenLink = document.querySelector("#fahrenheit");
farhenLink.addEventListener("click", changeToC);

function showLocation(position) {
  console.log(position);
  let apiKey = "ad793a6d772939c31783de5822791acf";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showData);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}
let myLocation = document.querySelector("#current-location");
myLocation.addEventListener("click", getCurrentLocation);
citySearch("London");
