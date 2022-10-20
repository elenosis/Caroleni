import "./App.css";
import React from "react";

import { Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Login from "./components/Login";
import Main from "./Main";
import DiaryList from "./components/DiaryList";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="start" element={<Start />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Start />} />
        <Route path="main" element={<Main />} />
        <Route path="diary" element={<DiaryList />} />
        <Route path="contact" element={<ContactList />} />
      </Routes>
    </div>
  );
};

export default App;
