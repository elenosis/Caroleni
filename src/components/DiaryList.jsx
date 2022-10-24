import Footer from "./Footer";
import HeaderDiary from "./HeaderDiary";
import DiaryNew from "./DiaryNew";
import DiaryItem from "./DiaryItem";
import { useContext, useState } from "react";
import "./DiaryList.css";
import ThemeContext from "../Contexts/ColorContext";
import CurrentDate from "./CurrentDate";
import "./DiaryNew.css";

const DiaryList = () => {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [mood, setMood] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [showModalNewEntry, setShowModalNewEntry] = useState(false);
  const [show, setShow] = useState("");
  const [theme] = useContext(ThemeContext);

  const handleChanheTextarea = () => {};
  const hanldeNewDiary = () => {
    setShow("show");
    setShowModalNewEntry(true);
  };
  const handleReject = () => {
    setShow("");
    setShowModalNewEntry(false);
  };

  const onChangeValue = (event) => {
    setMood(event.target.value);
  };

  return (
    <div>
      <HeaderDiary />
      <DiaryItem className={show} />
      <button onClick={hanldeNewDiary}>Write Diary</button>
      <div className="diary_content">
        {showModalNewEntry && (
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
              <div className="how_do_you_feel" onChange={onChangeValue}>
                <input type="radio" value="lila" id="😔" name="mood" />
                😔
                <input type="radio" value="maria" id="😡" name="mood" />
                😡
                <input type="radio" value="😐" id="😐" name="mood" />
                😐
                <input type="radio" value="😃" id="😃" name="mood" />
                😃
                <input type="radio" value="🤩" id="🤩" name="mood" />
                🤩
              </div>
              <textarea
                name=""
                id=""
                cols="50"
                rows="20"
                placeholder="Dear Diary..."
                value=""
                onChange={handleChanheTextarea}
              ></textarea>
              <div className="diary_btns">
                <button>Save</button>
                <button onClick={handleReject}>Reject</button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DiaryList;
