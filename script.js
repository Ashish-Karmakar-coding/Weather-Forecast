const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "e61f74672405576b267e3cfaa70aa062";


let btn = document.querySelector(".upper button");
let img = document.querySelector(".img");
let temp = document.querySelector(".temp .temp_value");
let cityName = document.querySelector(".city");
let humidity = document.querySelector(".HUV");
let windSpeed = document.querySelector(".WSV");

const weatherCheck = async() => {
let city = document.querySelector(".upper input").value;
    
    const response = await fetch(BASE_URL + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    cityName.innerText = data.name;
    temp.innerText = Math.round(data.main.temp) + "°c";
    humidity.innerText = data.main.humidity + "%";
    windSpeed.innerText = data.wind.speed + "km/h";

    if(data.weather[0].main === "Clouds"){
        img.src = "clouds.png";
    }else if(data.weather[0].main === "Clear"){
        img.src = "clear.png";
    }else if(data.weather[0].main === "Rain"){
        img.src = "rain.png";
    }else if(data.weather[0].main === "Drizzle"){
        img.src = "drizzel.png";
    }else if(data.weather[0].main === "Mist"){
        img.src = "mist.png";
    }

    // document.querySelector(".weather").style.display = "none";
    
}

btn.addEventListener("click" , () =>{
    weatherCheck();
});
