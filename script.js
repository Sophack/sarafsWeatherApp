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
            displayWeather(data) )
            
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
      const  name  = data.city.name;
      const  temp = data.list[0].main.temp;
      const  speed  = data.list[0].wind.speed;
      const humidity = data.list[0].main.humidity;
      const icon = data.list[0].weather[0].icon;
 
 document.querySelector("#cityName").innerText = name;
 document.querySelector(".icon").src =
   "https://openweathermap.org/img/wn/" + icon + "@2x.png";
 document.querySelector(".temp").innerText = "Temp: " + temp + "°C";
 document.querySelector(".humidity").innerText =
   "Humidity: " + humidity + "%";
 document.querySelector(".wind").innerText =
   "Wind speed: " + speed + " km/h";

 document.querySelector("#date").innerText = (date.toDateString());

 
      //should log all the 5 variables into console 
      console.log(date,name,icon,temp,humidity,speed);

      

  }


   
     //
  function handleSearch(){ 
    fetchWeather(searchCity.value);
    displayWeather(fetchWeather);

    
  }
  localStorage.setItem(searchCity, "value")

   document.querySelector(".srchButton")
   .addEventListener("click", handleSearch);


fetchWeather("Atlanta");




// document.querySelector(".search-bar").addEventListener("keyup", function (event) {
// }
  
     //currently console.logs the user input 
     //create function to have it show up on app
     //create function to display under forecast 
     document.querySelector(".icon").src =
     "https://openweathermap.org/img/wn/" + icon + "@2x.png";

function weatherForecast (){
  const  weatherDays= [date,temp,speed]
  const  date  = new Date();
  const  temp = data.list[0].main.temp;
  const  speed  = data.list[0].wind.speed;
  const humidity = data.list[0].main.humidity;
  const icon = data.list[0].weather[0].icon;

    for(i=0;i<5;i++){
      document.querySelector(".date").innerText = date + temp + speed + icon + humidity};
    
  
console.log(weatherForecast)};