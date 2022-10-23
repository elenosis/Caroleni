import "./ContactDetail.css";
import HeaderContactDetails from "./HeaderContactDetails";
import Footer from "./Footer";

const ContactDetail = (props) => {
  return (
    <>
      <HeaderContactDetails />
      <div className="containerContactDetail">
        <div className="contactBoxDetail">
          <p className="name">Firstname</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactDetail;
