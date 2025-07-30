import { useState } from "react"
import "./app.css"

function Weather() {
  const [weather, setWeather] = useState("")
  const [input, setInput] = useState("")
  const[datafound,setdatafound]=useState("")

  async function getWeather() {
    const api_key = "58061803781bcbc4e28b1f98a65c16ab"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}&units=metric`
    const result = await fetch(url)
    const response = await result.json()

    if (response.cod === 200) {
      setdatafound("")
      setWeather(response)
    } else {
      setWeather("")
      setdatafound("No city Found")
    }
  }

  return (
    <div className="weather-container">
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter city name" />
      <br />
      <button onClick={getWeather}>Weather</button>
      <div className="weather-data">
        {weather && (
          <>
            <h1>City: {weather.name}</h1>
            <h2>Temperature: {weather.main.temp} °C</h2>
            <h2>Humidity: {weather.main.humidity}%</h2>
            <h2>Wind Speed: {weather.wind.speed} m/s</h2>
            <h2>Clouds: {weather.clouds.all}%</h2>
          </>
        )}
      </div>
      <h1>{datafound}</h1>
    </div>
  )
}

export default Weather
