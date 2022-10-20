import Quote from "./Quote";
import Weather from "./Weather";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import CurrentDate from "./CurrentDate";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <CurrentDate />
      <Weather />
      <Quote />
      <button>Diary - push to enter</button>
      <button onClick={() => navigate("/contact")}>
        Contacts - push to enter
      </button>
    </div>
  );
};

export default Sidebar;
