import moment from "moment";
import React, { useEffect, useState } from "react";
const currentDate = moment().format("YYYY-MM-DD[T]HH:mm:ss");
const DailyHourForecast = () => {
  const [weather, setWeather] = useState("Weather");

  useEffect(() => {
    const url = `https://api.data.gov.sg/v1/environment/24-hour-weather-forecast?date_time=${currentDate}`;
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
      {weather?.items?.[0]?.general?.forecast}
      <br></br>
      With a high of {weather?.items?.[0]?.general?.temperature.high}°C and a
      low of {weather?.items?.[0]?.general?.temperature.low}°C
    </>
  );
};

export default DailyHourForecast;
