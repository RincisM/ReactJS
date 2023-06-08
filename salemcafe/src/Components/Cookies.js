import React, { Component } from "react";
import "./Cookies.css";

class Cookies extends Component {
  state = {
    blueberry: 10,
    cookies: 10,
    cookiesSold: 0,
    blueberrySold: 0,
    soldCount: 0,
    quantityCookies: 1,
    quantityBlueBerry: 1,
  };

  blueberryMuffins = (event) => {
    const quantity = parseInt(
      event.target.parentNode.previousSibling.querySelector("input").value
    );
    if (this.state.blueberry <= 0) {
      return;
    }
    this.setState(
      (prevState) => ({
        blueberry: prevState.blueberry - quantity,
        blueberrySold: prevState.blueberrySold + quantity,
      }),
      () => {
        this.soldCountState();
      }
    );
  };

  chocolateChip = (event) => {
    const quantity = parseInt(
      event.target.parentNode.previousSibling.querySelector("input").value
    );
    if (this.state.cookies <= 0) {
      return;
    }
    this.setState(
      (prevState) => ({
        cookies: prevState.cookies - quantity,
        cookiesSold: prevState.cookiesSold + quantity,
      }),
      () => {
        this.soldCountState();
      }
    );
  };

  quantityCookieChange = (event) => {
    this.setState({ quantityCookies: event.target.value });
  };

  quantityBlueBerryChange = (event) => {
    this.setState({ quantityBlueBerry: event.target.value });
  };

  soldCountState = () => {
    this.setState({
      soldCount:
        parseFloat(this.state.cookiesSold) +
        parseFloat(this.state.blueberrySold),
    });
  };

  render() {
    return (
      <div className="outer-background">
        <div className="card-container">
          <h1 className="heading">Salem Café</h1>
          <table>
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Stock Count</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>BlueBerry Muffins</td>
                <td>{this.state.blueberry}</td>
                <td>
                  <input
                    type="number"
                    id="quantity-1"
                    min="1"
                    max={this.state.blueberry}
                    value={this.state.quantityBlueBerry}
                    onChange={this.quantityBlueBerryChange}
                    placeholder="Enter >0"
                    required
                  />
                </td>
                <td>
                  <button className="button" onClick={this.blueberryMuffins}>
                    Buy
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Chocolate Chip Cookies</td>
                <td>{this.state.cookies}</td>
                <td>
                  <input
                    type="number"
                    id="quantity-2"
                    min="1"
                    value={this.state.quantityCookies}
                    max={this.state.cookies}
                    onChange={this.quantityCookieChange}
                    placeholder="Enter >0"
                    required
                  />
                </td>
                <td>
                  <button className="button" onClick={this.chocolateChip}>
                    Buy
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <p>BlueBerry Muffins Sold: {this.state.blueberrySold}</p>
          <p>ChocolateChip Cookies Sold: {this.state.cookiesSold}</p>
          <p>Total items Sold: {this.state.soldCount}</p>
        </div>
      </div>
    );
  }
}

export default Cookies;
