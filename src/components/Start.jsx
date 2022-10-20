import { NavLink } from "react-router-dom";

const Start = () => {
  return (
    <div className="containerStart">
      <div>
        <img src="../images/Start.jpg" alt="Entwurf"></img>
      </div>
      <div>Carpe Diem with Caroleni</div>
      <NavLink to="login" className={"navLink"}>
        Login
      </NavLink>
    </div>
  );
};

export default Start;
