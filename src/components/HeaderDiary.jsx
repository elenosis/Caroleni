// import "./HeaderMain.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const HeaderDiary = () => {
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="header" style={{ backgroundColor: theme }}>
      <h1>Diary</h1>
      <button
        className="backButton"
        style={{ backgroundColor: theme }}
        onClick={() => navigate("/main")}
      >
        Back to Main
      </button>
    </div>
  );
};

export default HeaderDiary;
