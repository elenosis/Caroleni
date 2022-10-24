import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "./Footer";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";
import "./Subscribe.css";

const Subscribe = () => {
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [user, setUser] = useState({ email: "", username: "", password: "" });

  const handleClickLogin = () => {
    navigate("/login");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({
      email: `${inputEmail}`,
      username: inputName,
      password: inputPassword,
    });
    // alert("Thank you for subscribing in Caroleni!");
    // navigate("/Main");
    console.log(user);
  };
  return (
    <>
      <div className="container_subscribe">
        <h1 className="headerLogin" style={{ color: theme }}>
          Subscribe
        </h1>

        <form className="form_subscribe" onSubmit={handleSubmit}>
          <input
            type="email"
            className="input_subscribe"
            name="email"
            placeholder="Email"
            onChange={(event) => setInputEmail(event.target.value)}
            value={inputEmail}
            style={{ border: `2px solid ${theme}` }}
          />
          <input
            className="input_subscribe"
            type="text"
            name="userName"
            placeholder="Username"
            onChange={(event) => setInputName(event.target.value)}
            value={inputName}
            style={{ border: `2px solid ${theme}` }}
          />

          <input
            className="input_subscribe"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => setInputPassword(event.target.value)}
            value={inputPassword}
            style={{ border: `2px solid ${theme}` }}
          />

          <input
            type="submit"
            value="Subscribe"
            className="submit_subscribe"
            style={{
              border: `2px solid transparent`,
              backgroundColor: theme,
            }}
          />
        </form>
        <div className="nav_to_login">
          <p>
            Already a Caroleni member?
            <button
              onClick={handleClickLogin}
              style={{
                border: "none",
                backgroundColor: "white",
                textDecoration: "underline",
              }}
            >
              <strong> Login</strong>
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscribe;
