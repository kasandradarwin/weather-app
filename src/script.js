//Update Current time

let apiKey = "40603cc0b95a9db4d38003ce742650b3";
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours > 12) {
  hours = hours - 12;
}

document.querySelector(
  ".todaysDate"
).innerHTML = `Last Updated: ${day} ${hours}:${minutes}`;

function displayWeather(response) {
  console.log(response);
  document.querySelector(
    "h1"
  ).innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#current-low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#current-high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#feels").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
}
function changeCityName(event) {
  event.preventDefault();
  let newCityName = document.querySelector("#search-input").value;
  let h1 = document.querySelector("h1");

  newCityName = newCityName.trim();
  newCityName = newCityName.toLowerCase();
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCityName}&appid=${apiKey}&units=${unit}`;

  h1.innerHTML = newCityName;

  axios.get(apiUrl).then(displayWeather);
}
/// current actual temp, save to variable and then change the converters to refer to that instead.

// F converter
function toFahr(event) {
  event.preventDefault();
  let toFahrenheit = document.querySelector("#current-temp");
  toFahrenheit.innerHTML = `${Math.round(defaultValue * 1.8 + 32)}`;
}

let changeToFahr = document.querySelector("#fahrenheit");
changeToFahr.addEventListener("click", toFahr);

// C converter
function toCels(event) {
  event.preventDefault();
  let toCelsius = document.querySelector("#current-temp");
  toCelsius.innerHTML = defaultValue;
}

let changeToCels = document.querySelector("#celsius");
changeToCels.addEventListener("click", toCels);

let form = document.querySelector("form");
form.addEventListener("submit", changeCityName);
