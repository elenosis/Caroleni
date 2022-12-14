import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Login from "./components/Login";
import Main from "./Main.jsx";
import DiaryListModal from "./components/DiaryListModal.jsx";
import ContactListModal from "./components/ContactListModal.jsx";
import ThemeContext from "./Contexts/ColorContext";
import Subscribe from "./components/Subscribe";

const App = () => {
  const [city, setCity] = useState("europe");
  const chooseCity = (city) => {
    setCity(city);
  };

  const theme = useState("#3174ad");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="login" element={<Login chooseCity={chooseCity} />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="main" element={<Main city={city} />} />
          <Route path="diary" element={<DiaryListModal />} />
          <Route path="contact" element={<ContactListModal />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
