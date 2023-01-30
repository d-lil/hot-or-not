var APIKey = "5d745a3ade61e4675aff85b5370d16a9";
var city = "denver";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var test = document.getElementById("#test");

function get() {
    
    test.innerText = queryURL;
    fetch(queryURL)
    console.log(queryURL);
}
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

fetch(queryURL)


/*
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

-pull for day of + 5 days of info


WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

-get storage and run fetch function again
You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).
*/



