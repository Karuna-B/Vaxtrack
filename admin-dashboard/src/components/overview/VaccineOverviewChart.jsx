import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const vaccineData = [
  { name: "Dec", vaccines: 4200 },
  { name: "Jan", vaccines: 3800 },
  { name: "Feb", vaccines: 5100 },
  { name: "March", vaccines: 4600 },
  { name: "April", vaccines: 5400 },
  { name: "May", vaccines: 7200 },
  { name: "Jun", vaccines: 6100 },
  { name: "July", vaccines: 5900 },
  { name: "Aug", vaccines: 6800 },
  { name: "Sep", vaccines: 5100 },
  { name: "Oct", vaccines: 5500 },
  { name: "Nov", vaccines: 4500 },
];

const VaccineOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-300 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-800">
        Vaccine Distribution
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <LineChart data={vaccineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis
              tick={{ fill: "#9ca3af", fontSize: 13 }}
              dataKey="name"
              stroke="#9ca3af"
            />
            <YAxis tick={{ fill: "#9ca3af", fontSize: 13 }} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="vaccines"
              stroke="#3B82FF"
              strokeWidth={4}
              activeDot={{ r: 8, strokeWidth: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default VaccineOverviewChart;
