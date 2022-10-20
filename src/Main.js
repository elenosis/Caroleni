import "./App.css";
import { Calendar } from "react-big-calendar";
import { dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import HeaderMain from "./components/HeaderMain";
import Quote from "./components/Quote";
import { Routes, Route, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Start from "./components/Start";

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

const Main = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvents() {
    setAllEvents([...allEvents, newEvent]);
  }
  return (
    <div>
      <HeaderMain />
      <Quote />

      <div>
        <input
          type="text"
          placeholder="Add title"
          style={{ width: "20%", marginRight: "10px" }}
          values={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
      </div>
      <DatePicker
        placeholderText="Start date"
        style={{ marginRight: "10px" }}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      <DatePicker
        placeholderText="End date"
        style={{ marginRight: "10px" }}
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
      />
      <button style={{ marginTop: "10px" }} onClick={handleAddEvents}>
        Add event
      </button>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400, width: "70vw", margin: "50px" }}
      />
      <Start />
    </div>
  );
};

export default Main;
