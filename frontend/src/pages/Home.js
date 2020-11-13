import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
        <Jumbotron>
          <h2> Welcome </h2>
          <Link to="/resources">
            <Button bsStyle="primary">Resources</Button>
          </Link>
        </Jumbotron>
    );
  }
}
