import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

const DEFAULT_TIMES = [
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
];

function Bookingpage({ addBooking }) {
  const [availableTimes, setAvailableTimes] = useState(DEFAULT_TIMES);

  // Reset times when date changes (simple version)
  const updateTimes = () => {
    setAvailableTimes(DEFAULT_TIMES);
  };

  const handleAddBooking = (bookingData) => {
    addBooking(bookingData);

    // ❌ prevent double booking
    setAvailableTimes((prev) =>
      prev.filter((time) => time !== bookingData.time)
    );
  };

  return (
    <div>
      <Nav />

      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        addBooking={handleAddBooking}
      />

      <Footer />
    </div>
  );
}

export default Bookingpage;
