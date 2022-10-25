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

const Main = ({inputCity}) => {
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

  const handleClick = ({ inputCity }) => {
    setShowModal(true);
    setZIndex(-1);
    setNewEvent({});
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
            className="add_new_event"
            onClick={handleClick}
            style={{
              margin: "auto",
              border: `2px solid transparent`,
              backgroundColor: theme,
            }}
          >
            Add new Event
          </button>
        </div>
        {showModal ? (
          <Modal>
            <div>
              <input
                className="inputEvent"
                type="text"
                placeholder="Add event title"
                value={newEvent.title}
                style={{ border: "none" }}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
            </div>
            <DatePicker
              className="datePicker"
              placeholderText="Start date"
              // style={{ border: `2px solid ${theme}` }}
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
            <DatePicker
              className="datePicker"
              placeholderText="End date"
              selected={newEvent.end}
              // style={{ border: `2px solid ${theme}` }}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
            <div>
              <p>Description:</p>
              {/* <textarea name="description" id="" cols="30" rows="10"></textarea> */}
              <input
                className="inputEvent"
                type="text"
                rows="40"
                cols="50"
                name="comment"
                placeholder="Add description"
                values={newEvent.description}
                style={{ border: `none` }}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
              />
            </div>
            <div>
              <button
                className="modal_buttons"
                style={{
                  color: theme,
                  border: `2px solid ${theme}`,
                  borderBottomColor: theme,
                  borderRightColor: theme,
                }}
                onClick={handleAddEvents}
              >
                Add event
              </button>
              <button
                className="modal_buttons"
                style={{
                  color: theme,
                  border: `2px solid ${theme}`,
                  borderBottomColor: theme,
                  borderRightColor: theme,
                }}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </Modal>
        ) : null}
        <Sidebar inputCity={inputCity} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
