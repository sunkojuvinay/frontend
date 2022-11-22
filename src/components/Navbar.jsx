import React from 'react';
import * as ReactBootStrap from "react-bootstrap";


function Navbar() {
  return (
    <div className="Navbar">
        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
      <ReactBootStrap.Navbar.Brand href="#home">Database Versions</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
          </ReactBootStrap.Nav>
          
          </ReactBootStrap.Navbar.Collapse>
     </ReactBootStrap.Navbar>
     <div class="text-center"></div>
      <div className=" text-center"></div>
    </div>
    
    );
    
    
}

export default Navbar;
