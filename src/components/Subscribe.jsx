import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

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
      <div>
        <h1 className="headerSubscribe" style={{ color: theme }}>
          Subscribe
        </h1>

        <form className="formSubscribe" onSubmit={handleSubmit}>
          <input
            type="email"
            className="inputSubscribe"
            name="email"
            placeholder="Email"
            onChange={(event) => setInputEmail(event.target.value)}
            value={inputEmail}
            style={{ border: `2px solid ${theme}` }}
          />
          <input
            className="inputSubscribe"
            type="text"
            name="userName"
            placeholder="Username"
            onChange={(event) => setInputName(event.target.value)}
            value={inputName}
            style={{ border: `2px solid ${theme}` }}
          />

          <input
            className="inputSubscribe"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => setInputPassword(event.target.value)}
            value={inputPassword}
            style={{ border: `2px solid ${theme}` }}
          />
          {/* ????? Input oder Button for subscripe ??? */}
          {/* <input
            type="submit"
            value="Subscribe"
            className="inputSubmitSubscribe"
            style={{
              border: `2px solid transparent`,
              backgroundColor: theme,
            }}
          /> */}
          <button
            className="submitButtonSubscribe"
            style={{
              border: `2px solid transparent`,
              backgroundColor: theme,
            }}
          >
            Submit
          </button>
        </form>
        <div className="navToLoginSubscribe" style={{ color: theme }}>
          <p>
            Already a Caroleni Member?
            <button
              style={{
                color: theme,
                border: "none",
                backgroundColor: "white",
                textDecoration: "underline",
              }}
              onClick={handleClickLogin}
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
