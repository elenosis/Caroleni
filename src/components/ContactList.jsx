import HeaderContact from "./HeaderContact";
import Footer from "./Footer";
import "./ContactList.css";
import ContactItem from "./ContactItem";

const contactArray = [
  {
    firstname: "Hugo",
    lastname: "Alos",
    birthday: "15.10.1955",
    city: "Hamburg",
    street: "HAnsestrasse 5",
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
  let content;
  if (contactArray.length > 0) {
    content = contactArray.map((contact) => {
      return (
        <ContactItem
          firstname={contact.firstname}
          lastname={contact.lastname}
          birthday={contact.birthday}
          // phone={contact.phone}
          // mobile={contact.mobile}
          // city={contact.city}
          // street={contact.street}
          // email={contact.email}
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
      <div className="containerContactList">
        <div className="contactBox">
          <ul className="contactList">
            <li className="contactItem"> {content}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactList;
