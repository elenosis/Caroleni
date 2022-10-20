import Quote from "./Quote";
import Weather from "./Weather";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
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
