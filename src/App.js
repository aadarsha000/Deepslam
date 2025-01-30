// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Assuming Home is the home screen component
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your route for the home screen */}
        <Route path="/" element={<Home />} />

        {/* Add other routes as needed */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
