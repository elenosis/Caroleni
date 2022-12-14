import Quote from "./Quote";
import Weather from "./Weather";
import { useNavigate } from "react-router-dom";
import CurrentDate from "./CurrentDate";
import Weekend from "./Weekend";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Sidebar = ({ city }) => {
  console.log(city);
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
      <Weekend />
      <Weather city={city} />
      <Quote />
      <button
        className="sidebarButton"
        style={{
          backgroundColor: theme,
        }}
        onClick={() => navigate("/diary")}
      >
        DIARY - Click to Enter
      </button>
      <button
        className="sidebarButton"
        style={{
          backgroundColor: theme,
        }}
        onClick={() => navigate("/contact")}
      >
        CONTACTS - Click to Enter
      </button>
    </div>
  );
};

export default Sidebar;
