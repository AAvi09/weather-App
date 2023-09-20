const apiKey = "7e2ed134f5964517d524c80414b6e366";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      console.log("hey");
      weatherIcon.src = "weather-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      console.log("hey");
      weatherIcon.src = "weather-img/images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      console.log("hey");
      weatherIcon.src = "weather-img/images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      console.log("hey");
      weatherIcon.src = "weather-img/images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      console.log("hey");
      weatherIcon.src = "weather-img/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// checkWeather();
