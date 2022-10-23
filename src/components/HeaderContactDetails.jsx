import "./HeaderContact.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../Contexts/ColorContext";

const HeaderContactDetails = () => {
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="headerContact" style={{ backgroundColor: theme }}>
      <h1>Contact-Details</h1>
      <button
        onClick={() => navigate("/contact")}
        className="contactBack"
        style={{ color: theme, borderColor: theme }}
      >
        Back to Contact-List
      </button>
    </div>
  );
};

export default HeaderContactDetails;
