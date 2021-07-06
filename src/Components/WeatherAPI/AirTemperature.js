import moment from "moment";
import React, { useEffect, useState } from "react";

const AirTemperature = () => {
  const [weather, setWeather] = useState("Weather");
  const currentDate = moment().format("YYYY-MM-DD[T]HH:mm:ss");

  useEffect(() => {
    const url = `https://api.data.gov.sg/v1/environment/air-temperature?date_time=${currentDate}`;
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
  return <>{weather?.items?.[0].readings[0]?.value}°C</>;
};

export default AirTemperature;
