import React from 'react'
import './ServerCard.css'
import StorageIcon from '@mui/icons-material/Storage';

function ServerCard() {
  return (
    <div className="ServerCard">
      <h1>Server Temperatures</h1>
      <div className = "store">
        <StorageIcon></StorageIcon>
      </div>
        <h5>76°</h5>
    </div>
  )
}

export default ServerCard;