import "./HeaderContact.css";
import { useNavigate } from "react-router-dom";

const HeaderContactDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="headerContact">
      <h1>Contact-Details</h1>
      <button onClick={() => navigate("/contact")} className="contactBack">
        Back to Contact-List
      </button>
    </div>
  );
};

export default HeaderContactDetails;
