//below selects the user input from the document's input type and lets us search by city name


let apiKey = "80de82d1907b221f875a400ad16653d2";

//container
let cityName;
let temp;
let speed;
let humidity;
let icon;

//we can call the function below to execute user search input

function fetchWeather(city) {
  //fetch current data instead of forecast
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
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
    .then((data) => {
      displayWeather(data);
    });
}

//function to pass data and display the weather
//to populate the information from the API call
function displayWeather(data) {
  console.log(data);
  //setting values for each
  const date = new Date();
  const name = data.name;
  const temp = data.main.temp;
  const speed = data.wind.speed;
  const humidity = data.main.humidity;
  const icon = data.weather[0].icon;

  //setting up where to retreive the information from the HTML
  document.querySelector("#cityName").innerText = name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  document.querySelector(".temp").innerText = "Temp: " + temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";

  document.querySelector("#date").innerText = date.toDateString();

  weatherForecast(name);
}


//function to display the info for the city
//when user clicks on the button, single data as well as 5 day data is presented 
//

function saveData(cityName){

  let localStorageData = JSON.parse(localStorage.getItem('searchHistory'));
  let dataCityObj = {
    "name":cityName

  }
  if(
    localStorageData === null
  ){
    localStorageData = [];
    localStorageData.push(dataCityObj)

  }else {
    localStorageData.push(dataCityObj)
  }
  localStorage.setItem('searchHistory', JSON.stringify(localStorageData))

}

function handleSearch() {
  
let searchCity = document.querySelector("#cityInput");

saveData(searchCity.value)
  //passing user input with fetchWeather funciton
  fetchWeather(searchCity.value);
  //calling displayWeather function by passing it with fetchWeather function
  displayWeather(fetchWeather);

}

//button user will click to initiate the search
document.querySelector(".srchButton").addEventListener("click", handleSearch);

//passing the city with the fetchWeather function so by default the homepage will show Atlanta's weather
fetchWeather("Atlanta");

function weatherForecast(cityName) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&units=metric&appid=" +
      apiKey
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

//give us all 40 elements we only need every 8th element
     let dataList = data.list;
     let index = 1; 
     for (let i = 0; i < dataList.length; i+=8) 
     {
      let tempDiv = document.getElementById(`day${index}temp`);
      tempDiv.innerHTML=`° ${dataList[i].main.temp}`;
      let windDiv = document.getElementById(`day${index}wind`);
      windDiv.innerHTML = `${dataList[i].wind.speed} MPH`;
      let humDiv = document.getElementById(`day${index}humidity`);
      humDiv.innerHTML = `${dataList[i].main.humidity} %`;
      index+=1
      
     }
    }) ;

  //fetch another API with forecasted data
  weatherDetails = localStorage.getItem("searchCity");
  weather = JSON.parse(weatherDetails);

  //   creating an object to store inside local storage

  // for loop will be executed until i is at 5 with increment of 1

  console.log(weatherForecast);
}

//   //storing user input
//   localStorage.setItem(searchCity, "value");

//   //retreiving previous user input
//   localStorage.getItem(searchCity, "value");
