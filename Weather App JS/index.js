let weather = {

    apiKey: "032e440a2197da8b3c80e11601f0e01d",

    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data){
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        document.querySelector(".city").innerHTML = `Weather in  ${name}`;
        document.querySelector('.description').innerHTML = description;
        document.querySelector(".temp").innerHTML = temp+'°C';
        document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerHTML = `Wind Speed: ${speed}km/h`;

        


        


    },

    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    },
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }

});

weather.fetchWeather("Delhi");