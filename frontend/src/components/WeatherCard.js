import React from 'react'
import './WeatherCard.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function WeatherCard() {
  return (
    <div className="WeatherCard">
      <h1>Card Title</h1>
      <h2 className = "temp">52</h2>
      <WbSunnyIcon></WbSunnyIcon>
    </div>
  )
}

export default WeatherCard;