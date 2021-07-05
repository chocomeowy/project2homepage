import React from "react";
import { useEffect, useState } from "react";
import moment from "moment";
function Weather() {
  const [weather, setWeather] = useState("Weather");
  const [weather2, setWeather2] = useState("Weather2");
  const [weather3, setWeather3] = useState("Weather");
  const currentDate = moment().format("YYYY-MM-DD[T]HH:mm:ss");
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
  }, [currentDate]);

  useEffect(() => {
    const url2 = `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${currentDate}`;
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data);
        setWeather2(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [currentDate]);

  useEffect(() => {
    const url3 = `https://api.data.gov.sg/v1/environment/air-temperature?date_time=${currentDate}`;
    fetch(url3)
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data);
        setWeather3(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [currentDate]);

  return (
    <>
      <div className="trans">
        Today's forecast: {weather?.items?.[0]?.general?.forecast}
        <br></br>
        With a high of {weather?.items?.[0]?.general?.temperature.high}°C and a
        low of {weather?.items?.[0]?.general?.temperature.low}°C
        <br></br>
        In the next 2 hours: {
          weather2?.items?.[0]?.forecasts?.[12]?.forecast
        } - {weather3?.items?.[0].readings[0]?.value}°C
      </div>
    </>
  );
}

export default Weather;
