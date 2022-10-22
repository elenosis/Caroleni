import "./App.css";
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Login from "./components/Login";
import Main from "./Main";
import DiaryList from "./components/DiaryList";
import ContactList from "./components/ContactList";
import ThemeContext from "./Contexts/ColorContext";

const App = () => {
  const theme = useState("pink");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="login" element={<Login />} />
          <Route path="main" element={<Main />} />
          <Route path="diary" element={<DiaryList />} />
          <Route path="contact" element={<ContactList />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
