let weather = {
  apiKey: "57f39cc32dcf24fe1f72928fe0f0186d",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    console.log("Name:-", name)
    const { icon, description } = data.weather[0];
    console.log("Icon:-", icon)
    const {main} = data.weather[0];
    switch (main) {
      case "Clouds": {
        document.body.style.backgroundImage =

         "url('https://media.tenor.com/tQWmGFB9_SYAAAAM/moving-clouds-world-meteorological-day.gif')";
        break;
      }

      case "Clear": {
        document.body.style.backgroundImage =
          "url('https://i.pinimg.com/originals/39/3e/d8/393ed8d78be92b2a934d14deb8a8cfcb.gif')";
        break;
      }
        
      case "Drizzle": {
        document.body.style.backgroundImage =
          "url('https://i.pinimg.com/originals/87/eb/d9/87ebd96d079b1737b97f2b3847da9d47.gif')";
        break;
      }
      case "Mist": {
        document.body.style.backgroundImage =
          "url('https://i.giphy.com/QiLKY0lTDJZ6M.webp')";
        break;
      }
      case "Thunderstorm": {
        document.body.style.backgroundImage =
          "url('https://media.tenor.com/EBPJwGhAlTkAAAAM/souronesss.gif')";
          break;
      }
      case "Snow": {
        document.body.style.backgroundImage =
          "url('https://cdn.pixabay.com/animation/2023/02/15/02/31/02-31-39-143_512.gif')";
        break;
      }
      case "Rain": {
        document.body.style.backgroundImage =
          "url('https://img1.picmix.com/output/stamp/normal/4/6/0/7/1177064_8e320.gif')";
        break;
      }
    }
    console.log("Description:-", description)
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Pune");


