import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaWind, FaSmog } from "react-icons/fa";

// Mock predicted AQI data
const predictedAQI = [
  { time: "Tomorrow 6 AM", aqi: 1 },
  { time: "Tomorrow 9 AM", aqi: 2 },
  { time: "Tomorrow 12 PM", aqi: 3 },
  { time: "Tomorrow 3 PM", aqi: 4 },
  { time: "Tomorrow 6 PM", aqi: 2 },
  { time: "Tomorrow 9 PM", aqi: 1 },
  { time: "Day After 6 AM", aqi: 2 },
  { time: "Day After 9 AM", aqi: 3 },
];

// Map AQI to icon
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

// Map AQI to label
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

export default function AQIPrediction() {
  return (
    <div className="mt-8 overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-purple-600 text-center">
        Air Quality Prediction
      </h2>

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}  // Moves left continuously
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }} // slower scrolling
      >
        {[...predictedAQI, ...predictedAQI].map((item, i) => {
          const bgColor =
            item.aqi === 1 ? "bg-white/10" :
            item.aqi === 2 ? "bg-purple-100/20" :
            item.aqi === 3 ? "bg-purple-200/30" :
            item.aqi === 4 ? "bg-purple-300/30" :
            "bg-purple-400/40";

          return (
            <div
              key={i}
              className={`p-6 min-w-[160px] rounded-2xl text-center flex flex-col items-center justify-center ${bgColor}`}
            >
              <p className="text-sm text-gray-300 font-medium">{item.time}</p>
              <div className="text-4xl my-2 text-white">{getIcon(item.aqi)}</div>
              <p className="font-bold text-2xl text-white">{item.aqi}</p>
              <p className="text-sm mt-2 text-gray-200">{getLabel(item.aqi)}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
