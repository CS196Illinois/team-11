import React, { Component } from "react";
import profilepic from './profilepic.jpg';
import "./Settings.css";
export default class Settings extends Component {
  render() {
    return (
      
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <img src={profilepic} alt="profpic"></img>
        <h2>[User's Name]</h2>
      </div>

    );
  }
}
