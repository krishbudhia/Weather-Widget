import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  let NIGHT_URL =
    "https://images.unsplash.com/photo-1679212839469-fb16a48919ce?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let DAY_URL =
    "https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1688904531852-af3c044d58a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1587797245295-d0671a5dc224?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAINY_URL =
    "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let SNOW_URL =
    "https://images.unsplash.com/photo-1644908628503-53b471a39b32?q=80&w=859&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const getImageForWeather = () => {
    const weather = info.weather;
    const hour = new Date().getHours();

    if (weather.includes("snow") || info.temp <= 5) return SNOW_URL;
    if (weather.includes("rain")) return RAINY_URL;
    if (info.temp >= 30) return HOT_URL;
    if (info.temp <= 17) return COLD_URL;
    if (hour >= 18 || hour < 6) return NIGHT_URL;
    return DAY_URL;
  };

  const selectedImage = getImageForWeather();

  return (
    <div className="Search">
      <div className="InfoBox">
        <Card
          sx={{ maxWidth: 345 }}
          style={{ boxShadow: "#514949 2px 3px 20px 0px" }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={selectedImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} &nbsp;
              {info.temp < 17 ? (
                <AcUnitIcon />
              ) : info.humidity >= 80 ? (
                <ThunderstormIcon />
              ) : (
                <LightModeIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and Feels
                Like {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
