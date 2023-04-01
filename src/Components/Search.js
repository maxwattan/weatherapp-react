import { useState } from "react";

export default function Search() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [previousSearch, setPreviousSearch] = useState([]);
 
  

  const getWeather = async () => {
    const response = await fetch(`https://wttr.in/${location}?format=j1`);
    const data = await response.json();
    setWeather(data);
    setPreviousSearch([...previousSearch, location]);
  };



  return (
    <div className="weather-search">
      <h1>Search for Weather</h1>
      <br></br>

      <input
        className="input-bar"
        type="text"
        placeholder="Search..."
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {weather && (
      
        <div>  
          <div className="current">
            <h1>{weather.nearest_area[0].areaName[0].value}</h1>
            <p>
              <strong>Area: </strong>
              {weather.nearest_area[0].areaName[0].value}
              <br></br>
              <strong>Region: </strong>
              {weather.nearest_area[0].region[0].value}
              <br></br>
              <strong>Country: </strong>
              {weather.nearest_area[0].country[0].value}
              <br></br>
              <strong>Currently Feels like: </strong>
              {weather.current_condition[0].FeelsLikeF}°F
              <br></br>
              <strong>Chance of Sunshine: </strong>
              {weather.weather[0].hourly[0].chanceofsunshine}%<br></br>
              <strong>Chance of Rain: </strong>
              {weather.weather[0].hourly[0].chanceofrain}%<br></br>
              <strong>Chance of Snow: </strong>
              {weather.weather[0].hourly[0].chanceofsnow}%
            </p>
          </div>
          <h1>Forecast</h1>
          <ul>
            <p>
              <h3>Today</h3>
              <span className="today">
                <strong>Average Temperature:</strong>{" "}
                {weather.weather[0].avgtempF} °F
              </span>

              <br></br>
              <span className="today">
                <strong>Max Temperature:</strong> {weather.weather[0].maxtempF}{" "}
                °F
              </span>

              <br></br>
              <span className="today">
                <strong>Min Temperature:</strong> {weather.weather[0].mintempF}{" "}
                °F
              </span>
            </p>

            <p>
              <h3>Tomorrow</h3>
              <span className="tomorrow">
                <strong>Average Temperature:</strong>{" "}
                {weather.weather[1].avgtempF} °F
              </span>

              <br></br>
              <span className="tomorrow">
                <strong>Max Temperature:</strong> {weather.weather[1].maxtempF}{" "}
                °F
              </span>

              <br></br>
              <span className="tomorrow">
                <strong>Min Temperature:</strong> {weather.weather[1].mintempF}{" "}
                °F
              </span>
            </p>

            <p>
              <h3>Day After Tommorrow</h3>
              <span className="day-after">
                <strong>Average Temperature:</strong>{" "}
                {weather.weather[2].avgtempF} °F
              </span>

              <br></br>
              <span className="day-after">
                <strong>Max Temperature:</strong> {weather.weather[2].maxtempF}{" "}
                °F
              </span>

              <br></br>
              <span className="day-after">
                <strong>Min Temperature:</strong> {weather.weather[2].mintempF}{" "}
                °F
              </span>
            </p>
          </ul>
          <div className="previous-search">
            <h1>Previous Search</h1>
            <ul>
              {previousSearch.map((location, weather) => (
                <li key={location}><a href={location}> {location}</a></li>
                
              ))}
            </ul>
          </div>
        </div>
      )}
        </div>
  );
}
