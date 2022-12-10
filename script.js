let weather = {
    apiKey: "5d4f571990203e94a636bb9b71ef6ae5",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?cnt=5&q=" 
        + city
        +"&units=metric&appid="
        + this.apiKey 
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
    //variables and where they will be extracted from
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name,icon,temp,humidity,speed,description);
    }
};



      //       document.querySelector("#cityName").innerText = "Weather in " + name;
//       document.querySelector(".icon").src =
//         "https://openweathermap.org/img/wn/" + icon + ".png";
//       document.querySelector(".temp").innerText = temp + "°C";
//       document.querySelector(".humidity").innerText =
//         "Humidity: " + humidity + "%";
//       document.querySelector(".wind").innerText =
//         "Wind speed: " + speed + " km/h";
//       document.querySelector(".weather").classList.remove("loading");
//     },
//     search: function () {
//       this.fetchWeather(document.querySelector(".search-bar").value);
//     },
//   };
  
//   document.querySelector(".button").addEventListener("click", function () {
//     weather.search();
//   });
  
//   document
//     .querySelector(".search-bar")
//     .addEventListener("keyup", function (event) {
//       if (event.key == "Enter") {
//         weather.search();
//       }
//     });
  
//   weather.fetchWeather("Denver");