import React from "react";
import { useEffect, useState } from "react";
function Weather() {
  const [weather, setWeather] = useState("Weather");

  useEffect(() => {
    const url = `https://api.data.gov.sg/v1/environment/24-hour-weather-forecast`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data);
        setWeather(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <div className="trans">
        Today's forecast: {weather?.items?.[0]?.general?.forecast}
        <br></br>
        With a high of {weather?.items?.[0]?.general?.temperature.high} degrees
        celcius and a low of {weather?.items?.[0]?.general?.temperature.low}{" "}
        degrees celcius.
      </div>
    </>
  );
}

export default Weather;
