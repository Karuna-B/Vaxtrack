import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </div>
  );
};

export default App;
