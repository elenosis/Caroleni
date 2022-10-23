import CurrentDate from "./CurrentDate";
import "./DiaryNew.css";
import ThemeContext from "../Contexts/ColorContext";
import { useContext } from "react";

const DiaryNew = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div
      className="diary_new_entry"
      style={{
        color: theme,
        borderBottomColor: theme,
        borderRightColor: theme,
        border: `2px solid ${theme}`,
      }}
    >
      <form>
        <div>
          <CurrentDate />
        </div>
        <h3>How do you feel today?</h3>
        <div className="how_do_you_feel">
          <p>😔</p>
          <p>😡</p>
          <p>😐</p>
          <p>😃</p>
          <p>🤩</p>
        </div>
        <textarea
          name=""
          id=""
          cols="50"
          rows="20"
          placeholder="Dear Diary..."
        ></textarea>
        <div className="diary_btns">
          <button>Save</button>
          <button>Reject</button>
        </div>
      </form>
    </div>
  );
};

export default DiaryNew;

//Modal?
