import React from "react";
import { LogOut } from "lucide-react";
import vaxtrack_logo from "../../assets/vaxtrack_logo.png";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-300 bg-opacity-50 backdrop-blur-md border-gray-400 shadow-xl border-b-[2px]">
      <div className="flex justify-between items-center mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <img src={vaxtrack_logo} alt="Logo" className="w-20 rounded-lg" />
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

        <button
          onClick={() => console.log("Logout clicked")}
          className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors bg-gray-200 p-3 rounded-lg"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
