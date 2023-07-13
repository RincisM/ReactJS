import React, { useState, useEffect } from "react";
import "./Staff.css";

function Staff() {
  const [teamSlots, setTeamSlots] = useState([]);
  useEffect(() => {
    const storedTeamSlots = JSON.parse(localStorage.getItem("teamSlots"));
    if (storedTeamSlots) {
      setTeamSlots(storedTeamSlots);
    }
  }, []);
  return (
    <>
      <h1>Team Slots</h1>
      {teamSlots.length > 0 ? (
        <table className="teamSlotsTable">
          <thead>
            <tr>
              <th>Team</th>
              <th>Slot</th>
            </tr>
          </thead>
          <tbody>
            {teamSlots.map((teamSlot, index) => (
              <tr key={index}>
                <td>{teamSlot.team}</td>
                <td>{teamSlot.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No team selected their slots</p>
      )}
    </>
  );
}

export default Staff;
