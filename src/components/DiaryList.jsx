import Footer from "./Footer";
import HeaderDiary from "./HeaderDiary";
import DiaryNew from "./DiaryNew";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = () => {
  return (
    <div>
      <HeaderDiary />
      <div className="diary_content">
        <DiaryNew />
        <DiaryItem />
      </div>
      <Footer />
    </div>
  );
};

export default DiaryList;
