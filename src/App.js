import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Bookingpage from "./pages/Bookingpage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Bookingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
