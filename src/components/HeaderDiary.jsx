import "./HeaderDiary.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const HeaderDiary = () => {
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="headerDiary" style={{ backgroundColor: theme }}>
      <h1>Dear Diary...</h1>
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

export default HeaderDiary;
