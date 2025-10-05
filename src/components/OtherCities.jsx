import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaWind, FaSmog } from "react-icons/fa";

// Mock AQI data for other cities
const citiesAQI = [
  { city: "New York, USA", aqi: 2 },
  { city: "Dubai, UAE", aqi: 3 },
  { city: "Beijing, China", aqi: 4 },
  { city: "Toronto, Canada", aqi: 1 },
  { city: "London, UK", aqi: 2 },
  { city: "Sydney, AUS", aqi: 3 },
];

// Map AQI to icon and color
const getIcon = (aqi) => {
  switch (aqi) {
    case 1: return <FaLeaf className="text-green-400" />;
    case 2: return <FaWind className="text-yellow-400" />;
    case 3: return <FaSmog className="text-orange-400" />;
    case 4: return <FaSmog className="text-red-500" />;
    case 5: return <FaSmog className="text-purple-500" />;
    default: return <FaSmog className="text-gray-400" />;
  }
};

const getLabel = (aqi) => {
  switch (aqi) {
    case 1: return "Good";
    case 2: return "Fair";
    case 3: return "Moderate";
    case 4: return "Poor";
    case 5: return "Very Poor";
    default: return "Unknown";
  }
};

const OtherCities = () => {
  // Duplicate array for seamless scrolling
  const loopData = [...citiesAQI, ...citiesAQI];

  return (
    <div className="mt-8 overflow-hidden">
      <h2 className="text-4xl font-bold mb-6 mt-5 text-white text-center">
        Other Cities AQI
      </h2>

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {loopData.map((c, idx) => {
          const label = getLabel(c.aqi);
          const bgColor =
            c.aqi === 1 ? "bg-green-900/30" :
            c.aqi === 2 ? "bg-yellow-900/30" :
            c.aqi === 3 ? "bg-orange-900/30" :
            c.aqi === 4 ? "bg-red-900/30" :
            "bg-purple-900/30";

          const textColor =
            c.aqi === 1 ? "text-green-400" :
            c.aqi === 2 ? "text-yellow-400" :
            c.aqi === 3 ? "text-orange-400" :
            c.aqi === 4 ? "text-red-500" :
            "text-purple-500";

          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`min-w-[160px] p-5 rounded-2xl flex flex-col items-center text-center ${bgColor} border border-gray-600 shadow-lg`}
            >
              <div className="text-4xl mb-2">{getIcon(c.aqi)}</div>
              <div className={`text-3xl font-bold ${textColor}`}>{c.aqi}</div>
              <div className="text-sm text-gray-200 mt-1">{c.city}</div>
              <div className="text-xs mt-1 text-gray-400">{label}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OtherCities;
