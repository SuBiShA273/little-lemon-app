import { useState } from "react";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import BookingForm from "../components/BookingForm.js";
import Main from "../components/Main.js";

function Bookingpage({ addBooking }) {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ]);

  const updateTimes = (date) => {
    // You can add logic here to fetch available times based on date
    // For now, it returns the same times
    setAvailableTimes([
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
    ]);
  };

  return (
    <div>
      <Nav />
      <Main />
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        addBooking={addBooking}
      />
      <Footer />
    </div>
  );
}

export default Bookingpage;