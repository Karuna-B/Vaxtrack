import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HeatMap from "./pages/HeatMap";
import ContactUs from "./pages/ContactUs";
import VaccineInfo from "./pages/VaccineInfo";
import UserInfo from "./pages/UserInfo";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar/>
      <Routes>
        s
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="/vaccine" element={<VaccineInfo />} />
        <Route path="/heatmap" element={<HeatMap />} />
      </Routes>
    </div>
  );
};

export default App;
