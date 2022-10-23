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
      <div className="item">
        <div className="img">
          <img src={props.image} alt={props.firstname} width="100" />
        </div>
        <p className="name">
          {props.lastname}, {props.firstname}
        </p>
        <p className="birthday"> 🎂 Birthday: {props.birthday}</p>
        <button
          onClick={() => navigate("/contactDetail")}
          className="moreDetailButton"
        >
          view more Details
        </button>
      </div>
    </div>
  );
};

export default ContactItem;

//Modal?
