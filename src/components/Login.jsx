import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "./Footer";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Login = () => {
  const [theme, setTheme] = useContext(ThemeContext);
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
          <div>
            <select
              name="theme"
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              onBlur={(e) => setTheme(e.target.value)}
            >
              <option value="#6699CC">Choose your theme</option>
              <option value="#800080">Purple</option>
              <option value="#FBCEB1">Apricot</option>
              <option value="#58111A">Chocolate Cosmos</option>
              <option value="#FE28A2">Persian rose</option>
              <option value="#80461B">Russet</option>
              <option value="#005A9C">Dodgers Blue</option>
              <option value="#FF7F50">Coral</option>
              <option value="#FFD700">Gold</option>
              <option value="#5F9EA0">Cadet blue</option>
              <option value="#C71585">Medium Violet Red</option>
              <option value="peru">Peru</option>
              <option value="blue">Blue</option>
              <option value="#BC3F4A">Sanguine</option>
              <option value="mediumorchid">Medium Orchid</option>
            </select>
          </div>

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
