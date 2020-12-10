import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";
import SaplingNavbar from "./SaplingNavbar/SaplingNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SaplingNavbar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </Router>
    );
  }
}

export default App;

