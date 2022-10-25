import "./HeaderMain.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const HeaderContact = () => {
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="header" style={{ backgroundColor: theme }}>
      <h1>Contact</h1>
      <button
        onClick={() => navigate("/main")}
        className="back"
        style={{ color: theme, borderColor: theme }}
      >
        Back to Main
      </button>
    </div>
  );
};

export default HeaderContact;
