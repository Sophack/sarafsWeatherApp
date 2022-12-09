
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


            //getting the temp for each day using for loops
            for(i = 0; i<5; i++){
                document.getElementById("day" + (i+1) + "Temp:").innerHTML = 
                "Temp: " + Number(data.list[i].main.temp).toFixed(2)+ "°C";
                //Number(1.3450001).toFixed(2); // 1.35
            }
        

   //getting the wind for each day using for loops
                    for(i = 0; i<5; i++){
                    document.getElementById("day" + (i+1) + "Wind:").innerHTML = 
                    "Wind: " + Number(data.list[i].wind.speed).toFixed(2)+ "MPH";
                        
                    }

                    //getting the humidity for each day using for loops

                    for(i = 0; i<5; i++){

                        document.getElementById("day" + (i+1) + "Humidity").innerHTML = 

                        "Humidity: " + Number(data.list[i].main.humidity).toFixed(0)+ "%";

                      //getting the icons for the specific days  
                    for(i=0; i<5; i++){
                        document.getElementById("img" +(i+1)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
                    }
   }})

//throw statement to target user error
    throw(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}


//function for getting the current date 
var myDate = new Date();

document.getElementById("date").innerHTML = myDate.toLocaleDateString();
//Getting and displaying the text for the upcoming five days of the week
var weekday = [, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + myDate.getDay() > 6){
        return day + myDate.getDay() - 7;
    }
    else{
        return day + myDate.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

    document.getElementById("img1").src = "http://openweathermap.org/img/w/"+
data.list[0].weather[0].icon
+".png";