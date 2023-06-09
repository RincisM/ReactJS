import React, { Component } from "react";

class Units extends Component {
  handleChange = (event) => {
    const { onUnitsChange } = this.props;
    const value = event.target.value;
    onUnitsChange(value);
  };
  render() {
    return (
      <>
        <h1 className="heading">Electricity Bill</h1>
        <label htmlFor="unit">Enter the Units Consumed: </label>
        <input
          id="unit"
          type="number"
          placeholder="Enter the Units Consumed: "
          onChange={this.handleChange}
        ></input>
      </>
    );
  }
}

export default Units;
