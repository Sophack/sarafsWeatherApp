//function for getting the current date 


// document.getElementById("date").innerHTML = myDate.toLocaleDateString();
//Getting and displaying the text for the upcoming five days of the week
var now = new Date();
const { name } = data;
var daysOfYear = [];
for (var d = new Date(2012, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
    daysOfYear.push(new Date(d));
}

    document.getElementById("img").src = "http://openweathermap.org/img/w/"+
data.list[0].weather[0].icon
+".png";


function getInfo () {

    //variabls for user input & city name 

    var newName = document.getElementById("cityInput"); //passing the ID for the input box
    var cityName = document.getElementById("cityName"); //target ID for the city input box 

    //watever the user enters into the field will be used & displayed 

    cityName.innerHTML = "" + newName.value + ""  ;

    //fetching the 5 day forecast data by adding the user input for city in metric 
    //passing the API link with API key retrieved from open weather map site  
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&units=metric&appid=5d4f571990203e94a636bb9b71ef6ae5')
   //promises
    .then(response => response.json())
    .then(data => {
            const { name } = data;
            const { icon, description } = data.weather[1];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src =
              "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp + "°C";
            document.querySelector(".humidity").innerText =
              "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText =
              "Wind speed: " + speed + " km/h";
            document.querySelector(".weather").classList.remove("loading");
            document.body.style.backgroundImage =
              "url('https://source.unsplash.com/1600x900/?" + name + "')";
    })};







