import moment from "moment";
import React, { useEffect, useState } from "react";

const HourlyWeatherForecast = () => {
  const [weather, setWeather] = useState("Weather2");
  const currentDate = moment().format("YYYY-MM-DD[T]HH:mm:ss");
  const url = `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${currentDate}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data);
        setWeather(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [url]);

  return (
    <>In the next 2 hours: {weather?.items?.[0]?.forecasts?.[12]?.forecast}</>
  );
};

export default HourlyWeatherForecast;
