import React, { useState, useEffect } from "react";
import { weekFunction, teamFunction } from "./Data";
import "./Student.css";
import { Link } from "react-router-dom";

function Student() {
  const [slots, setSlots] = useState({
    Monday: 8,
    Wednesday: 4,
    Thursday: 12,
    Friday: 4,
  });
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [chosenSlot, setChosenSlot] = useState(null);
  const [availableTeams, setAvailableTeams] = useState(teamFunction());
  const [teamSlots, setTeamSlots] = useState([]);

  const handleTeamMemberButton = (id) => {
    const selectedTeam = availableTeams[id];
    const clickedTeam = availableTeams[id];
    if (selectedTeam === clickedTeam) {
      setSelectedTeam(null); // Deselect the team if it is already selected
    } else {
      setSelectedTeam(clickedTeam); // Select the clicked team
    }
    setSelectedTeam(selectedTeam);
    if (chosenSlot) {
      confirm(`Slot ${chosenSlot} is chosen by ${selectedTeam}`);
      const updatedTeams = availableTeams.filter(
        (item) => item != selectedTeam
      );
      setAvailableTeams(updatedTeams);
    }
  };

  const handleWeekSlotButton = (day) => {
    if (!selectedTeam) {
      alert("Please select a team before choosing a slot");
      return;
    }
    if (slots[day] > 0) {
      setSlots((prevSlots) => ({
        ...prevSlots,
        [day]: prevSlots[day] - 1,
      }));
      setChosenSlot(day);
      alert(`Slot ${day} is chosen by ${selectedTeam}`);
      setTimeout(() => {
        setChosenSlot(null);
      }, 200);
      // Remove the selected team from availableTeams
      const updatedTeams = availableTeams.filter(
        (team) => team !== selectedTeam
      );
      setAvailableTeams(updatedTeams);
      const teamNumber = availableTeams.indexOf(selectedTeam) + 1;
      const updatedTeamSlots = [
        ...teamSlots,
        { team: selectedTeam, slot: day, teamNo: teamNumber },
      ];
      setTeamSlots(updatedTeamSlots);
    } else {
      alert("No Slots Available for this day");
    }
  };

  useEffect(() => {
    const storedSlots = JSON.parse(localStorage.getItem("slots"));
    const storedTeams = JSON.parse(localStorage.getItem("teams"));
    const storedTeamSlots = JSON.parse(localStorage.getItem("teamSlots"));
    if (storedSlots) {
      setSlots(storedSlots);
    }
    if (storedTeams) {
      setAvailableTeams(storedTeams);
    }
    if (storedTeamSlots) {
      setTeamSlots(storedTeamSlots);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("slots", JSON.stringify(slots));
    localStorage.setItem("teams", JSON.stringify(availableTeams));
    localStorage.setItem("teamSlots", JSON.stringify(teamSlots));
  }, [teamSlots, availableTeams, slots]);

  return (
    <div className="container">
      <h1>Project Slot Chooser</h1>
      <h2>Choose one of the Slot</h2>
      <div className="weekSlots">
        {weekFunction().map((s) => (
          <button
            key={s}
            className={`weekSlotButton ${
              chosenSlot === s.split(" ")[0] ? "selected" : ""
            }`}
            onClick={() => handleWeekSlotButton(s.split(" ")[0])}
            disabled={slots[s.split(" ")[0]] === 0}
          >
            {s} ({slots[s.split(" ")[0]]})
          </button>
        ))}
        {/* <select id="slot">
          <option>Select one of the Slots</option>
          <option>Monday 05:00pm - 09:00pm (8)</option>
          <option>Wednesday 01:00pm - 02:00pm (4)</option>
          <option>Thursday 03:00pm - 06:00pm (12)</option>
          <option>Friday 09:30am - 10:30am (4)</option>
        </select> */}
      </div>
      <div className="teamContainer">
        <h2>Teams</h2>
        <div className="teamButtons">
          {availableTeams.map((team, id) => (
            <React.Fragment key={id}>
              <button
                id={id}
                type="submit"
                value={`Team${id}`}
                onClick={() => handleTeamMemberButton(id)}
                className={selectedTeam === team ? "selected" : ""}
              >
                Team {id + 1}
              </button>
              {selectedTeam === team && selectedTeam && (
                <div>{selectedTeam}</div>
              )}
              <br />
            </React.Fragment>
          ))}
        </div>

        {/* <button
          id="1"
          type="submit"
          value="Team2"
          onClick={() => handleTeamMemberButton(1)}
        >
          Team 2
        </button>
        {selectedTeam === teamFunction()[1] && <div>{teamFunction()[1]}</div>}
        <br />
        <button
          id="2"
          type="submit"
          value="Team3"
          onClick={() => handleTeamMemberButton(2)}
        >
          Team 3
        </button>
        {selectedTeam === teamFunction()[2] && <div>{teamFunction()[2]}</div>}
        <br />
        <button
          id="3"
          type="submit"
          value="Team4"
          onClick={() => handleTeamMemberButton(3)}
        >
          Team 4
        </button>
        {selectedTeam === teamFunction()[3] && <div>{teamFunction()[3]}</div>}
        <br />
        <button
          id="4"
          type="submit"
          value="Team5"
          onClick={() => handleTeamMemberButton(4)}
        >
          Team 5
        </button>
        {selectedTeam === teamFunction()[4] && <div>{teamFunction()[4]}</div>}
        <br />
        <button
          id="5"
          type="submit"
          value="Team6"
          onClick={() => handleTeamMemberButton(5)}
        >
          Team 6
        </button>
        {selectedTeam === teamFunction()[5] && <div>{teamFunction()[5]}</div>}
        <br />
        <button
          id="6"
          type="submit"
          value="Team7"
          onClick={() => handleTeamMemberButton(6)}
        >
          Team 7
        </button>
        {selectedTeam === teamFunction()[6] && <div>{teamFunction()[6]}</div>}
        <br />
        <button
          id="7"
          type="submit"
          value="Team8"
          onClick={() => handleTeamMemberButton(7)}
        >
          Team 8
        </button>
        {selectedTeam === teamFunction()[7] && <div>{teamFunction()[7]}</div>}
        <br />
        <button
          id="0"
          type="submit"
          value="Team9"
          onClick={() => handleTeamMemberButton(8)}
        >
          Team 9
        </button>
        {selectedTeam === teamFunction()[8] && <div>{teamFunction()[8]}</div>} */}
      </div>
    </div>
  );
}
export default Student;
