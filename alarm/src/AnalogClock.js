import React from "react";

const AnalogClock = ({ hour, minute, second }) => {
  const secondStyle = {
    transform: `rotate(${second * 6}deg)`,
  };
  const minuteStyle = {
    transform: `rotate(${minute * 6}deg)`,
  };
  const hourStyle = {
    transform: `rotate(${hour * 30 + minute * 0.5}deg)`,
  };
  return (
    <div className="analog-clock">
      <div className="hand hour-hand" style={hourStyle}></div>
      <div className="hand minute-hand" style={minuteStyle}></div>
      <div className="hand second-hand" style={secondStyle}></div>
    </div>
  );
};

export default AnalogClock;
