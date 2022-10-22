import "./HeaderMain.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const HeaderMain = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const navigate = useNavigate();
  return (
    <div className="headerMain" style={{ backgroundColor: theme }}>
      <div>
        <label>Select Theme:</label>
        <select
          name="theme"
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          onBlur={(e) => setTheme(e.target.value)}
        >
          <option value="peru">Peru</option>
          <option value="blue">Blue</option>
          <option value="chartreuse">Chartreuse</option>
          <option value="mediumorchid">Medium Orchid</option>
        </select>
      </div>
      <h1> Main</h1>
      <button onClick={() => navigate("/")} className="mainBack">
        Back to Start
      </button>
    </div>
  );
};

export default HeaderMain;
