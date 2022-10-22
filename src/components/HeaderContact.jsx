import "./HeaderContact.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const HeaderContact = () => {
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="headerContact" style={{ backgroundColor: theme }}>
      <h1>Contact-List</h1>
      <button
        onClick={() => navigate("/main")}
        className="contactBack"
        style={{ color: theme, borderColor: theme }}
      >
        back to Main
      </button>
    </div>
  );
};

export default HeaderContact;
