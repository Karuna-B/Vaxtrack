import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#6366F1",

  "#EC4899",
  "#885CF6",
  "#14B8A6",
  "#4B40A3",
  "#108981",
  "#F97316",
];

const categoryData = [
  { name: "Polio", value: 55000 },
  { name: "Measles", value: 43000 },
  { name: "Hep-B", value: 50000 },
  { name: "DDT", value: 40000 },
  { name: "BCG", value: 60000 },
  { name: "J-Encephalitis", value: 35000 },
];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className="bg-gray-300  backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-800">
        Category Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={categoryData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart;
