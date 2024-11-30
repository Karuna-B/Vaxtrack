import React from "react";
import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#4F46E5", "#D946EF", "#10B981", "#F43F5E"];

const VACCINE_CHANNEL_DATA = [
  { name: "Health Posts", value: 70000 },
  { name: "Government Hospitals", value: 55000 },
  { name: "Private Hospitals", value: 45000 },
  { name: "Health Volunteers", value: 60000 },
];

const VaccineChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-300  backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.44 }}
    >
      {/* Chart Header */}
      <h2 className="text-lg font-medium mb-4 text-gray-800 text-center">
        Vaccination Channels
      </h2>

      {/* Chart Container */}
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={VACCINE_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6B7280" />{" "}
            {/* Subtle grid lines */}
            {/* XAxis Styling */}
            <XAxis
              dataKey="name"
              stroke="#D1D5DB"
              tick={{ fill: "", fontSize: 13 }}
              tickLine={false}
              axisLine={{ stroke: "#9CA3AF" }}
            />
            {/* YAxis Styling */}
            <YAxis
              stroke="#D1D5DB"
              tick={{ fill: "", fontSize: 13 }}
              tickLine={false}
              axisLine={{ stroke: "#9CA3AF" }}
            />
            {/* Tooltip Styling */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{
                color: "#E5E7EB",
              }}
              cursor={{ fill: "rgba(75,85,99,0.2)" }}
            />
            {/* <Legend content={null} /> */}
            {/* Bars with Dynamic Colors */}
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {VACCINE_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default VaccineChannelChart;
