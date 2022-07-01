

// fetch("https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=af246f5aace5e2f1bcf9bf16340163c7&units=metric")
fetch("https://api.openweathermap.org/data/2.5/weather?q=manchester&appid=9e17d5366245f65fd5f14d17bf5241e8&units=metric")

    .then(function(response){
        return response.json()
    })
    .then(function (json){
    console.log(json)
    console.log(json.name);
    console.log(json.main.temp);
    console.log(json.weather[0].description);
    //call function to display the weather
    displayLondonWeather(json);
});


function displayLondonWeather(json) {
      document.querySelector('.temperature').innerHTML = json.main.temp + '&deg;';
      document.querySelector('.city-name').innerHTML = json.name;
      document.querySelector('.weather-description').innerHTML = json.weather[0].description;
}


