//below selects the user input from the document's input type and lets us search by city name

let searchCity = document.querySelector("#cityInput");

let apiKey = "80de82d1907b221f875a400ad16653d2";

let cityName = document.querySelector("#cityName")

//we can call the function below to execute user search input

function fetchWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?cnt=5&q=" +
      city +
      "&units=metric&appid=" +
      apiKey
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network problems. Unable to get weather");
      }
    })
    .then((data) => displayWeather(data));
}

//function to pass data and display the weather
function displayWeather(data) {
  //setting values for each
  const date = new Date();
  const name = data.city.name;
  const temp = data.list[0].main.temp;
  const speed = data.list[0].wind.speed;
  const humidity = data.list[0].main.humidity;
  const icon = data.list[0].weather[0].icon;

  //setting up where to retreive the information from the HTML
  cityName.innerText = name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + "@2x.png";

  document.querySelector(".temp").innerText = "Temp: " + temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";

  document.querySelector("#date").innerText = date.toDateString();

  //log all the 5 variables into console
  console.log(date, name, icon, temp, humidity, speed);
}

//function to display the info for the city

function handleSearch() {
  //passing user input with fetchWeather funciton
  fetchWeather(searchCity.value);
  //calling displayWeather function by passing it with fetchWeather function
  displayWeather(fetchWeather);
}

//button user will click to initiate the search
document.querySelector(".srchButton").addEventListener("click", handleSearch);

//passing the city with the fetchWeather function so by default the homepage will show Atlanta's weather
fetchWeather("Atlanta");

function weatherForecast() {
  //after changing the value of the user input, get object from local storage


    const weatherDetails = localStorage.getItem("searchCity");
    weather = JSON.parse(weatherDetails)

    const weatherDays = [date, temp, speed];
    const date = new Date();
    const temp = data.list[0].main.temp;
    const speed = data.list[0].wind.speed;
    const humidity = data.list[0].main.humidity;
    const icon = data.list[0].weather[0].icon;
  };

  //for loop will be executed until i is at 5 with increment of 1
  for (let i = 0; i < 5; i++) {
    document.querySelector("#date").innerText;
    console.log(date[i]);
  }

  // console.log(weatherForecast);

  //storing user input
  localStorage.setItem(searchCity, "value");

  //retreiving previous user input
  localStorage.getItem(searchCity, "value");

