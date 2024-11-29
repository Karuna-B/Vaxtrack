import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-300 bg-opacity-50 backdrop-blur-md border-gray-400 shadow-xl border-b-[2px]">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
