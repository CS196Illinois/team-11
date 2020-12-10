import React, { Component } from "react";
import profilepic from './profilepic.jpg';
import selectedplant from './selected-plant.jpg';
import "./Settings.css";
import { Button, InputGroup, Form, FormControl, Row } from "react-bootstrap";
export default class Settings extends Component {
  render() {
    return (
      <div id="container1-wrapper">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <img src="logo.png" style="margin-bottom: 30px;"/>
      <div class="container-header">Sign into your account</div>
      <input id="username" class="container-input" type="text" Placeholder="Username"/>
      <input id="password" class="container-input" type="password" Placeholder="Password"/>
      <div id="login-button" class="container-button" onclick="submit()">Sign in</div>
      <div id="login-incorrect" class="container-hint"></div>
      <div id="create-account" class="container-text"><a href="sign_up.html">Create account</a></div>
      </div>
    );
  }

  
loginResult(data, status) {
    if (data.success === true) {
        console.log(data.sessionid);
        window.localStorage.setItem("sessionid", data.sessionid);
        window.location.href = "index.html";
    } else {
        failLogin();
    }
}
failLogin() {
    $("#login-button").text("Sign in");
    $("#login-incorrect").text("Your username or password is incorrect.");
}
submit() {
    $("#login-button").text("Please wait");
    var username = $("#username").val();
    var password = $("#password").val();
    $.post("http://127.0.0.1:5000/login/" + username, {"password":password}, loginResult);
}
  
}
