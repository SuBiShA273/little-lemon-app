import { useNavigate } from "react-router-dom";
import intro from "../images/intro.jpg";
function CallToAction() {
  const navigate = useNavigate();

  return (
    <div className="call">
      <div className="text">
      <p id="head">Little Lemon</p>
      <p id="content">We are a family-owned Mediterranean restaurant, focused on
traditional recipes served with a modern twist. Experience the
authentic flavors of the Mediterranean in the heart of Chicago.</p>
      <button onClick={() => navigate("/booking")}>
        Reserve a table
      </button>
      </div>
      <div id="imagbox">
      <img src={intro} alt="Little Lemon Restaurant" id="image"/>
      </div>
    </div>
  );
}
export default CallToAction;