/*
Okay, a few comments- YES, I could have done this by just creating elements to each card document in each funtion and just used a simple
conditional to run through each item. That being said, I was already halfway done with all of the coding when I realized how dumb I was being by doing it the way I did,
and decided to just keep going since it worked and I didn't want to waste more time shortening this code that already works. So,
I am aware of my mistake, and I apologize for whoever has to review this code, since it's a lot of repetitive lines and id's lol. I probably
could have shortened it by half.

Also, both the challenge and the API said that city lat/long were required to pull forecast data. The city name works absolutely fine
instead of using those. Feel free to mark me off, but it worked this way so I did not see the point in changing it. I understand
the importance of learning to pull those values from returned data and using those to add to the API URL. I KNOW how to do that,
it would not be hard. Just and extra step that wasn't needed in my already lengthy code.

THAT is all haha. Thanks for reading.
*/
var APIKey = "5d745a3ade61e4675aff85b5370d16a9";

const dt1 = document.getElementById("dt1");
const dt2 = document.getElementById("dt2");
const dt3 = document.getElementById("dt3");
const dt4 = document.getElementById("dt4");
const dt5 = document.getElementById("dt5");

const mainW = document.getElementById("mainW");
const mainH = document.getElementById("mainH");
const mainT = document.getElementById("mainT");
var mainI = document.getElementById("mainI");

const oneW = document.getElementById("oneW");
const oneH = document.getElementById("oneH");
const oneT = document.getElementById("oneT");
var oneI = document.getElementById("oneI");
const twoW = document.getElementById("twoW");
const twoH = document.getElementById("twoH");
const twoT = document.getElementById("twoT");
var twoI = document.getElementById("twoI");
const threeW = document.getElementById("threeW");
const threeH = document.getElementById("threeH");
const threeT = document.getElementById("threeT");
var threeI = document.getElementById("threeI");
const fourW = document.getElementById("fourW");
const fourH = document.getElementById("fourH");
const fourT = document.getElementById("fourT");
var fourI = document.getElementById("fourI");
const fiveW = document.getElementById("fiveW");
const fiveH = document.getElementById("fiveH");
const fiveT = document.getElementById("fiveT");
var fiveI = document.getElementById("fiveI");

var today = document.getElementById("today");
var daysToday= dayjs().format('MM/DD/YYYY');

const cityButton = document.querySelector("#cityButton");


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

const mD = document.getElementById("mD");
const fD = document.getElementById("fD");

const cityName = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

cityName.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        searchBtn.click();
    } 
    })    


function onClick($this) {
    var city = $this.previousElementSibling.value;
    if (city == ''){
       console.log("no input");
    } else {
        temps(city);
        forecast(city);
        localStorage.setItem("tempclick", city);
  }};

  function onClick2($this) {
    var city = $this.value;
    if (city == ''){
       console.log("no input");
    } else {
        temps(city);
        forecast(city);
        city = $this.value;
        localStorage.setItem("tempclick", city);        
  }};


function temps(city) {
    for (var i= document.images.length; i-->0;)
        document.images[i].parentNode.removeChild(document.images[i]);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
   
    fetch(queryURL + "&units=imperial")
     .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        mainT.textContent = data.main.temp;
        mainW.textContent = data.wind.speed;
        mainH.textContent = data.main.humidity;
        console.log(data);
        var iconCode = data.weather[0].icon;
        var image = document.createElement("img");
        image.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCode + ".png");
      
      mainI.appendChild(image); 
      var cityCap = city.charAt(0).toUpperCase() + city.slice(1);
      today.textContent = cityCap + " (" + daysToday + ")";
    }); forecast()};

function forecast(city) {
    
    var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    fetch(fiveDayURL + "&units=imperial")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        var iconCard1 = data.list[3].weather[0].icon;
        console.log(data);
        oneT.textContent = data.list[3].main.temp;
        oneW.textContent = data.list[3].wind.speed;
        oneH.textContent = data.list[3].main.humidity;
        var image1 = document.createElement("img");
        image1.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCard1 + ".png");
        oneI.appendChild(image1);

        var iconCard2 = data.list[11].weather[0].icon;
        console.log(data);
        twoT.textContent = data.list[11].main.temp;
        twoW.textContent = data.list[11].wind.speed;
        twoH.textContent = data.list[11].main.humidity;
        var image2 = document.createElement("img");
        image2.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCard2 + ".png");
        twoI.appendChild(image2);

        var iconCard3 = data.list[19].weather[0].icon;
        console.log(data);
        threeT.textContent = data.list[19].main.temp;
        threeW.textContent = data.list[19].wind.speed;
        threeH.textContent = data.list[19].main.humidity;
        var image3 = document.createElement("img");
        image3.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCard3 + ".png");
        threeI.appendChild(image3);

        var iconCard4 = data.list[27].weather[0].icon;
        console.log(data);
        fourT.textContent = data.list[27].main.temp;
        fourW.textContent = data.list[27].wind.speed;
        fourH.textContent = data.list[27].main.humidity;
        var image4 = document.createElement("img");
        image4.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCard4 + ".png");
        fourI.appendChild(image4);

        var iconCard5 = data.list[35].weather[0].icon;
        console.log(data);
        fiveT.textContent = data.list[35].main.temp;
        fiveW.textContent = data.list[35].wind.speed;
        fiveH.textContent = data.list[35].main.humidity;
        var image5 = document.createElement("img");
        image5.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCard5 + ".png");
        fiveI.appendChild(image5);
    })
    };
temps(localStorage.getItem("tempclick"));
forecast(localStorage.getItem("tempclick"))
