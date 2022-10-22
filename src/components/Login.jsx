import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "./Footer";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: "carola",
    password: "huhu4",
    city: "Berlin",
  });

  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [show, setShow] = useState(false);
  const [theme] = useContext(ThemeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputName("");
    setInputPassword("");
    setInputCity("");

    if (data.userName === inputName && data.password === inputPassword) {
      navigate("/Main");
    } else if (data.userName !== inputName || data.password !== inputPassword) {
      setShow(true);
    }
  };

  return (
    <>
      <div className="containerLogin">
        <h1 className="headerLogin" style={{ color: theme }}>
          Login
        </h1>
        <p className={show ? "show" : "hide"}>
          The username or password is incorrect!
        </p>
        <form className="formLogin" onSubmit={handleSubmit}>
          <input
            className="inputLogin"
            type="text"
            name="userName"
            placeholder="Username"
            onChange={(event) => setInputName(event.target.value)}
            value={inputName}
            style={{ border: `2px solid ${theme}` }}
          />

          <input
            className="inputLogin"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => setInputPassword(event.target.value)}
            value={inputPassword}
            style={{ border: `2px solid ${theme}` }}
          />
          <input
            className="inputLogin"
            type="text"
            name="city"
            placeholder="City"
            onChange={(event) => setInputCity(event.target.value)}
            value={inputCity}
            style={{ border: `2px solid ${theme}` }}
          />

          <input
            type="submit"
            value="Submit"
            className="submitLogin"
            style={{ border: `2px solid transparent`, backgroundColor: theme }}
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
