import HeaderContact from "./HeaderContact";
import ContactItem from "./ContactItem";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../Contexts/ColorContext";
import Modal from "./Modal.jsx";

const contactArray = [
  {
    firstname: "Nils",
    lastname: "Holgerson",
    birthday: "1995-10-20",
    city: "Köln",
    street: "Rheinstrasse 75",
    phone: "+49 1234 56788",
    email: "nils.holgerson@gmail.com",
    image: "../images/Nils.jpg",
  },
  {
    firstname: "Antonia",
    lastname: "Bertram",
    birthday: "2000-11-15",
    city: "Berlin",
    street: "Niemetzstrassse 27",
    phone: "+49 1234 56788",
    email: "antonia.bertram@gmail.com",
    image: "../images/Antonia.jpg",
  },
  {
    firstname: "Hugo",
    lastname: "Alos",
    birthday: "1955-10-15",
    city: "Hamburg",
    street: "Hansestrasse 5",
    phone: "+49 1234 56788",
    email: "hugo.alos@gmail.com",
    image: "../images/Hugo.jpg",
  },
];

const ContactList = () => {
  const [contactEntries, setContactEntries] = useState(contactArray);
  const [contactEntry, setContactEntry] = useState("");
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputImage, setInputImage] = useState("../images/Dummy.jpg");
  const [inputStreet, setInputStreet] = useState("");
  const [inputBirthday, setInputBirthday] = useState("");
  const [theme] = useContext(ThemeContext);
  const [showModalNewContact, setShowModalNewContact] = useState(false);
  const [zIndex, setZIndex] = useState(1);

  // const [show, setShow] = useState("");

  useEffect(() => {
    const contactLocalStorage = localStorage.getItem("contactEntries");
    if (contactLocalStorage !== null) {
      setContactEntries(JSON.parse(contactLocalStorage));
    }
  }, []);

  const addNewContactEntry = () => {
    const newContactEntry = {
      firstname: inputFirstname,
      lastname: inputLastname,
      birthday: inputBirthday,
      city: inputCity,
      street: inputStreet,
      phone: inputPhone,
      email: inputEmail,
      image: inputImage,
    };
    const newContactEntries = [newContactEntry, ...contactEntries];
    setContactEntries(newContactEntries);
    localStorage.setItem("contactEntries", JSON.stringify(newContactEntries));
    setShowModalNewContact(false);
    setZIndex(1);
  };

  const handleSubmitNewEntry = (event) => {
    const newContactEntry = {
      firstname: inputFirstname,
      lastname: inputLastname,
      birthday: inputBirthday,
      city: inputCity,
      street: inputStreet,
      phone: inputPhone,
      email: inputEmail,
      image: inputImage,
    };
    const newEntries = [newContactEntry, ...contactEntries];
    event.preventDefault();
    addNewContactEntry();
    setInputFirstname("");
    setInputLastname("");
    setInputPhone("");
    setInputEmail("");
    setInputCity("");
    setInputStreet("");
    setInputBirthday("");
    setInputImage(inputImage);
    setContactEntries(newEntries);
    setContactEntry("");
  };

  const handleAddNewContact = () => {
    setShowModalNewContact(true);
    setZIndex(-1);
    setContactEntry();
  };

  const handleBackToContactList = () => {
    setShowModalNewContact(false);
    setZIndex(-1);
    setContactEntry("");
  };

  let content;
  if (contactEntries.length > 0) {
    content = contactEntries.map((contact) => {
      return (
        <ContactItem
          firstname={contact.firstname}
          lastname={contact.lastname}
          birthday={contact.birthday}
          phone={contact.phone}
          city={contact.city}
          street={contact.street}
          email={contact.email}
          image={contact.image}
        />
      );
    });
  } else {
    content = <h1 style={{ color: theme }}>No contact available</h1>;
  }

  return (
    <>
      <HeaderContact />
      {/* <div className={show}> */}
      <div>
        <div className="contactListBox">
          <button
            onClick={handleAddNewContact}
            className="contactListAddButton"
            style={{
              backgroundColor: theme,
            }}
          >
            Add new Contact
          </button>
          <ul className="contactListUl">
            <li> {content}</li>
          </ul>
        </div>
      </div>
      {/* Input New Contact */}
      {showModalNewContact ? (
        <Modal>
          <form className="contactModalForm" onSubmit={handleSubmitNewEntry}>
            {/* <div className="contactListForm"> */}
            <input
              className="contactListNewInput"
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
              className="contactListNewInput"
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
              className="contactListNewInput"
              type="tel"
              id="input-phone"
              name="phone"
              placeholder=" 📞 +49 1234 56789"
              onChange={(event) => setInputPhone(event.target.value)}
              value={inputPhone}
              style={{ border: `2px solid ${theme}` }}
            />
            <input
              className="contactListNewInput"
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
              className="contactListNewInput"
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
              className="contactListNewInput"
              type="text"
              id="input-street"
              name="street"
              placeholder=" 🏡 Street"
              onChange={(event) => setInputStreet(event.target.value)}
              value={inputStreet}
              style={{ border: `2px solid ${theme}` }}
            />
            <label htmlFor="input-Birthday" className="labelBirthday">
              🎂 Birthday:
            </label>
            <input
              className="contactListNewInput"
              type="date"
              id="input-birthday"
              name="birthday"
              required
              onChange={(event) => setInputBirthday(event.target.value)}
              value={inputBirthday}
              style={{ border: `2px solid ${theme}` }}
            />
            <div className="contactModalButtons">
              <button
                className="contactListButtonNewContact"
                style={{
                  backgroundColor: theme,
                }}
              >
                Save
              </button>
              <button
                onClick={handleBackToContactList}
                className="contactListButtonNewContact"
                style={{
                  backgroundColor: theme,
                }}
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default ContactList;
