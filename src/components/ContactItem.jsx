import { useState } from "react";
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
      className="contactContainerItem"
      style={{
        backgroundColor: theme,
        // borderBottomColor: theme,
        // borderRightColor: theme,
        // border: `2px solid ${theme}`,
      }}
    >
      <div className="contactItem" style={{ color: theme }}>
        <div className="contactImg">
          <img
            className="contactPicture"
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
          className="contactMoreDetailButton"
          style={{
            backgroundColor: theme,
          }}
          onClick={handleShowDetails}
        >
          {btnText}
        </button>
      </div>
      {/*  Contact Detail */}
      {showModalDetails && (
        <div
          className="contactContainerDetail "
          style={{
            backgroundColor: theme,
            // borderBottomColor: theme,
            // borderRightColor: theme,
            // border: `2px solid ${theme}`,
          }}
        >
          <div
            className="contactDetailRow"
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
            className="contactDetailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>📞</p>
            <p>
              <strong>Phone: </strong>
              {props.phone}
            </p>
          </div>
          <div
            className="contactDetailRow"
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
            className="contactDetailRow"
            style={{ color: theme, borderColor: theme }}
          >
            <p>✉️</p>
            <p>
              <strong>Email:</strong> {props.email}
            </p>
          </div>
          <div
            className="contactDetailRow"
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
