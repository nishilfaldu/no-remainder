import React from 'react'
import './ServerCard.css'
import { useState, useEffect } from 'react'

function ServerCard() {
  const [server_temp, setTemp] = useState(20)

  // if (server_temp > 50) {
  //   setMessage("The server is running well")
  // }

  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(response => response.json())
      .then(data => console.log(data.status))
  })

  return (
    <div className="ServerCard">
      <h1>Server Temperatures</h1>
      <h2 className='server-temp'>{server_temp}°</h2>
      <h5 className='caption'>{server_temp < 59? "Server temperature too low" : server_temp > 89? "Server temperature too high": "Server temperatures look good"}</h5>
    </div>
  )
}

export default ServerCard;