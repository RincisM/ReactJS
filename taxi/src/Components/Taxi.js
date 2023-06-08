import React, { useState } from "react";
import "./Taxi.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const locationsArray = [
  "Anna Nagar",
  "Arumbakkam",
  "Cmbt",
  "Maduravoyil",
  "Guindy",
  "Saidapet",
  "Central",
  "Besant Nagar",
  "Thiruvanmiyur",
];
const distanceArray = [10, 4, 20, 5, 13, 10, 7, 9, 15];

function Taxi() {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [selectedCar, setSelectedCar] = useState("");
  const [bookingDate, setBookingDate] = useState(null);
  const [bookingTime, setBookingTime] = useState(null);

  const handleFromInputChange = (event) => {
    const value = event.target.value;
    setFromValue(value);
    setFromSuggestions(getSuggestions(value));
  };

  const handleToInputChange = (event) => {
    const value = event.target.value;
    setToValue(value);
    setToSuggestions(getSuggestions(value));
  };

  const handleSuggestionClick = (suggestion, field) => {
    if (field === "from") {
      setFromValue(suggestion);
      setFromSuggestions([]);
    } else if (field === "to") {
      setToValue(suggestion);
      setToSuggestions([]);
    }
  };

  const handleFromInputBlur = () => {
    if (fromSuggestions.length > 0) {
      setFromValue(fromSuggestions[0]);
      setFromSuggestions([]);
    }
  };

  const handleToInputBlur = () => {
    if (toSuggestions.length > 0) {
      setToValue(toSuggestions[0]);
      setToSuggestions([]);
    }
  };

  const handleCarSelect = (event) => {
    setSelectedCar(event.target.value);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    return locationsArray.filter((location) =>
      location.toLowerCase().includes(inputValue)
    );
  };

  const calculateDistance = () => {
    const fromIndex = locationsArray.indexOf(fromValue);
    const toIndex = locationsArray.indexOf(toValue);
    if (fromIndex !== -1 && toIndex !== -1) {
      return distanceArray[Math.abs(toIndex - fromIndex)];
    }
    return null;
  };

  const calculateTotalCost = () => {
    const distance = calculateDistance();
    const carCost = getCarCost(selectedCar);
    if (distance !== null && carCost !== null) {
      return distance * carCost;
    }
    return null;
  };

  const renderDistance = () => {
    const distance = calculateDistance();
    if (distance !== null) {
      return <p>Distance: {distance} km</p>;
    }
    return null;
  };

  const getCarCost = (car) => {
    switch (car) {
      case "SUV":
        return 30;
      case "Sedan":
        return 20;
      case "HashBack":
        return 15;
      default:
        return null;
    }
  };

  const handleDateChange = (date) => {
    setBookingDate(date);
  };

  const handleTimeChange = (time) => {
    setBookingTime(time);
  };
  const handleBooking = () => {
    const bookingId = generateBookingId();
    const fromAddress = fromValue;
    const toAddress = toValue;
    const car = selectedCar;
    const price = calculateTotalCost();
    const bookingDateTime = `${bookingDate.toLocaleDateString()} ${bookingTime.toLocaleTimeString()}`;
    alert(
      `Your Booking is Successful.\nId: ${bookingId}\n\nBooking Details\nFrom: ${fromAddress}\tTo: ${toAddress}\nCar: ${car}\nPrice: ${price}\nBooking Date and Time: ${bookingDateTime}`
    );
    window.location.reload();
  };

  const generateBookingId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let bookingId = "";

    for (let i = 0; i < 5; i++) {
      bookingId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return bookingId;
  };

  const renderSuggestions = (suggestions, field) => {
    return (
      <ul>
        {suggestions.map((suggestion) => (
          <li
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion, field)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    );
  };
  const isFormValid = fromValue && toValue && selectedCar;

  return (
    <div className="taxi-container">
      <h1 className="heading">GO TAXI</h1>
      <label htmlFor="From">From:</label>
      <input
        type="text"
        id="From"
        placeholder="Enter the Starting point"
        value={fromValue}
        onChange={handleFromInputChange}
        onBlur={handleFromInputBlur}
      />
      {renderSuggestions(fromSuggestions, "from")}

      <br />

      <label htmlFor="To">To:</label>
      <input
        type="text"
        id="To"
        placeholder="Enter the Destination point"
        value={toValue}
        onChange={handleToInputChange}
        onBlur={handleToInputBlur}
      />
      {renderSuggestions(toSuggestions, "to")}
      <br />
      {renderDistance()}
      <label htmlFor="carType">Select the Type of Car:</label>
      <select id="carType" value={selectedCar} onChange={handleCarSelect}>
        <option>Select one of the types</option>
        <option value="SUV">SUV: Rs.30/km</option>
        <option value="Sedan">Sedan: Rs.20/km</option>
        <option value="HashBack">Hashback: Rs.15/km</option>
      </select>
      <DatePicker
        selected={bookingDate}
        onChange={handleDateChange}
        placeholderText="Select Booking Date"
        className="reactdatepicker"
      />
      <DatePicker
        selected={bookingTime}
        onChange={handleTimeChange}
        showIcon
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        className="reactdatepicker"
        dateFormat="h:mm aa"
        placeholderText="Select Booking Time"
      />
      <p>Total Cost: Rs. {calculateTotalCost()}</p>
      <button type="submit" onClick={handleBooking} disabled={!isFormValid}>
        Book
      </button>
    </div>
  );
}

export default Taxi;
