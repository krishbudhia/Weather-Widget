import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let JsonResponse = await response.json();
      // console.log(JsonResponse);
      let result = {
        city: JsonResponse.name,
        temp: JsonResponse.main.temp,
        tempMin: JsonResponse.main.temp_min,
        tempMax: JsonResponse.main.temp_max,
        humidity: JsonResponse.main.humidity,
        feels_like: JsonResponse.main.feels_like,
        weather: JsonResponse.weather[0].description,
      };
      // console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleEvent = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      // console.log(city);
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="Search">
      <div className="SearchBox">
        <h2>Search For The Weather</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={handleEvent}
          />
          <br></br>
          <br></br>
          <Button variant="contained" startIcon={<SearchIcon />} type="submit">
            Search
          </Button>
          {error && (
            <p style={{ color: "darkred" }}>
              <b>No such place exists!!</b>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
