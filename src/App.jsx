import React, { useState } from "react";
import Top from "./components/top";
import AQICard from "./components/AQICard";
import HourlyAQI from "./components/HourlyAQI"; // <-- new
import Highlights from "./components/Highlights";
import OtherCities from "./components/OtherCities";
import Footer from "./components/Footer";
import WeatherCard from "./components/WeatherCard";


function App() {
  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white font-sans p-6 overflow-x-hidden selection:bg-purple-500/30">
      <Top onSearch={setCity} />

      <div className="max-w-5xl mx-auto space-y-10">
        <AQICard city={city} />
        <Highlights city={city} />
        <HourlyAQI city={city} /> {/* Replaces WeatherCard */}
        <WeatherCard city={city} />
        
        <OtherCities />
      </div>

      <Footer />
    </div>
  );
}

export default App;
