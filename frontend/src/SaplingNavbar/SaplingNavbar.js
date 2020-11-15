import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SaplingNavbar.css";

function handleSelect() {
  console.log('here')
}
export default function SaplingNavbar() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand className=""><Link>Sapling</Link></Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
      <Form inline>
      <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link href="/journal">Journal</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link href="/resources">Resources</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link href="/settings">Settings</Nav.Link>
      </Nav.Item>
      </Form>
    </Navbar>
      /*<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sapling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Resources</Nav.Link>
           
          </Nav>
          <Form inline>
            
          </Form>
        </Navbar.Collapse>
      </Navbar>*/
      
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
