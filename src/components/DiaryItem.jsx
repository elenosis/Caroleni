import "./DiaryItem.css";
import { useState } from "react";
import ThemeContext from "../Contexts/ColorContext";
import { useContext } from "react";

const DiaryItem = (props) => {
  const [hide, setHide] = useState("hide");
  const [theme] = useContext(ThemeContext);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [btnText, setBtnText] = useState("View more");

  const handleShowDetails = () => {
    btnText === "View more" ? setBtnText("Close") : setBtnText("View more");
    hide === "hide" ? setHide("") : setHide("hide");
    showModalDetails === true
      ? setShowModalDetails(false)
      : setShowModalDetails(true);
  };

  return (
    <div
      className="containerDiaryItem"
      style={{
        backgroundColor: theme,
        borderBottomColor: theme,
        borderRightColor: theme,
        border: `2px solid ${theme}`,
      }}
    >
      <div className="diaryItem" style={{ color: theme, borderColor: theme }}>
        <div className="diaryDate">
          <p>{props.date}</p>
        </div>
        <div className="diaryMood">
          <p> {props.mood}</p>
        </div>
        <div className="dearDiary">
          <p>Dear Diary...</p>
        </div>
        <div
          className={hide}
          style={{ width: "fit-content", height: "1.5rem" }}
        >
          <p>{props.text}</p>
        </div>
        <button
          onClick={handleShowDetails}
          className="moreContentButton"
          style={{
            border: `2px solid transparent`,
            backgroundColor: theme,
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default DiaryItem;
