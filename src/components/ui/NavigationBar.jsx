import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <Container fluid  className='navigation-bar'>
    <Container>
    <Navbar  className='d-flex a'>
      <Navbar.Brand href="/">GO4Help</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='d-flex'>
        <Nav className="me-auto">
          <Nav.Link className='text-white' href="/about-us">ABOUT US</Nav.Link>
          <Nav.Link className='text-white' href="#link">OUR PROJECTS</Nav.Link>
          <Nav.Link className='text-white' href="/our-history">OUR HISTORY</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline className='d-flex'>
          <FormControl type="text" placeholder="Search" className="me-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </Container>
    </Container>
  );
};

export default NavigationBar;
