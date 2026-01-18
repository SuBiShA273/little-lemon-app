// Mock available times - in a real app, this would come from a backend
const availableTimes = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

// Fetch available times for a given date
export const fetchAPI = (date) => {
  // In a real app, you'd fetch from a backend API
  // For now, return the same times for any date
  return availableTimes;
};

// Submit a booking
export const submitAPI = (formData) => {
  // In a real app, you'd send this to a backend API
  console.log("Booking submitted:", formData);
  // Return true for success (in real app, this would depend on the API response)
  return true;
};
