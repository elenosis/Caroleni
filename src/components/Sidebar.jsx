import Quote from "./Quote";
import Weather from "./Weather";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Weather />
      <Quote />
    </div>
  );
};

export default Sidebar;
