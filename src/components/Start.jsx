import { NavLink } from "react-router-dom";
import "./Start.css";
import background from "../images/Start.jpg";

const Start = () => {
  return (
    <div className="containerStart">
      <div
        style={{ backgroundImage: `url(${background})`, height: "100vh" }}
      ></div>
      <div>Carpe Diem with Caroleni</div>
      <NavLink to="login" className={"navLink"}>
        Login
      </NavLink>
    </div>
  );
};

export default Start;
