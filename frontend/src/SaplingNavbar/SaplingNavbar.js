import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SaplingNavbar.css";

function SaplingNavbar() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Sapling</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/resources"
              to="/resources"
            >
              Resources
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/journal" to="/journal">
              Journal
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/settings"
              to="/settings"
            >
              Settings
            </NavItem>
          </Nav>

      </Navbar>
    );

}
export default SaplingNavbar;
