import HourlyWeatherForecast from "./WeatherAPI/HourlyWeatherForecast";
import DailyHourForecast from "./WeatherAPI/DailyHourForecast";
import AirTemperature from "./WeatherAPI/AirTemperature";
function Weather() {
  return (
    <>
      <div className="trans">
        Today's forecast: <DailyHourForecast />
        <br></br>
        <HourlyWeatherForecast /> <AirTemperature />
      </div>
    </>
  );
}

export default Weather;
