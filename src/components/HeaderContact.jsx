import "./HeaderContact.css";
import { useNavigate } from "react-router-dom";

const HeaderContact = () => {
  const navigate = useNavigate();
  return (
    <div className="headerContact">
      <h1>Contact-List</h1>
      <button onClick={() => navigate("/main")} className="contactBack">
        {" "}
        back to Main
      </button>
    </div>
  );
};

export default HeaderContact;
