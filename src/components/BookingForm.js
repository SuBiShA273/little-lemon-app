import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes = [], updateTimes = () => {}, addBooking = () => {} }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 🔥 update available times when date changes
    if (name === "date" && updateTimes) {
      updateTimes(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(formData);
    setFormData({
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label>Time</label>
      <select
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label>Guests</label>
      <input
        type="number"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />

      <label>Occasion</label>
      <select
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
      </select>

      <button type="submit">Make Reservation</button>
    </form>
  );
}

export default BookingForm;
