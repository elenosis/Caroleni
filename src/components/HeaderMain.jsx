import "./HeaderMain.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const HeaderMain = () => {
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="headerMain" style={{ backgroundColor: theme }}>
      <h1> Main</h1>
      <button
        onClick={() => navigate("/")}
        style={{ color: theme, borderColor: theme }}
        className="mainBack"
      >
        Back to Start
      </button>
    </div>
  );
};

export default HeaderMain;
