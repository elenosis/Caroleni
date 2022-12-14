import { useState } from "react";
import ThemeContext from "../Contexts/ColorContext";
import { useContext } from "react";

const DiaryItem = (props) => {
  // const [hide, setHide] = useState("hide");
  const [theme] = useContext(ThemeContext);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [btnText, setBtnText] = useState("View more");

  const handleShowDetails = () => {
    btnText === "View more" ? setBtnText("Close") : setBtnText("View more");
    // hide === "hide" ? setHide("") : setHide("hide");
    showModalDetails === true
      ? setShowModalDetails(false)
      : setShowModalDetails(true);
  };

  return (
    <div
      className="diaryContainerItem"
      style={{
        backgroundColor: theme,
        borderBottomColor: theme,
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
        <button
          className="diaryMoreContentButton"
          style={{
            backgroundColor: theme,
          }}
          onClick={handleShowDetails}
        >
          {btnText}
        </button>
      </div>
      {/* new Diary Detail */}
      {showModalDetails && (
        <div className="diaryContainerDetail ">
          <div>
            <p className="diaryDetail">{props.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryItem;
