import { useEffect, useState } from "react";

const MY_KEY = "866470bfa7b122c147a6ef7230d9f2b3";

const Weather = () => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${MY_KEY}&units=metric&lang=en`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  });
  return <div>{weather}</div>;
};

export default Weather;
