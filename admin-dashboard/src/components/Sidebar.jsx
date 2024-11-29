import React, { useState } from "react";
import { BarChart2, Menu, TrendingUp, User2, Users } from "lucide-react"; // Fixed import
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", path: "/" },
  { name: "Users", icon: Users, color: "#EC4899", path: "/users" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", path: "/analytics" },
  { name: "Add New", icon: User2, color: "#6EE7B7", path: "/add" }, // Fixed icon name
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-100 ease-in-out flex-shrink-0  ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 90 }}
    >
      <div className="h-full bg-gray-300 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r-[2px] border-gray-400 shadow-xl">
        {/* Toggle Sidebar Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md bg-gray-600 hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={30} />
        </motion.button>

        {/* Navigation Links */}
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 text-sm font-medium rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors mb-2"
              >
                <item.icon size={28} style={{ color: item.color, minWidth:"28px" }} />

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width:"auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
