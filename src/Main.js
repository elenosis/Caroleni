import { Calendar } from "react-big-calendar";
import { dateFnsLocalizer } from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import HeaderMain from "./components/HeaderMain";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import "./Main.css";
import Footer from "./components/Footer";
import { useContext } from "react";
import ThemeContext from "./Contexts/ColorContext";

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
  const [theme] = useContext(ThemeContext);
  const handleCancel = () => {
    setShowModal(false);
    setZIndex(1);
  };
  function handleAddEvents() {
    setAllEvents([...allEvents, newEvent]);
    setShowModal(false);
    setZIndex(1);
  }
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
  });
  const [allEvents, setAllEvents] = useState(events);
  const [showModal, setShowModal] = useState(false);
  const [zIndex, setZIndex] = useState(1);

  const handleClick = () => {
    setShowModal(true);
    setZIndex(-1);
  };

  return (
    <div>
      <HeaderMain />

      <div className="cale_side">
        <div className="cale_button">
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{
              height: 400,
              width: "70vw",
              margin: "50px",
              zIndex: `${zIndex}`,
            }}
          />
          <button
            id="add_new_event"
            onClick={handleClick}
            style={{
              margin: "auto",
              color: theme,
              border: `2px solid ${theme}`,
              borderBottomColor: theme,
              borderRightColor: theme,
            }}
          >
            Add new event
          </button>
        </div>
        {showModal ? (
          <Modal className="popUp_new_event">
            <div>
              <input
                type="text"
                placeholder="Add event title"
                style={{ marginRight: "10px" }}
                values={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
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
            <div>
              <p>Description:</p>
              <input
                type="text"
                placeholder="Add description"
                style={{ marginRight: "10px" }}
                values={newEvent.description}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
              />
            </div>
            <div className="modal_buttons">
              <button style={{ marginTop: "10px" }} onClick={handleAddEvents}>
                Add event
              </button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </Modal>
        ) : null}
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
