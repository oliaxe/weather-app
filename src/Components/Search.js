import React from "react";

let counter = 0;

export default function Search() {
  const [cityName, setCityName] = React.useState("");
  const [temp, setTemp] = React.useState("");
  const [condition, setCondition] = React.useState("");

  async function searchCity() {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=CIA3JkmAuyJpvFgI9c1JQU0QnC9o6zjA&q=${cityName}`
    );
    const data = await response.json();
    const firstCityKey = data[0].Key;
    setCityName(data[0].LocalizedName);
    const weatherResponse = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${firstCityKey}?apikey=CIA3JkmAuyJpvFgI9c1JQU0QnC9o6zjA`
    );
    const weatherData = await weatherResponse.json();
    const firstWeather = weatherData[0];
    setCondition(firstWeather.WeatherText);
    setTemp(firstWeather.Temperature.Metric.Value);
  }

  function getCity(event) {
    var archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;

  for (; key = keys[i]; i++) {
    archive.push(localStorage.getItem(key));
  }
    console.log(archive);

    setCityName(event.target.value);
    searchCity();


    localStorage.setItem(`city${archive.length}`, cityName);
    console.log(cityName);
    window.location.reload(false);
  }

  function handleChange(event) {
    setCityName(event.target.value);
  }

  return (
    <div className="searchForm">
      <div className="inputAndButton">
      <input
        type="text"
        placeholder="City"
        className="search--city"
        name="city"
        value={cityName.city}
        onChange={handleChange}
      />{" "}
      <br />
      <button className="form--button" onClick={getCity}>
        Search
      </button>
      </div>
      <div className="showInfo">
        {temp && <p className="cityInput">{cityName}</p>}
        {temp && <p className="temp">{temp} °C</p>}
        {temp && <p className="condition">{condition}</p>}
      </div>
    </div>
  );
}
