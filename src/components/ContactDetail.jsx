import "./ContactDetail.css";
import HeaderContactDetails from "./HeaderContactDetails";
import Footer from "./Footer";
import ThemeContext from "../Contexts/ColorContext";
import { useContext } from "react";

// props functionieren hier nicht!!!

const ContactDetail = (props) => {
  const [theme] = useContext(ThemeContext);
  return (
    <>
      <HeaderContactDetails />
      <div
        className="containerContactDetail "
        style={{
          backgroundColor: theme,
          borderBottomColor: theme,
          borderRightColor: theme,
          border: `2px solid ${theme}`,
        }}
      >
        <div className="detailRow" style={{ color: theme, borderColor: theme }}>
          <p>👤</p>
          <p>Firstname {props.firstname} </p>
          <p>Lastname {props.lastname}</p>
        </div>
        <div className="detailRow" style={{ color: theme, borderColor: theme }}>
          <p>📞</p>
          <p>Phone {props.phone}</p>
          <p>Mobile {props.mobilePhone}</p>
        </div>
        <div className="detailRow" style={{ color: theme, borderColor: theme }}>
          <p>🏙</p>
          <p>City {props.city}</p>
          <p>Street {props.street}</p>
        </div>
        <div className="detailRow" style={{ color: theme, borderColor: theme }}>
          <p>✉️</p>
          <p>Email {props.email}</p>
        </div>
        <div className="detailRow" style={{ color: theme, borderColor: theme }}>
          <p>🎂</p>
          <p>Birthday {props.birthday}</p>
        </div>
        {/* <div className="sidePicture">image</div> */}
        {/* picture fehlt noch .... */}
      </div>

      <Footer />
    </>
  );
};

export default ContactDetail;
