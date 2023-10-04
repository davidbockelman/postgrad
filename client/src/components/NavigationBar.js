import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Postgrad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavigationBar;