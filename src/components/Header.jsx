import React from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" position= "fixed" >
            <Container>
            <LinkContainer to="/">
  <Navbar.Brand className='heading' ><h1>Database Versions</h1></Navbar.Brand>
  </LinkContainer>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/">
      <Nav.Link><h5>DBVersion</h5></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/">
      <Nav.Link><h5>About</h5></Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;