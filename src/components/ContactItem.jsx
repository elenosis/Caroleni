import "./ContactItem.css";
// import Hugo from "../images/Hugo.jpg";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../Contexts/ColorContext";
import { useContext } from "react";

const ContactItem = (props) => {
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div
      className="containerContactItem"
      style={{
        backgroundColor: theme,
        borderBottomColor: theme,
        borderRightColor: theme,
        border: `2px solid ${theme}`,
      }}
    >
      <div className="item" style={{ color: theme, borderColor: theme }}>
        <div className="img">
          <img src={props.image} alt={props.firstname} width="100" />
        </div>
        <div className="name">
          <p>
            {" "}
            👤 {props.lastname}, {props.firstname}
          </p>
        </div>
        <div className="birthday">
          <p> 🎂 Birthday: {props.birthday}</p>
        </div>
        <button
          onClick={() => navigate("/contactDetail")}
          className="moreDetailButton"
          style={{ color: theme, borderColor: theme }}
        >
          View more Details
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
