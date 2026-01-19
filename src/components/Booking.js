import Nav from "./Nav.js";
import Footer from "./Footer.js";

function Booking({ bookings }) {
    return (
        <>
        <Nav />
        <div className="b">
        <p style={{fontSize:"35px",fontWeight:"900px",textAlign:"center",paddingTop:"10px"}}>Current Table Bookings</p>
        <div className="bb">
        {bookings.length === 0 ? (
            <p style={{fontSize:"35px",fontWeight:"900px",textAlign:"center",color:"black"}}>No bookings yet.</p>
        ) : (
            bookings.map((book, index) => (
                <div key={index} className="booking-confirmation">
                
                <div className="booking-row">
                  <span className="label">Date</span>
                  <span className="value">{book.date}</span>
                </div>

                <div className="booking-row">
                  <span className="label">Time</span>
                  <span className="value">{book.time}</span>
                </div>

                <div className="booking-row">
                  <span className="label">Number of Guests</span>
                  <span className="value">{book.guests}</span>
                </div>

                <div className="booking-row">
                  <span className="label">Occasion</span>
                  <span className="value">{book.occasion}</span>
                </div>

              </div>
            ))
        )}
        </div>
        </div>
        <Footer />
        </>
    );
}
export default Booking;