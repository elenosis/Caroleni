import { NavLink } from "react-router-dom";
import "./grid.css";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Start = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div class="grid">
      <div class="box" style={{ background: theme }}>
        🤸🏼‍♀️
      </div>
      <div class="box" style={{ background: theme }}>
        December
      </div>
      <div class="box" style={{ background: theme }}>
        ⏰
      </div>
      <div class="box" style={{ background: theme }}>
        Tuesday
      </div>
      <div class="box" style={{ background: theme }}>
        🧘
      </div>

      <div class="box" style={{ background: theme }}>
        30
      </div>

      <div class="box" style={{ background: theme }}>
        👩🏻‍⚕️
      </div>
      <div class="box" style={{ background: theme }}>
        9
      </div>

      <div class="box" style={{ background: theme }}>
        🎄
      </div>
      <div class="box" style={{ background: theme }}>
        2023
      </div>

      <div class="box" style={{ background: theme }}>
        🥂
      </div>
      <div class="box" style={{ background: theme }}>
        September
      </div>
      <div
        className="enter_caroleni box span"
        style={{ backgroundColor: theme }}
      >
        <h1>Carpe Diem</h1>
        <p>with</p>
        <h3>Caroleni</h3>
        <NavLink to="login" className={"navLink"}>
          <button className="enter_caroleni_btn"> Click to start </button>
        </NavLink>
      </div>

      <div class="box" style={{ background: theme }}>
        20
      </div>
      <div class="box" style={{ background: theme }}>
        🍕
      </div>

      <div class="box" style={{ background: theme }}>
        10:00
      </div>

      <div class="box" style={{ background: theme }}>
        👎
      </div>
      <div class="box" style={{ background: theme }}>
        February
      </div>
      <div class="box" style={{ background: theme }}>
        🚴‍♀️
      </div>
      <div class="box" style={{ background: theme }}>
        12:30
      </div>
      <div class="box" style={{ background: theme }}>
        🪘
      </div>
      <div class="box" style={{ background: theme }}>
        🧑‍💻
      </div>

      <div class="box" style={{ background: theme }}>
        29
      </div>
      <div class="box" style={{ background: theme }}>
        🥪
      </div>
      <div class="box" style={{ background: theme }}>
        Monday
      </div>
      <div class="box" style={{ background: theme }}>
        🏝
      </div>
      <div class="box" style={{ background: theme }}>
        October
      </div>
      <div class="box" style={{ background: theme }}>
        🎦
      </div>
      <div class="box" style={{ background: theme }}>
        31
      </div>
      <div class="box" style={{ background: theme }}>
        📠
      </div>
      <div class="box" style={{ background: theme }}>
        :(
      </div>
      <div class="box" style={{ background: theme }}>
        🎂
      </div>
      <div class="box" style={{ background: theme }}>
        August
      </div>
      <div class="box" style={{ background: theme }}>
        ☎️
      </div>
      <div class="box" style={{ background: theme }}>
        12
      </div>

      <div class="box" style={{ background: theme }}>
        📒
      </div>

      <div class="box" style={{ background: theme }}>
        Monday
      </div>
      <div class="box" style={{ background: theme }}>
        :-P
      </div>
    </div>
  );
};

export default Start;
