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
import Sidebar from "./components/Sidebar";
import "./Main.css";
import Footer from "./components/Footer";
import CalendarModal from "./components/Modals/CalendarModal";

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
  const handleClick = () => {
    <CalendarModal />;
  };
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvents() {
    setAllEvents([...allEvents, newEvent]);
  }
  return (
    <div>
      <HeaderMain />

      <div className="cale_side">
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 400, width: "80vw", margin: "50px" }}
          onClick={handleClick}
        />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
