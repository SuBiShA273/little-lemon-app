import Nav from "../components/Nav.js";
import CallToAction from "../components/CallToAction.js";
import Specials from "../components/Specials.js";
import CustomersSay from "../components/CustomersSay.js";
import Chicago from "../components/Chicago.js";
import Footer from "../components/Footer.js";

function Homepage() {
  return (
    <div>
      <Nav />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </div>
  );
}

export default Homepage;
