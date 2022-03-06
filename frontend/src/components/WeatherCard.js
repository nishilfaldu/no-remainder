import React from 'react'
import './WeatherCard.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useState, useEffect } from 'react'

function WeatherCard() {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=080c2802be9e48b8ae3233324220503&q=Cincinnati&aqi=no')
            .then(response => response.json())
            .then(data => {
                setWeather(Math.round(data.current.temp_f));
            })
    })

  return (
    <div className="WeatherCard">
      <h1>Weather</h1>
      <div className="temp">
        <h2 className = 'out_temp'>{weather}°</h2>
      </div>
      <div className="ico">
        <WbSunnyIcon sx={{fontSize:40}}></WbSunnyIcon>
      </div>

      <h5 className='location'>Cincinnati, Ohio</h5>
    </div>
  )
}

export default WeatherCard;