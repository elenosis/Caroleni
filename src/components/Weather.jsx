import { useEffect, useState } from "react";
import "./Weather.css";

const MY_KEY = "866470bfa7b122c147a6ef7230d9f2b3";

const Weather = () => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${MY_KEY}&units=metric&lang=en`
    )
      .then((response) => response.json())
      .then((data) => {
        const temperatur = data.main.temp;
        const city = data.name;
        const country = data.sys.country;
        const feelsLike = data.main.feels_like;
        const description = data.weather[0].description;

        setWeather({ temperatur, city, country, feelsLike, description });
      });
  }, []);
  return (
    <div className="weatherCard">
      <p>
        The wetaher in {weather.city} today is {weather.description}.
      </p>
      <p>
        The actual temperatur is {weather.temperatur}°C but it feels like{" "}
        {weather.feelsLike}°C
      </p>
    </div>
  );
};

export default Weather;
