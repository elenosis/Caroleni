import "./ContactItem.css";
// import Hugo from "../images/Hugo.jpg";
import { useState } from "react";
// import { useNavigate, } from "react-router-dom";
import ThemeContext from "../Contexts/ColorContext";

import { useContext } from "react";

const ContactItem = (props) => {
  const [theme] = useContext(ThemeContext);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [btnText, setBtnText] = useState("View more Details");

  const handleShowDetails = () => {
    btnText === "View more Details"
      ? setBtnText("Close")
      : setBtnText("View more Details");
    showModalDetails === true
      ? setShowModalDetails(false)
      : setShowModalDetails(true);
  };

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
        <div className="contactImg">
          <img
            className="picture"
            src={props.image}
            alt={props.firstname}
            width="100"
          />
        </div>
        <div className="contactName">
          <p>
            👤 {props.lastname}, {props.firstname}
          </p>
        </div>
        <div className="contactBirthday">
          <p> 🎂 Birthday: {props.birthday}</p>
        </div>
        <button
          onClick={handleShowDetails}
          className="moreDetailButton"
          style={{ color: theme, borderColor: theme }}
        >
          {btnText}
        </button>
      </div>
      {showModalDetails && (
        <div
          className="containerContactDetail "
          style={{
            backgroundColor: theme,
            borderBottomColor: theme,
            borderRightColor: theme,
            border: `2px solid ${theme}`,
          }}
        >
          <div
            className="detailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>👤</p>
            <p>Firstname {props.firstname} </p>
            <p>Lastname {props.lastname}</p>
          </div>
          <div
            className="detailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>📞</p>
            <p>Phone {props.phone}</p>
            <p>Mobile {props.mobilePhone}</p>
          </div>
          <div
            className="detailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>🏙</p>
            <p>City {props.city}</p>
            <p>Street {props.street}</p>
          </div>
          <div
            className="detailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>✉️</p>
            <p>Email {props.email}</p>
          </div>
          <div
            className="detailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>🎂</p>
            <p>Birthday {props.birthday}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactItem;
