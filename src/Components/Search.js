import React from "react"

let temperature = ""
let condition = ""

export default function Search(){

    const [cityName, setCityName] = React.useState("")
    const [temp, setTemp] = React.useState("")
    const [weatherIcon, setWeatherIcon] = React.useState("")

    async function searchCity() {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=77YycYvuw3pfKUu2cAlfxEVwDJXAe9mI&q=${cityName}`)
    const data = await response.json()
    const firstCityKey = data[0].Key
    console.log(data[0])
    console.log(firstCityKey)

    const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${firstCityKey}?apikey=77YycYvuw3pfKUu2cAlfxEVwDJXAe9mI`)
    const weatherData = await weatherResponse.json()
    const firstWeather = weatherData[0]

    console.log(firstWeather)
    temperature = firstWeather.Temperature.Metric.Value;
    condition = firstWeather.WeatherText;
    console.log(temperature)
    setTemp(temperature)
    }

    function getCity(event){
        const value = event.target.value
        setCityName(value)
        console.log(cityName)
        searchCity()
    } 

    function handleChange(event){
        const value = event.target.value
        setCityName(value)
    }

    return (
            <div className="searchForm">
                <input 
                type="text"
                placeholder="City"
                className="search--city"
                name="city"
                value={cityName.city}
                onChange={handleChange}
                /> <br/>
                <button 
                className="form--button"
                onClick={getCity}
                >
                    Search
                </button>
                {temp && <p className="temp">{temp} °C</p>}
                {temp && <p className="condition">{condition}</p>}
            </div>

        )

}