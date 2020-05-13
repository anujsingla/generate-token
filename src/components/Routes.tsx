import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Routes() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand>
          <NavLink to="/" className="navbar-brand">
            Token
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" as="ul">
            <Nav.Item as="li">
              <NavLink to="/generateToken" className="nav-link">
                Generate Token
              </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
              <NavLink to="/listToken" className="nav-link">
                List Token
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
