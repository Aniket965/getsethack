import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-video">
          <img
            src={
              "https://i.pinimg.com/originals/a6/5d/05/a65d052371b769621bc056d22da58af9.jpg"
            }
          />
        </div>
        <div className="landing-content">
          <h1>HACKOVERFLOW 🍺</h1>
          <h3>⏳ AUG 2018, BVCOE NEW DELHI</h3>
        </div>
        <div className="register">
          <div className="register-button">REGISTER </div>
          <div className="register-button-s">SPONSOR </div>
        </div>
      </div>
    );
  }
}

export default App;
