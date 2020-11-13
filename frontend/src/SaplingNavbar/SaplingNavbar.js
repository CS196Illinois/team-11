import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SaplingNavbar.css";

function handleSelect() {
  console.log('here')
}
export default function SaplingNavbar() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
      // <Navbar default collapseOnSelect>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //       <Link to="/">Sapling</Link>
      //     </Navbar.Brand>
      //     <Navbar.Toggle />
      //   </Navbar.Header>
      //     <Nav pullRight>
      //       <Nav.Item eventKey={1} componentClass={Link} href="/" to="/">
      //         Home
      //       </Nav.Item>
      //       <Nav.Item
      //         eventKey={2}
      //         componentClass={Link}
      //         href="/resources"
      //         to="/resources"
      //       >
      //         Resources
      //       </Nav.Item>
      //       <Nav.Item eventKey={5} componentClass={Link} href="/journal" to="/journal">
      //         Journal
      //       </Nav.Item>
      //       <Nav.Item
      //         eventKey={4}
      //         componentClass={Link}
      //         href="/settings"
      //         to="/settings"
      //       >
      //         Settings
      //       </Nav.Item>
      //     </Nav>

      // </Navbar>
    );

}
