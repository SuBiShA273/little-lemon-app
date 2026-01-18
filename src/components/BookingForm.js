import { useState, useEffect } from "react";

function BookingForm({ availableTimes, updateTimes, addBooking }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // 🔹 Validate form whenever data changes
  useEffect(() => {
    const isValid =
      formData.date !== "" &&
      formData.time !== "" &&
      formData.guests >= 1 &&
      formData.guests <= 20 &&
      formData.occasion !== "";

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "date") {
      updateTimes(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    addBooking(formData);
    alert("Booking confirmed!");

    setFormData({
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    });
  };

  return (
    <div className="booking-form-box">
      <h1>Reserve a Table</h1>

      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Time:</label>
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

        <label>Number of Guests:</label>
        <input
          type="number"
          name="guests"
          min="1"
          max="20"
          value={formData.guests}
          onChange={handleChange}
        />

        <label>Occasion:</label>
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

        {/* 🔥 Disabled until form is valid */}
        <button type="submit" disabled={!isFormValid}>
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
