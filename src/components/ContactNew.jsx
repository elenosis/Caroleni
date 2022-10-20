import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ContactNew.css";

const Contact = () => {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMobilePhone, setInputMobilePhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputStreet, setInputStreet] = useState("");
  const [inputBirthday, setInputBirthday] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputFirstname("");
    setInputLastname("");
    setInputPhone("");
    setInputMobilePhone("");
    setInputEmail("");
    setInputCity("");
    setInputStreet("");
    setInputBirthday("");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="formContact">
            {/* <label htmlFor="input-Firstname">Firstname: </label> */}
            <input
              className="inputContact"
              type="text"
              id="input-firstname"
              name="firstname"
              placeholder="Firstname"
              required
              onChange={(event) => setInputFirstname(event.target.value)}
              value={inputFirstname}
            />
            {/* <label htmlFor="input-Lastname">Lastname: </label> */}
            <input
              className="inputContact"
              type="text"
              id="input-lastname"
              name="lastname"
              placeholder="Lastname"
              required
              onChange={(event) => setInputLastname(event.target.value)}
              value={inputLastname}
            />
            {/* <label htmlFor="input-Phone">Phone: </label> */}
            <input
              className="inputContact"
              type="tel"
              id="input-phone"
              name="phone"
              placeholder="+49 1234 56789"
              onChange={(event) => setInputPhone(event.target.value)}
              value={inputPhone}
            />
            {/* <label htmlFor="input-Mobile">Mobile: </label> */}
            <input
              className="inputContact"
              type="tel"
              id="input-mobilePhone"
              name="mobilePhone"
              placeholder="+49 1234 56789"
              onChange={(event) => setInputPhone(event.target.value)}
              value={inputMobilePhone}
            />
            {/* <label htmlFor="input-Email">Email: </label> */}
            <input
              className="inputContact"
              type="email"
              id="input-email"
              name="email"
              placeholder="hallo@email.com"
              required
              onChange={(event) => setInputEmail(event.target.value)}
              value={inputEmail}
            />
            {/* <label htmlFor="input-City">City: </label> */}
            <input
              className="inputContact"
              type="text"
              id="input-city"
              name="city"
              placeholder="City"
              required
              onChange={(event) => setInputEmail(event.target.value)}
              value={inputCity}
            />
            {/* <label htmlFor="input-Street">Street: </label> */}
            <input
              className="inputContact"
              type="text"
              id="input-street"
              name="street"
              placeholder="Street"
              onChange={(event) => setInputStreet(event.target.value)}
              value={inputStreet}
            />
            {/* <label htmlFor="input-Birthday">Birthday: </label> */}
            <input
              className="inputContact"
              type="date"
              id="input-birthday"
              name="birthday"
              placeholder="Birthday"
              required
              onChange={(event) => setInputBirthday(event.target.value)}
              value={inputBirthday}
            />

            {/* <input type="submit" value="Submit" className="submitContact" /> */}
            <button
              onClick={() => navigate("/contact")}
              className="submitContact"
            >
              Save
            </button>
            <button>Reject</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

//Modal?
