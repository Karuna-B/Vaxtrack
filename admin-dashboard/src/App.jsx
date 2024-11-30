import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import './index.css';
import Sidebar from "./components/Sidebar";
import AddUser from "./pages/AddUser";
import UpdateUserVaccines from './pages/UpdateUserVaccines/'
import UsersList from "./pages/Users";
import Login from "./pages/Login";

const App = () => {
  
  return (
    <div className="flex h-screen bg-lime-300 text-gray-100 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/adduser" element={<AddUser  />}/>
        <Route path='/updateuser' element={<UpdateUserVaccines/>}/>
        <Route path ='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
};


export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default App;
