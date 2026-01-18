import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Bookingpage from "./pages/Bookingpage";
import Booking from "./components/Booking";
import "./App.css";

function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (bookingData) => {
    setBookings((prev) => [...prev, bookingData]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<Bookingpage addBooking={addBooking} />}
        />
        <Route
          path="/bookings"
          element={<Booking bookings={bookings} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
