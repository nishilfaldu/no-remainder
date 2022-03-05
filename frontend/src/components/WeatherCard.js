import React from 'react'
import './WeatherCard.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function WeatherCard() {
  return (
    <div className="WeatherCard">
      <h1>Weather</h1>
      <div className="temp">
        <h2>52°</h2>
      </div>
      <div className="ico">
        <WbSunnyIcon sx={{fontSize:40}}></WbSunnyIcon>
      </div>

      <h5>Cincinnati, Ohio</h5>
    </div>
  )
}

export default WeatherCard;