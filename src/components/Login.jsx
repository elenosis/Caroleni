import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

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
    <div>
      <h1 className="header">Login</h1>
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
        />

        <input
          className="inputLogin"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => setInputPassword(event.target.value)}
          value={inputPassword}
        />
        <input
          className="inputLogin"
          type="text"
          name="city"
          placeholder="City"
          onChange={(event) => setInputCity(event.target.value)}
          value={inputCity}
        />

        <input type="submit" value="Submit" className="submitLogin" />
      </form>
    </div>
  );
};

export default Login;
