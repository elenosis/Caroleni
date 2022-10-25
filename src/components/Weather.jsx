import { useEffect, useState } from "react";
import "./Weather.css";
import ThemeContext from "../Contexts/ColorContext";
import { useContext } from "react";

const MY_KEY = "866470bfa7b122c147a6ef7230d9f2b3";

const Weather = ({ city }) => {
  const [theme] = useContext(ThemeContext);
  const [weather, setWeather] = useState({});
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_KEY}&units=metric&lang=en`
    )
      .then((response) => response.json())
      .then((data) => {
        const temperatur = data.main.temp;
        const city = data.name;
        const country = data.sys.country;
        const feelsLike = data.main.feels_like;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        setWeather({ temperatur, city, country, feelsLike, description, icon });
      });
  }, []);
  const imgSrc = `http://openweathermap.org/img/w/${weather.icon}.png`;
  return (
    <div
      className="weatherCard"
      style={{
        border: `2px solid ${theme}`,
        borderRightColor: theme,
        borderBottomColor: theme,
        color: theme,
      }}
    >
      <p>
        Weather in {weather.city} today:<p> {weather.description}</p>
      </p>
      <img src={imgSrc} alt="icon" />

      <p>Actual temperatur: {weather.temperatur}°C</p>
      <p>Feels like: {weather.feelsLike}°C</p>
    </div>
  );
};

export default Weather;
