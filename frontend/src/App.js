import './App.css';
import React from "react";
import ServerCard from './components/ServerCard';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherCard></WeatherCard>
      <ServerCard></ServerCard>
    </div>
  );
}

export default App;
