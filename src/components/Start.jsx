import { NavLink } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="containerStart">
      <div></div>
      <div>Carpe Diem with Caroleni</div>
      <NavLink to="login" className={"navLink"}>
        Login
      </NavLink>
    </div>
  );
};

export default Start;
