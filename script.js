//this selects the user input from the input type and lets us search by city name 
  
    let searchCity = document.querySelector("#cityInput");

    let apiKey =  "80de82d1907b221f875a400ad16653d2";
    
   //we can call the function below to execute user search input 

   function fetchWeather (city) {
    // const data = should be the api data 
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?cnt=5&q=" 
        + city
        +"&units=metric&appid="
        + apiKey 
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }else{
            throw new Error("Network problems. Unable to get weather"); 
          }})
            .then((data) => 
            console.log(data))
    } 
  
  //parsing: specific component inside of compiler 
  //compiler: translates inputs & outputs 
  //input (string) best way to handle it 


//assign data to be extracted from the API 

  //  let data = 
    //function to take in data and display weather
  function displayWeather (data) {
    //variables and where they will be extracted from
      const  date  = new Date();
      const  name  = data.city;
      const  currentWeather  = data.list.weather[0]; //first item in the list
      const  { temp, humidity } = data.list[2];
      const  speed  = data.wind;

  document.querySelector("#city").innerText = currentWeather;     
 document.querySelector("#cityName").innerText = "Weather in " + name;
 document.querySelector(".icon").src =
   "https://openweathermap.org/img/wn/" + icon + "@2x.png";
 document.querySelector(".temp").innerText = temp + "°C";
 document.querySelector(".humidity").innerText =
   "Humidity: " + humidity + "%";
 document.querySelector(".wind").innerText =
   "Wind speed: " + speed + " km/h";

 document.querySelector("#date").innerText = date;

 
      // //should log all the 5 variables into console 
      // console.log(date,name,icon,temp,humidity,speed);

  }


//function to search by city
  
   
     //
  function handleSearch(){ 
    fetchWeather(searchCity.value);
    displayWeather(fetchWeather);
  }

   document.querySelector(".srchButton")
   .addEventListener("click", handleSearch);


fetchWeather("Atlanta");

// document.querySelector(".search-bar").addEventListener("keyup", function (event) {
// }
  
     //currently console.logs the user input 
     //create function to have it show up on app
     //create function to display under forecast 