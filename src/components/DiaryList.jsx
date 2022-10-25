import Footer from "./Footer";
import HeaderDiary from "./HeaderDiary";
import DiaryItem from "./DiaryItem";
import { useContext, useState, useEffect } from "react";
import "./DiaryList.css";
import ThemeContext from "../Contexts/ColorContext";
import CurrentDate from "./CurrentDate";

const DiaryList = () => {
  const diaryArray = [];
  const [diaryEntries, setDiaryEntries] = useState(diaryArray);
  const [mood, setMood] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [showModalNewEntry, setShowModalNewEntry] = useState(false);
  const [show, setShow] = useState("");
  const [theme] = useContext(ThemeContext);

  // neu
  // useEffect(() => {
  //   const diaryLocalStorage = localStorage.getItem("diaryEntries");
  //   if (diaryLocalStorage !== null) {
  //     setDiaryEntries(JSON.parse(diaryLocalStorage));
  //   }
  // }, []);

  // const addNewDiaryEntry = () => {
  //   const newDiaryEntry = {
  //     date: inputDate,
  //     mood: setMood,
  //     text: diaryEntry,
  //   };

  //   const newDiaryEnties = [...diaryEntries, newDiaryEntry];
  //   setDiaryEntries(newDiaryEntry);
  //   localStorage.setItem("diaryEntries", JSON.stringify(newDiaryEntries));
  // };

  //  //
  const handleChangeTextarea = () => {};
  //
  //
  const handleNewDiary = () => {
    setShow("show");
    setShowModalNewEntry(true);
  };
  const handleReject = () => {
    setShow("");
    setShowModalNewEntry(false);
  };
  //
  //
  const onChangeValue = (event) => {
    setMood(event.target.value);
  };
  //
  let contentDiary;
  if (diaryArray.length > 0) {
    contentDiary = diaryEntries.map((entry) => {
      return (
        <DiaryItem
          // date={entry.date}
          mood={entry.mood}
          text={entry.text}
        />
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
            <h2 className="headerNewEntry" style={{ color: theme }}>
              New Diary Entry
            </h2>
            <div
              className="diary_new_entry"
              style={{
                backgroundColor: theme,
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
                  cols="40"
                  rows="15"
                  placeholder="Dear Diary..."
                  value=""
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
                    Reject
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
