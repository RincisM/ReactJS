import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Student from "./Student";
import Staff from "./Staff";
import "./Welcome.css";

function WelcomePage() {
  return (
    <Router>
      <h1>Project Slot Selection</h1>
      <nav>
        <ul>
          <li>
            <Link to="/student">Go to Students Page</Link>
          </li>
          <li>
            <Link to="/staff">Go to Staffs Page</Link>
          </li>
        </ul>
      </nav>
      <div className="routes-container">
        <Routes>
          <Route path="/student" Component={Student} />
          <Route path="/staff" Component={Staff} />
        </Routes>
      </div>
    </Router>
  );
}

export default WelcomePage;
