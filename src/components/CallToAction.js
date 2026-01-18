import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Little Lemon</h1>
      <p>Delicious food delivered fast!</p>
      <button onClick={() => navigate("/booking")}>
        Reserve a table
      </button>
    </div>
  );
}
export default CallToAction;