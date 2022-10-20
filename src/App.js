import "./App.css";
import { Calendar } from "react-big-calendar";
import { dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from "./components/Header";
import Quote from "./components/Quote";
import { Routes, Route, Link } from "react-router-dom";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 12, 20),
    end: new Date(2022, 12, 20),
  },
  {
    title: "Vacation",
    start: new Date(2022, 10, 23),
    end: new Date(2022, 10, 26),
  },
  {
    title: "Conference",
    start: new Date(2022, 10, 27),
    end: new Date(2022, 10, 31),
  },
];
console.log(new Date());

const App = () => {
  // const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  // const [allEvents, setAllEvents] = useState(events);
  return (
    <div>
      <Header />
      <Quote />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400, width: "70vw", margin: "50px" }}
      />
    </div>
  );
};

export default App;
