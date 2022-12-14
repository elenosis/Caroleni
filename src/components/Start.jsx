import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Start = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div class="gridStart">
      <div class="boxStart" style={{ background: theme }}>
        Sunday
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🧑
      </div>
      <div class="boxStart" style={{ background: theme }}>
        5
      </div>
      <div class="boxStart" style={{ background: theme }}>
        😃
      </div>
      <div class="boxStart" style={{ background: theme }}>
        April
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🤸🏼‍♀️
      </div>
      <div class="boxStart" style={{ background: theme }}>
        December
      </div>
      <div class="boxStart" style={{ background: theme }}>
        ⏰
      </div>
      <div class="boxStart" style={{ background: theme }}>
        Tuesday
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🧘
      </div>

      <div class="boxStart" style={{ background: theme }}>
        30
      </div>
      <div class="boxStart" style={{ background: theme }}>
        👩🏻‍⚕️
      </div>
      <div class="boxStart" style={{ background: theme }}>
        9
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🎄
      </div>
      <div class="boxStart" style={{ background: theme }}>
        2023
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🥂
      </div>
      <div class="boxStart" style={{ background: theme }}>
        September
      </div>
      <div className=" boxStart spanStart" style={{ backgroundColor: theme }}>
        <h1>Carpe Diem</h1>
        <p>with</p>
        <h3>Caroleni</h3>
        <NavLink to="login" className={"navLink"}>
          <button className="enterCaroleniButton"> Click to Enter </button>
        </NavLink>
      </div>

      <div class="boxStart" style={{ background: theme }}>
        20
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🍕
      </div>
      <div class="boxStart" style={{ background: theme }}>
        10:00
      </div>
      <div class="boxStart" style={{ background: theme }}>
        👎
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🚴‍♀️
      </div>
      <div class="boxStart" style={{ background: theme }}>
        February
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🪘
      </div>
      <div class="boxStart" style={{ background: theme }}>
        :-P
      </div>
      <div class="boxStart" style={{ background: theme }}>
        12:30
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🧑‍💻
      </div>

      <div class="boxStart" style={{ background: theme }}>
        29
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🥪
      </div>
      <div class="boxStart" style={{ background: theme }}>
        Friday
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🏝
      </div>
      <div class="boxStart" style={{ background: theme }}>
        October
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🎦
      </div>
      <div class="boxStart" style={{ background: theme }}>
        31
      </div>
      <div class="boxStart" style={{ background: theme }}>
        📠
      </div>
      <div class="boxStart" style={{ background: theme }}>
        :(
      </div>
      <div class="boxStart" style={{ background: theme }}>
        🎂
      </div>
      <div class="boxStart" style={{ background: theme }}>
        August
      </div>
      <div class="boxStart" style={{ background: theme }}>
        ☎️
      </div>
      <div class="boxStart" style={{ background: theme }}>
        12
      </div>
      <div class="boxStart" style={{ background: theme }}>
        📒
      </div>
      <div class="boxStart" style={{ background: theme }}>
        Monday
      </div>
    </div>
  );
};

export default Start;
