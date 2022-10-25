import "./DiaryItem.css";
import { useState } from "react";
import ThemeContext from "../Contexts/ColorContext";
import { useContext } from "react";

const DiaryItem = (props) => {
  const [theme] = useContext(ThemeContext);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [btnText, setBtnText] = useState("View more Content");

  const handleShowDetails = () => {
    btnText === "View more Details"
      ? setBtnText("Close")
      : setBtnText("View more Content");
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
          <p>Date</p>
        </div>
        <div className="diaryMood">
          <p> Mood</p>
        </div>
        <div className="diaryContent">
          <p> Content</p>
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
