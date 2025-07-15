import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 26.06,
    humidity: 76,
    temp: 25.47,
    tempMax: 25.47,
    tempMin: 25.47,
    weather: "overcast clouds",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
