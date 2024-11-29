import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCards from "../components/common/StatCards";
import { BarChart, Syringe, Users, Zap } from "lucide-react";
import VaccineOverviewChart from "../components/overview/VaccineOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import VaccineChannelChart from "../components/overview/VaccineChannelChart";

const Overview = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCards
            name="Total Vaccination"
            icon={Zap}
            value="2220"
            color="#6366F1"
          />
          <StatCards
            name="New Users"
            icon={Users}
            value="1500"
            color="#000000"
          />
          <StatCards
            name="Total Vaccine-types"
            icon={Syringe}
            value="12"
            color="#EC4899"
          />
          <StatCards
            name="Growth Rate"
            icon={BarChart}
            value="19%"
            color="#108981 "
          />
        </motion.div>
        {/* charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VaccineOverviewChart />
          <CategoryDistributionChart />
          <VaccineChannelChart />
        </div>
      </main>
    </div>
  );
};

export default Overview;
