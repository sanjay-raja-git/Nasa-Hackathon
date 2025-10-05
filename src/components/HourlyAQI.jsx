import React from "react";
import { motion } from "framer-motion";
import { FaSmog, FaWind, FaLeaf } from "react-icons/fa";

const data = [
  { time: "6 AM", aqi: 1 },
  { time: "9 AM", aqi: 2 },
  { time: "12 PM", aqi: 3 },
  { time: "3 PM", aqi: 4 },
  { time: "6 PM", aqi: 2 },
  { time: "9 PM", aqi: 1 },
  { time: "12 AM", aqi: 1 },
  { time: "3 AM", aqi: 2 },
  { time: "6 AM", aqi: 3 },
  { time: "9 AM", aqi: 2 },
];

const getIcon = (aqi) => {
  switch (aqi) {
    case 1: return <FaLeaf className="text-green-400" />;
    case 2: return <FaWind className="text-yellow-400" />;
    case 3: return <FaSmog className="text-orange-400" />;
    case 4: return <FaSmog className="text-red-400" />;
    case 5: return <FaSmog className="text-purple-400" />;
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

export default function HourlyAQI() {
  return (
    <div className="mt-8 overflow-hidden">
      <h2 className="text-4xl font-bold mb-6 pb-6 text-white-600 text-center">
        Hourly Air Quality
      </h2>

      {/* Scrolling container */}
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {/* Duplicate content to make scrolling seamless */}
        {[...data, ...data].map((h, i) => {
          const label = getLabel(h.aqi);

          const bgColor =
            h.aqi === 1 ? "bg-white/10" :
            h.aqi === 2 ? "bg-white/15" :
            h.aqi === 3 ? "bg-white/20" :
            h.aqi === 4 ? "bg-white/25" :
            "bg-purple-200/20";

          return (
            <div
              key={i}
              className={`p-6 min-w-[140px] rounded-2xl text-center ${bgColor} flex flex-col items-center justify-center`}
            >
              <p className="text-sm text-gray-300 font-medium">{h.time}</p>
              <div className="text-4xl my-2 text-white">{getIcon(h.aqi)}</div>
              <p className="font-bold text-2xl text-white">{h.aqi}</p>
              <p className="text-sm mt-2 text-gray-200">{label}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
