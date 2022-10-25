import Footer from "./Footer";
import HeaderDiary from "./HeaderDiary";
import DiaryItem from "./DiaryItem";
import { useContext, useState, useEffect } from "react";
import "./DiaryList.css";
import ThemeContext from "../Contexts/ColorContext";
import CurrentDate from "./CurrentDate";

const DiaryList = () => {
  const date1 = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [date, setDate] = useState(JSON.stringify(date1));
  const [mood, setMood] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [showModalNewEntry, setShowModalNewEntry] = useState(false);
  const [show, setShow] = useState("");
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    const diaryLocalStorage = localStorage.getItem("diaryEntries");
    if (diaryLocalStorage !== null) {
      setDiaryEntries(JSON.parse(diaryLocalStorage));
    }
  }, []);

  const addNewDiaryEntry = () => {
    const newDiaryEntry = {
      date: date,
      mood: mood,
      text: diaryEntry,
    };

    const newDiaryEntries = [...diaryEntries, newDiaryEntry];
    setDiaryEntries(newDiaryEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(newDiaryEntries));
  };

  const handleSubmitNewEntry = (e) => {
    setDate(JSON.stringify(date1));

    const newDiaryEntry = {
      date: date,
      mood: mood,
      text: diaryEntry,
    };
    const newEntries = [...diaryEntries, newDiaryEntry];
    e.preventDefault();
    addNewDiaryEntry();
    setDiaryEntries(newEntries);
    setDiaryEntry("");
  };
  const handleChangeTextarea = (e) => {
    setDiaryEntry(e.target.value);
  };

  const handleNewDiary = () => {
    setShow("show");
    setShowModalNewEntry(true);
  };

  const handleReject = () => {
    setShow("");
    setDiaryEntry("");
    setShowModalNewEntry(false);
  };

  const onChangeValue = (event) => {
    setMood(event.target.value);
  };
  //
  let contentDiary;
  if (diaryEntries.length > 0) {
    contentDiary = diaryEntries.map((entry) => {
      return (
        <DiaryItem date={entry.date} mood={entry.mood} text={entry.text} />
      );
    });
  } else {
    contentDiary = <h1 style={{ color: theme }}>No diary entry available</h1>;
  }

  return (
    <>
      <HeaderDiary />
      <div className={show} />
      <div className="containerDiary">
        <div className="diaryBox">
          <ul className="diaryUList">
            <li className="diaryLi"> {contentDiary}</li>
          </ul>
          <button
            onClick={handleNewDiary}
            className="addDiaryButton"
            style={{
              margin: "auto",
              border: `2px solid transparent`,
              backgroundColor: theme,
            }}
          >
            Write Diary
          </button>
        </div>
      </div>

      {showModalNewEntry && (
        <div>
          <div>
            <div
              className="diary_new_entry"
              style={{
                backgroundColor: theme,
                borderBottomColor: theme,
                borderRightColor: theme,
                border: `2px solid ${theme}`,
              }}
            >
              <form onSubmit={handleSubmitNewEntry}>
                <div>
                  <CurrentDate />
                </div>
                <h3>How do you feel today?</h3>
                <div className="how_do_you_feel" onChange={onChangeValue}>
                  <input type="radio" value="😔" id="😔" name="mood" />
                  😔
                  <input type="radio" value="😡" id="😡" name="mood" />
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
                  cols="40"
                  rows="15"
                  placeholder="Dear Diary..."
                  value={diaryEntry}
                  onChange={handleChangeTextarea}
                ></textarea>
                <div className="diary_btns">
                  <button
                    className="submitDiary"
                    style={{
                      color: theme,
                      border: `2px solid ${theme}`,
                      borderBottomColor: theme,
                      borderRightColor: theme,
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="submitDiary"
                    style={{
                      color: theme,
                      border: `2px solid ${theme}`,
                      borderBottomColor: theme,
                      borderRightColor: theme,
                    }}
                    onClick={handleReject}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default DiaryList;
