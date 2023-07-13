import React, { useState, useEffect } from "react";
import AnalogClock from "./AnalogClock";
import Alarm from "./Alarm";
import "./App.css";

const App = () => {
  const [alarms, setAlarms] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [newAlarm, setNewAlarm] = useState({ time: "", repetition: [] });

  const addAlarm = (event) => {
    event.preventDefault();
    if (!newAlarm.time || newAlarm.repetition.length === 0) return;
    if (!alarms.find((alarm) => alarm.time === newAlarm.time)) {
      setAlarms([...alarms, newAlarm]);
      setNewAlarm({ time: "", repetition: [] });
    } else {
      alert("Alarm is already set for this time");
    }
  };

  const getCurrentDayOfWeek = () => {
    const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const currentDayIndex = currentTime.getDay();
    return daysOfWeek[currentDayIndex];
  };

  const getSelectedDay = (repetition) => {
    if (repetition.includes("everyday")) {
      return "Everyday";
    } else {
      const days = {
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday",
        sun: "Sunday",
      };
      const selectedDays = repetition.map((day) => days[day]);
      return selectedDays.join(", ");
    }
  };

  const deleteAlarm = (time) => {
    const updatedAlarms = alarms.filter((alarm) => alarm.time != time);
    setAlarms(updatedAlarms);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  useEffect(() => {
    alarms.forEach((alarm) => {
      const [alarmHour, alarmMinute] = alarm.time.split(":");
      const alarmDays = alarm.repetition;
      const isAlertDay =
        alarmDays.includes("everyday") ||
        alarmDays.includes(getCurrentDayOfWeek());
      if (
        parseInt(alarmHour) === hour &&
        parseInt(alarmMinute) === minute &&
        second === 0 &&
        isAlertDay
      ) {
        alert(`Alarm set for ${alarm.time} on ${getSelectedDay(alarmDays)}!`);
      }
    });
  }, [hour, minute, second, alarms]);

  const handleTimeChange = (event) => {
    setNewAlarm({ ...newAlarm, time: event.target.value });
  };

  const handleRepetitionChange = (event) => {
    const selectedDays = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setNewAlarm({ ...newAlarm, repetition: selectedDays });
  };

  return (
    <div className="app">
      <AnalogClock hour={hour} minute={minute} second={second} />
      <div className="alarms">
        <h2>Alarms</h2>
        {alarms.length > 0 ? (
          alarms.map((alarm, index) => (
            <Alarm key={index} alarm={alarm} onAlarmDelete={deleteAlarm} />
          ))
        ) : (
          <p>No alarms set.</p>
        )}
        <form onSubmit={addAlarm}>
          <label>
            Alarm Time:{" "}
            <input
              type="time"
              value={newAlarm.time}
              onChange={handleTimeChange}
            />
          </label>
          <label>
            Repeat On:
            <select
              value={newAlarm.repetition}
              onChange={handleRepetitionChange}
            >
              <option value="none">None</option>
              <option value="everyday">Everyday</option>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </select>
          </label>
          <button type="submit">Add Alarm</button>
        </form>
      </div>
    </div>
  );
};
export default App;
