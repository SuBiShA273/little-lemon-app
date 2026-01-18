import Nav from "./Nav.js";
import Footer from "./Footer.js";

function Booking({ bookings }) {
    return (
        <>
        <Nav />
        <h1>Available Bookings</h1>
        {bookings.length === 0 ? (
            <p>No bookings yet.</p>
        ) : (
            bookings.map((book, index) => (
                <div key={index} className="booking-confirmation">
                    <p>Date: {book.date}</p>
                    <p>Time: {book.time}</p>
                    <p>Number of Guests: {book.guests}</p>
                    <p>Occasion: {book.occasion}</p>
                </div>
            ))
        )}
        <Footer />
        </>
    );
}
export default Booking;