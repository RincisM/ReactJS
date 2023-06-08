import React, { Component } from "react";
import "./Housing.css";

class Housing extends Component {
  render() {
    const { salary, moneySavedDec, houseCost, downPayment } = this.props;
    let moneySaved = parseFloat(moneySavedDec);
    let salaryAnu = parseFloat(salary);
    let monthlySaved = (moneySaved * (salaryAnu / 12)).toFixed(0);
    let houseCo = parseFloat(houseCost);
    let downPaymentCost = houseCo * parseFloat(downPayment);
    let months = (downPaymentCost / monthlySaved).toFixed(0);
    let years = (months / 12).toFixed(1);
    return (
      <div className="housing-container">
        <div className="housing-card">
          <div className="housing-box">
            <p>
              Annual Salary: <span className="amount">{salary}</span>
            </p>
            <p>
              Monthly Salary:{" "}
              <span className="amount">{(salaryAnu / 12).toFixed(0)}</span>
            </p>
            <p>
              Money Saved (Every Month):{" "}
              <span className="amount">{monthlySaved}</span>
            </p>
            <p>
              Cost of the House: <span className="amount">{houseCo}</span>
            </p>
            <p>
              Down Payment (%) : <span className="amount">{downPayment}</span>
            </p>
            <p>
              Down Payment (in Rs.):{" "}
              <span className="amount">{downPaymentCost}</span>
            </p>
          </div>
          <div className="housing-result">
            <p>Month Required to Pay the Downpayment: {months}</p>
            <p>Years Required to Pay the Downpayment: {years}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Housing;
