import Quote from "./Quote";
import Weather from "./Weather";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import CurrentDate from "./CurrentDate";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Sidebar = () => {
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: theme,
        border: `2px solid ${theme}`,
      }}
    >
      <CurrentDate />
      <Weather />
      <Quote />
      <button
        style={{
          color: theme,
          borderBottomColor: theme,
          borderRightColor: theme,
          border: `2px solid ${theme}`,
        }}
      >
        Diary - click to enter
      </button>
      <button
        onClick={() => navigate("/contact")}
        style={{
          color: theme,
          border: `2px solid ${theme}`,
          borderBottomColor: theme,
          borderRightColor: theme,
        }}
      >
        Contacts - click to enter
      </button>
    </div>
  );
};

export default Sidebar;
