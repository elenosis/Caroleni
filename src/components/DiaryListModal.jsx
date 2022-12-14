import HeaderDiary from "./HeaderDiary";
import DiaryItem from "./DiaryItem";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../Contexts/ColorContext";
import CurrentDate from "./CurrentDate";
import Modal from "./Modal.jsx";

const DiaryList = () => {
  const date1 = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [diaryEntry, setDiaryEntry] = useState("");
  const [date, setDate] = useState(JSON.stringify(date1));
  const [mood, setMood] = useState("");
  const [theme] = useContext(ThemeContext);
  const [showModalNewEntry, setShowModalNewEntry] = useState(false);
  const [zIndex, setZIndex] = useState(1);

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

    const newDiaryEntries = [newDiaryEntry, ...diaryEntries];
    setDiaryEntries(newDiaryEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(newDiaryEntries));
    setShowModalNewEntry(false);
    setZIndex(1);
  };

  const handleSubmitNewEntry = (event) => {
    setDate(JSON.stringify(date1));
    const newDiaryEntry = {
      date: date,
      mood: mood,
      text: diaryEntry,
    };
    const newEntries = [newDiaryEntry, ...diaryEntries];
    event.preventDefault();
    addNewDiaryEntry();
    setDiaryEntries(newEntries);
    setDiaryEntry("");
  };

  const handleChangeTextarea = (e) => {
    setDiaryEntry(e.target.value);
  };

  const handleAddNewDiary = () => {
    setShowModalNewEntry(true);
    setZIndex(-1);
    setDiaryEntry();
  };

  const handleBackToDiaryList = () => {
    setShowModalNewEntry(false);
    setZIndex(1);
    setDiaryEntry("");
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
      <div>
        <div className="diaryListBox">
          <button
            onClick={handleAddNewDiary}
            className="diaryListAddButton"
            style={{
              backgroundColor: theme,
            }}
          >
            Write Diary
          </button>
          <ul className="diaryListUl">
            <li> {contentDiary}</li>
          </ul>
        </div>
      </div>

      {showModalNewEntry ? (
        <Modal>
          <form className="diaryModalForm" onSubmit={handleSubmitNewEntry}>
            <div className="diaryModalDate">
              <CurrentDate />
            </div>
            <h3>How do you feel today?</h3>
            <div className="diaryModalHowDoYouFeel" onChange={onChangeValue}>
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
              className="diaryModalText"
              name=""
              cols="40"
              rows="15"
              placeholder="Dear Diary..."
              value={diaryEntry}
              onChange={handleChangeTextarea}
            ></textarea>
            <div className="diaryModalButtons">
              <button
                className="diaryModalSubmit"
                style={{
                  backgroundColor: theme,
                }}
              >
                Save
              </button>
              <button
                className="diaryModalSubmit"
                style={{
                  backgroundColor: theme,
                }}
                onClick={handleBackToDiaryList}
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default DiaryList;
