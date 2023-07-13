import React from "react";

const Alarm = ({ alarm, onAlarmDelete }) => {
  const { time, repetition } = alarm;
  const handleDelete = () => {
    onAlarmDelete(time);
  };
  const getSelectedDay = () => {
    if (repetition === "none") {
      return "None";
    } else {
      const days = {
        everyday: "Everyday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thurs: "Thursday",
        fri: "Friday",
        sat: "Saturday",
        sun: "Sunday",
      };
      return days[repetition] || "";
    }
  };
  return (
    <div className="alarm">
      <div className="time">{time}</div>
      <div className="repetition">{getSelectedDay()}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Alarm;
