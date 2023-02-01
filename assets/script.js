var APIKey = "5d745a3ade61e4675aff85b5370d16a9";
var city = "denver";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

const dt1 = document.getElementById("dt1");
const dt2 = document.getElementById("dt2");
const dt3 = document.getElementById("dt3");
const dt4 = document.getElementById("dt4");
const dt5 = document.getElementById("dt5");

const mainW = document.getElementById("mainW");
const mainH = document.getElementById("mainH");
const mainT = document.getElementById("mainT");
var mainI = document.getElementById("mainI");

var today = document.getElementById("today");
var daysToday= dayjs().format('MM/DD/YYYY');

var cityCap = city.charAt(0).toUpperCase() + city.slice(1);
today.textContent = cityCap + " (" + daysToday + ")";



const d = dayjs();
const nd1 = d.add(1, "day");
const nd2 = d.add(2, "day");
const nd3 = d.add(3, "day");
const nd4 = d.add(4, "day");
const nd5 = d.add(5, "day");
dt1.textContent = d.format("MM/" + nd1.$D + "/YYYY");
dt2.textContent = d.format("MM/" + nd2.$D + "/YYYY");
dt3.textContent = d.format("MM/" + nd3.$D + "/YYYY");
dt4.textContent = d.format("MM/" + nd4.$D + "/YYYY");
dt5.textContent = d.format("MM/" + nd5.$D + "/YYYY");
console.log(nd1);

function get(queryURL) {
    
    test.innerText = queryURL;
    fetch(queryURL)
    console.log(queryURL);
}


//weather----------- &units=imperial at very end of your url

/*
another type - - -

function getAPI(queryURL) {
    fetch(queryURL)
    .then(function (response) {
        console.log(response);
        HTMLElement.textContent = response.whatever;
        return response.json();
    })
}

query perameters
since=date per_page=100

const queryDate ="2020-06-01";
const perPage = "100"
layout same as top of page
*/
/* 
Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history


html:
-form input
-a bunch of divs containing city, date, temp, wind, humidity
    -one for today, five for next five days

css:
-header banner
-possible class color change depending on temp

-js:
-update emoji/image in each div depending on sun for that day

-local storage for search history

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
*/

fetch(queryURL + "&units=imperial")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        mainT.textContent = data.main.temp;
        mainW.textContent = data.wind.speed;
        mainH.textContent = data.main.humidity;

        var iconCode = data.weather[0].icon;
      var image = document.createElement("img");
      image.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCode + ".png");
      
      mainI.appendChild(image); 
    });

fetch(queryURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
       
    });
   

/*
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

-pull for day of + 5 days of info


WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

-get storage and run fetch function again
You will use `localStorage` to store any persistent datd. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).
*/



