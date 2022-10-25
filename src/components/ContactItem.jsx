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
          style={{
            border: `2px solid transparent`,
            backgroundColor: theme,
          }}
        >
          {btnText}
        </button>
      </div>
      {/*  Contact Detail */}
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
            <p>
              <strong>Firstname:</strong> {props.firstname}{" "}
            </p>
            <p>
              <strong>Lastname:</strong> {props.lastname}
            </p>
          </div>
          <div
            className="detailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>📞</p>
            <p>
              <strong>Phone: </strong>
              {props.phone}
            </p>
            {/* <p>
              <strong>Mobile:</strong> {props.mobilePhone}
            </p> */}
          </div>
          <div
            className="detailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>🏙</p>
            <p>
              <strong>City:</strong> {props.city}
            </p>
            <p>
              <strong>Street: </strong>
              {props.street}
            </p>
          </div>
          <div
            className="detailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>✉️</p>
            <p>
              <strong>Email:</strong> {props.email}
            </p>
          </div>
          <div
            className="detailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>🎂</p>
            <p>
              <strong> Birthday: </strong>
              {props.birthday}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactItem;
