// fe4f22a5625b09d8ec5b8c97db2db81d

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=fe4f22a5625b09d8ec5b8c97db2db81d&units=matric

let search = document.querySelector(".search-box button");
let container = document.querySelector(".container");
let weatherBox = document.querySelector(".show-weather");
let details = document.querySelector(".details-of-weather");
let error = document.querySelector(".not-found");

function getWeather(city) {
    const APIkey = "fe4f22a5625b09d8ec5b8c97db2db81d";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
    ).then((response) => {
            console.log(response);
            let data = response.json();
            console.log(data);
          return data;
      })
        .then((result) => {


          if (result.cod === '404') {
              container.style.height = '500px';
              weatherBox.style.display = 'none';
              details.style.display = 'none';
              error.style.display = 'block';
              error.classList.add("showing");
          }
          
          const image = document.querySelector(".show-weather img");
          const temprature = document.querySelector(".show-weather .temprature");
          const description = document.querySelector(".show-weather .description");
          const humidity = document.querySelector(".details-of-weather .humidity .text span");
          const wind = document.querySelector(".details-of-weather .wind .text span");

            switch (result.weather[0].main) {
              case "Clear":
                image.src = "images/clear.png";
                break;
              case "Rain":
                image.src = "images/rain.png";
                break;
              case "Snow":
                image.src = "images/snow.png";
                break;
              case "Clouds":
                image.src = "images/cloud.png";
                break;
              case "Haze":
                image.src = "images/mist.png";
                break;

              default:
                image.src = "";
            };


            temprature.innerHTML = `${parseInt(result.main.temp)}`;
            description.innerHTML = `${result.weather[0].description}`;
            humidity.innerHTML = `${result.main.humidity}%`;
            wind.innerHTML = `${result.wind.speed}Km/h`;

            weatherBox.style.display = 'block';
            details.style.display = 'flex';
            container.style.height = '520px';
            weatherBox.classList.add('showing');
            details.classList.add('showing');


      });
}


search.addEventListener('click', () => {
    const city = document.querySelector('.search-box input').value;
    if (city === '') {
        return;
    }
    getWeather(city);
})


// getWeather("London");
