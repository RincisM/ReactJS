import React, { Component } from "react";
import Housing from "./Housing";
import "./Salary.css";

class Salary extends Component {
  state = {
    salary: 0,
    moneySavedDec: 0,
    houseCost: 0,
    downPayment: 0,
    showHousing: false,
  };

  handleMoneySavedChange = (event) => {
    this.setState({ moneySavedDec: event.target.value });
  };

  handleSalaryChange = (event) => {
    this.setState({ salary: event.target.value });
  };

  handleHouseCost = (event) => {
    this.setState({ houseCost: event.target.value });
  };

  handleDownPayment = (event) => {
    this.setState({ downPayment: event.target.value });
  };

  handleButtonClick = () => {
    this.setState({ showHousing: true });
  };

  render() {
    const { salary, moneySavedDec, houseCost, downPayment, showHousing } =
      this.state;
    return (
      <div className="salary-container">
        <div className="salary-card">
          <h1 className="heading">Month Calculator</h1>
          <label htmlFor="annualSalary">Enter your Annual Salary:</label>
          <input
            className="salary-input"
            id="annualSalary"
            type="number"
            placeholder="Enter your Annual Salary"
            onChange={this.handleSalaryChange}
          />
          <br />
          <label htmlFor="moneySaved">
            Enter the Percentage of Amount to be saved:
          </label>
          <input
            className="salary-input"
            id="moneySaved"
            type="number"
            step="0.01"
            min="0"
            placeholder="(in decimals)"
            onChange={this.handleMoneySavedChange}
          />
          <br />
          <label htmlFor="houseCost">Enter the Total Cost of the House:</label>
          <input
            className="salary-input"
            id="houseCost"
            type="number"
            placeholder="Total cost of the house"
            onChange={this.handleHouseCost}
          />
          <br />
          <label htmlFor="downPayment">
            Enter the Percentage of Downpayment:{" "}
          </label>
          <input
            className="salary-input"
            id="downPayment"
            type="number"
            placeholder="(in decimals)"
            step="0.01"
            min="0"
            onChange={this.handleDownPayment}
          />
          <br />
          <button className="salary-button" onClick={this.handleButtonClick}>
            Calculate the Number of Months
          </button>
          {showHousing && (
            <Housing
              salary={salary}
              moneySavedDec={moneySavedDec}
              houseCost={houseCost}
              downPayment={downPayment}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Salary;
