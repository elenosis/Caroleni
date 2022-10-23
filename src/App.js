import "./App.css";
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Login from "./components/Login";
import Main from "./Main";
import DiaryList from "./components/DiaryList";
import ContactList from "./components/ContactList";
import ThemeContext from "./Contexts/ColorContext";
import Subscribe from "./components/Subscribe";
import ContactDetail from "./components/ContactDetail";

const App = () => {
  const theme = useState("#6699CC");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="login" element={<Login />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="main" element={<Main />} />
          <Route path="diary" element={<DiaryList />} />
          <Route path="contact" element={<ContactList />} />
          <Route path="contactDetail" element={<ContactDetail />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
