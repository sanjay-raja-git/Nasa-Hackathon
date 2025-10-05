import React from "react";
import { motion } from "framer-motion";
import { FaSmog, FaCheckCircle, FaExclamationTriangle, FaExclamationCircle } from "react-icons/fa";

// Helper to get AQI status, color, and icon
const getAQIInfo = (aqi) => {
  if (aqi <= 50)  return { status: "Good", color: "green", icon: <FaCheckCircle /> };
  if (aqi <= 100) return { status: "Moderate", color: "yellow", icon: <FaExclamationTriangle /> };
  if (aqi <= 150) return { status: "Unhealthy for Sensitive Groups", color: "orange", icon: <FaExclamationCircle /> };
  if (aqi <= 200) return { status: "Unhealthy", color: "red", icon: <FaExclamationCircle /> };
  if (aqi <= 300) return { status: "Very Unhealthy", color: "purple", icon: <FaExclamationCircle /> };
  return { status: "Hazardous", color: "maroon", icon: <FaExclamationCircle /> };
};

const AQICard = ({ aqi = 78, location = "India" }) => {
  const { status, color, icon } = getAQIInfo(aqi);
  // Calculate circle progress
  const percent = Math.min(aqi, 300) / 300 * 100; // Max scale AQI to 300

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`relative bg-gradient-to-r from-purple-700 to-blue-600 rounded-2xl p-6 mb-8 shadow-lg flex justify-between items-center overflow-hidden`}
    >
      <div>
        <h2 className="text-xl font-bold mb-1">Air Quality Index (AQI)</h2>
        <p className="text-gray-200 mb-2">Current Air Quality in <span className="font-semibold text-white">{location}</span></p>
        <div className={`inline-flex items-center space-x-2 text-${color}-400 font-semibold text-md mt-2`}>
          <span className="text-2xl">{icon}</span>
          <span>{status}</span>
        </div>
      </div>
      {/* Animated Circular AQI display */}
      <div className="relative flex flex-col items-center justify-center mr-2">
        <svg width="90" height="90" className="block">
          <circle
            cx="45"
            cy="45"
            r="38"
            fill="none"
            stroke="#3b3f56"
            strokeWidth="10"
          />
          <motion.circle
            cx="45"
            cy="45"
            r="38"
            fill="none"
            stroke={color === 'maroon' ? '#800000' : color}
            strokeWidth="10"
            strokeDasharray={2 * Math.PI * 38}
            strokeDashoffset={2 * Math.PI * 38 * (1 - percent / 100)}
            initial={{ strokeDashoffset: 2 * Math.PI * 38 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 38 * (1 - percent / 100) }}
            transition={{ duration: 1 }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center">
          <span className={`text-3xl font-bold text-${color}-400`}>{aqi}</span>
          <span className="text-xs text-gray-300 font-medium mt-1">AQI</span>
        </div>
        <FaSmog className="absolute -bottom-5 text-gray-400 opacity-30 text-4xl" />
      </div>
    </motion.div>
  );
};

export default AQICard;
