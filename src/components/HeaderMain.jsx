import "./HeaderMain.css";
import { useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const navigate = useNavigate();
  return (
    <div className="headerMain">
      <h1> Main</h1>
      <button onClick={() => navigate("/")} className="mainBack">
        Back to Start
      </button>
    </div>
  );
};

export default HeaderMain;
