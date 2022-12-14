import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Login = ({ chooseCity }) => {
  const [inputCity, setInputCity] = useState("");
  const [theme, setTheme] = useContext(ThemeContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: "Caroleni",
    password: "Caroleni",
    city: "",
  });

  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClickSubscribe = () => {
    navigate("/subscribe");
  };
  const handleNewCity = (event) => {
    setInputCity(event.target.value);
    chooseCity(event.target.value);
  };

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
      <div>
        <h1 className="headerLogin" style={{ color: theme }}>
          Login
        </h1>
        <p className={show ? "showLogin" : "hideLogin"}>
          The username or password is incorrect!
        </p>
        <form className="formLogin" onSubmit={handleSubmit}>
          <input
            className="inputLogin"
            type="text"
            name="userName"
            placeholder="Username: Caroleni"
            onChange={(event) => setInputName(event.target.value)}
            value={inputName}
            style={{ border: `2px solid ${theme}` }}
          />

          <input
            className="inputLogin"
            type="password"
            name="password"
            placeholder="Password: Caroleni"
            onChange={(event) => setInputPassword(event.target.value)}
            value={inputPassword}
            style={{ border: `2px solid ${theme}` }}
          />
          <input
            className="inputLogin"
            type="text"
            name="city"
            placeholder="City"
            onChange={handleNewCity}
            value={inputCity}
            style={{ border: `2px solid ${theme}` }}
          />
          <div>
            <select
              name="theme"
              id="themeLogin"
              value={theme}
              style={{ border: `2px solid ${theme}` }}
              onChange={(e) => setTheme(e.target.value)}
              onBlur={(e) => setTheme(e.target.value)}
            >
              <option value="#3174ad">Choose your theme</option>
              <option value="#6699CC">Danube</option>
              <option value="#31ad65">Chateau Green</option>
              <option value="#00693E">Dartmouth Green</option>
              <option value="#5F9EA0">Cadet blue</option>
              <option value="#367588">Tea Blue</option>
              <option value="#1D428A">Warriors Blue</option>
              <option value="#6A5ACD">State Blue</option>
              <option value="#800080">Purple</option>
              <option value="#ad3174">Royal Heath</option>
              <option value="#C71585">Medium Violet Red</option>
              <option value="#FF4500">Orange Red</option>
              <option value="#FFD700">Gold</option>
              <option value="#ad7731">Chopper</option>
              <option value="#ad906a">Sandal</option>
            </select>
          </div>
          <button
            className="submitButtonLogin"
            style={{
              backgroundColor: theme,
            }}
          >
            Submit
          </button>
        </form>
        <div className="navToSubscribeLogin" style={{ color: theme }}>
          <p>
            Not a Caroleni Member ?
            <button
              className="goToSubscribeButtonLogin"
              style={{
                color: theme,
                border: "none",
                backgroundColor: "white",
                textDecoration: "underline",
              }}
              onClick={handleClickSubscribe}
            >
              <strong> Subscribe</strong>
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
