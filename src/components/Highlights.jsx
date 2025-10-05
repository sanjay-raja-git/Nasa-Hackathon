import React from "react";
import { motion } from "framer-motion";

const severityColors = {
  co: "bg-green-500",
  no2: "bg-yellow-400",
  o3: "bg-orange-400",
  pm2_5: "bg-red-500",
};

export default function Highlights({ components }) {
  if (!components) {
    return <p className="text-center text-gray-400">Loading air quality data...</p>;
  }

  const params = [
    { name: "CO", key: "co", value: components.co },
    { name: "NO₂", key: "no2", value: components.no2 },
    { name: "O₃", key: "o3", value: components.o3 },
    { name: "PM2.5", key: "pm2_5", value: components.pm2_5 },
  ];

  return (
    <div className="bg-[#1e293b]/70 rounded-xl p-6 backdrop-blur-md border border-gray-700 max-w-md mx-auto shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-center text-white">Air Quality Highlights</h2>
      <div className="grid grid-cols-2 gap-6">
        {params.map(({ name, key, value }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 20px rgba(59, 130, 246, 0.6)" }}
            className="rounded-lg p-5 text-center cursor-pointer relative bg-[#334155] border-2 border-transparent hover:border-indigo-500"
          >
            <p className="text-sm text-gray-400">{name}</p>
            <div className="flex items-center justify-center mt-2 space-x-3">
              <p className="text-2xl font-extrabold text-white">{value ? value.toFixed(1) : "N/A"} µg/m³</p>
              <div className={`w-16 h-3 rounded-md self-center ${severityColors[key]}`}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
