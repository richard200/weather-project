document.addEventListener('DOMContentLoaded', () => {

weather;

});

let weather = {
    apikey: "786595a525e6b327c1eb10970244fffd",
    fetchWeather : function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
    .then((res) => res.json())
    .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        let {name} = data;
        // let {icon} = data.weather[0]
        let {description} = data.weather[0]
        let {temp} = data.main
        let {humidity} = data.main
        let {speed} = data.wind 
        console.log(name, description, temp, humidity, speed);

        document.querySelector('.city').textContent = "Weather In " + name;
        document.querySelector('.description').textContent = description;
        document.querySelector('.temp').textContent = temp + "°C";
        document.querySelector('.humidity').textContent = "Humidity " + humidity + "%";
        document.querySelector('.wind').textContent = "Wind Speed " + speed + "km/h"
    },

    search: function(){
        this.fetchWeather(document.querySelector(".search").value)
    }


   
  }

//   function searchPlace(){
//    this.fetchWeather(document.querySelector(".search1").value)
        
// }

  document.querySelector(".search1").addEventListener('click', () => {
    weather.search()

  })