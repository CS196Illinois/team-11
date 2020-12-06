import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, InputGroup, Form, FormControl } from "react-bootstrap";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-feelings">
          
        <br></br>
        <br></br>
        <br></br>
          <h2 className="feelings">Hello, user. Have you journaled today? </h2>
          <a href="/journal"><Button variant="outline-success">Log my feelings</Button></a>
        </div>
        <br></br>
        <h2>My past week </h2>

        <Form inline>
      <FormControl type="text" placeholder="Look up an entry" className="mr-sm-2" />
      <Button variant="outline-success">Go</Button>
    </Form>
    </div>
    );
  }
}
