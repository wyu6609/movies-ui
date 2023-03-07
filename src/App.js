import react, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Route1 from "./routes/Route1";
import Route2 from "./routes/Route2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />

        {/* edit routes and corresponding components */}
        <Route path="/route1" element={<Route1 />} />
        <Route path="/route2" element={<Route2 />} />
      </Routes>
    </div>
  );
}

export default App;
