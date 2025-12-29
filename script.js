let tgl = document.getElementById("themeToggle");
let body = document.querySelector("body");
let ctr = document.querySelector(".container");
let btn = document.querySelector(".btn");
let inp = document.querySelector(".cityInput");
let weatherform = document.querySelector(".weatherinfo");


btn.addEventListener("click", function (e) {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=f5e03af036ff122833d3bc425e9bbef9`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            weatherInfo.innerHTML = "";
            let img = document.createElement("h1");
            let city = document.createElement("h2");
            let temp = document.createElement("p");
            let desc = document.createElement("p");
            let humidity = document.createElement("p");
            img.textContent = getWeatherEmoji(data.weather[0].id);
            img.style.fontSize = "50px";
            city.textContent = data.name;
            city.className = "city";
            temp.textContent = ((data.main.temp) - 273).toFixed(1) + "°C";
            temp.className = "temp";
            desc.textContent = "Weather Description: " + data.weather[0].description.replace(/\b\w/g, c => c.toUpperCase());
            desc.className = "desc";
            humidity.textContent = "Humidity: " + data.main.humidity + "%";
            humidity.className = "humidity";
            weatherform.appendChild(img);
            weatherform.appendChild(city);
            weatherform.appendChild(temp);
            weatherform.appendChild(desc);
            weatherform.appendChild(humidity);
        }
        )
});



function getWeatherEmoji(weatherId) {

    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "❓";
    }
}



tgl.addEventListener("click", function () {
    body.classList.toggle("dark");
    ctr.classList.toggle("dark");
    tgl.textContent = tgl.textContent === "🌙" ? "🌞" : "🌙";
});

