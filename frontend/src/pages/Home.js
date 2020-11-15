import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, InputGroup, Form, FormControl } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-feelings">
          
          <h1 className="feelings">Hello, user. How are you? </h1>
          <h1 className="feelings">Hello, user. How are you? </h1>
          
          <div>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">I'm feeling </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Express yourself here!"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
        </div>

        </div>
    </div>
    );
  }
}
