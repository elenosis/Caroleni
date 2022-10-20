import HeaderContact from "./HeaderContact";
import Footer from "./Footer";
import "./ContactList.css";

const ContactList = () => {
  return (
    <>
      <div className="containerContactList">
        <HeaderContact />
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactList;
