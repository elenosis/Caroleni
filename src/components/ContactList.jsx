import HeaderContact from "./HeaderContact";
import Footer from "./Footer";
import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../Contexts/ColorContext";
// import Modal from "./components/Modal";

const contactArray = [
  {
    firstname: "Hugo",
    lastname: "Alos",
    birthday: "15.10.1955",
    city: "Hamburg",
    street: "Hansestrasse 5",
    phone: "+49 1234 56788",
    mobile: "+49 1234 56788",
    email: "hugo.alos@gmail.com",
    image: "../images/Hugo.jpg",
  },
  {
    firstname: "Antonia",
    lastname: "Bertram",
    birthday: "15.10.2000",
    city: "Berlin",
    street: "Niemetzstrassse 27",
    phone: "+49 1234 56788",
    mobile: "+49 1234 56788",
    email: "antonia.bertram@gmail.com",
    image: "../images/Antonia.jpg",
  },
  {
    firstname: "Nils",
    lastname: "Holgerson",
    birthday: "15.10.1995",
    city: "Köln",
    street: "Rheinstrasse 75",
    phone: "+49 1234 56788",
    mobile: "+49 1234 56788",
    email: "nils.holgerson@gmail.com",
    image: "../images/Nils.jpg",
  },
];

const ContactList = () => {
  const [contacts, setContacts] = useState(contactArray);
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMobilePhone, setInputMobilePhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputImage, setInputImage] = useState("../images/Louisa.jpg");
  const [inputStreet, setInputStreet] = useState("");
  const [inputBirthday, setInputBirthday] = useState("");
  const [theme] = useContext(ThemeContext);
  const [showModalNewContact, setShowModalNewContact] = useState(false);
  const [show, setShow] = useState("");

  useEffect(() => {
    const contactsLocalStorage = localStorage.getItem("contacts");
    if (contactsLocalStorage !== null) {
      setContacts(JSON.parse(contactsLocalStorage));
    }
  }, []);

  const addNewContact = () => {
    const newContact = {
      firstname: inputFirstname,
      lastname: inputLastname,
      birthday: inputBirthday,
      city: inputCity,
      street: inputStreet,
      phone: inputPhone,
      mobile: inputMobilePhone,
      email: inputEmail,
      image: inputImage,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewContact();
    setInputFirstname("");
    setInputLastname("");
    setInputPhone("");
    setInputMobilePhone("");
    setInputEmail("");
    setInputCity("");
    setInputStreet("");
    setInputBirthday("");
    setInputImage(inputImage);
  };
  const handleAddNewContact = () => {
    setShow("show");
    setShowModalNewContact(true);
  };

  const handleBackToContactList = () => {
    setShow("");
    setShowModalNewContact(false);
  };

  let content;
  if (contactArray.length > 0) {
    content = contacts.map((contact) => {
      console.log(contact.birthday);
      return (
        <ContactItem
          firstname={contact.firstname}
          lastname={contact.lastname}
          birthday={contact.birthday}
          phone={contact.phone}
          mobile={contact.mobile}
          city={contact.city}
          street={contact.street}
          email={contact.email}
          image={contact.image}
        />
      );
    });
  } else {
    content = <h2>No contact available</h2>;
  }

  return (
    <>
      <HeaderContact />
      <div className={show}>
        <div className="containerContactList">
          <div className="contactBox">
            <ul className="contactUList">
              <li className="contactLi"> {content}</li>
            </ul>
            <button
              onClick={handleAddNewContact}
              className="addContactButton"
              style={{ color: theme, borderColor: theme }}
            >
              Add new Contact
            </button>
          </div>
        </div>
      </div>
      {showModalNewContact && (
        <div>
          <div>
            <h1 className="headerLogin" style={{ color: theme }}>
              New Contact
            </h1>
            <div
              className="newContactBox"
              style={{ border: `2px solid ${theme}` }}
            >
              <form onSubmit={handleSubmit}>
                <div className="formContact">
                  {/* <label htmlFor="input-Firstname">Firstname</label> */}
                  <input
                    className="inputContact"
                    type="text"
                    id="input-firstname"
                    name="firstname"
                    placeholder=" 👤 Firstname"
                    required
                    onChange={(event) => setInputFirstname(event.target.value)}
                    value={inputFirstname}
                    style={{ border: `2px solid ${theme}` }}
                  />
                  <input
                    className="inputContact"
                    type="text"
                    id="input-lastname"
                    name="lastname"
                    placeholder=" 👤 Lastname"
                    required
                    onChange={(event) => setInputLastname(event.target.value)}
                    value={inputLastname}
                    style={{ border: `2px solid ${theme}` }}
                  />
                  <input
                    className="inputContact"
                    type="tel"
                    id="input-phone"
                    name="phone"
                    placeholder=" 📞 +49 1234 56789"
                    onChange={(event) => setInputPhone(event.target.value)}
                    value={inputPhone}
                    style={{ border: `2px solid ${theme}` }}
                  />
                  <input
                    className="inputContact"
                    type="tel"
                    id="input-mobilePhone"
                    name="mobilePhone"
                    placeholder=" 📱 +49 1234 56789"
                    onChange={(event) => setInputPhone(event.target.value)}
                    value={inputMobilePhone}
                    style={{ border: `2px solid ${theme}` }}
                  />
                  <input
                    className="inputContact"
                    type="email"
                    id="input-email"
                    name="email"
                    placeholder=" ✉️ hallo@email.com"
                    required
                    onChange={(event) => setInputEmail(event.target.value)}
                    value={inputEmail}
                    style={{ border: `2px solid ${theme}` }}
                  />
                  <input
                    className="inputContact"
                    type="text"
                    id="input-city"
                    name="city"
                    placeholder=" 🏙 City"
                    required
                    onChange={(event) => setInputCity(event.target.value)}
                    value={inputCity}
                    style={{ border: `2px solid ${theme}` }}
                  />
                  <input
                    className="inputContact"
                    type="text"
                    id="input-street"
                    name="street"
                    placeholder=" 🏡 Street"
                    onChange={(event) => setInputStreet(event.target.value)}
                    value={inputStreet}
                    style={{ border: `2px solid ${theme}` }}
                  />
                  <label htmlFor="input-Birthday" className="label">
                    {" "}
                    🎂 Birthday:
                  </label>
                  <input
                    className="inputContact"
                    type="date"
                    id="input-birthday"
                    name="birthday"
                    required
                    onChange={(event) => setInputBirthday(event.target.value)}
                    value={inputBirthday}
                    style={{ border: `2px solid ${theme}` }}
                  />

                  <button
                    className="submitContact"
                    style={{
                      border: `2px solid transparent`,
                      backgroundColor: theme,
                    }}
                  >
                    Submit
                  </button>
                  <button
                    onClick={handleBackToContactList}
                    className="submitContact"
                    style={{
                      border: `2px solid transparent`,
                      backgroundColor: theme,
                    }}
                  >
                    Back to Contact-List
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ContactList;
