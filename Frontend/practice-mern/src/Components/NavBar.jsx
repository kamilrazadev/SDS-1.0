import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { role } from "../App";

const NavBar = () => {
  const handleUserLogout = () => {
    console.log("Logged Out");
  };

  return (
    <Navbar bg="info" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          {role == "guest" ? (
            <Nav.Link href="/login">
              <button className="btn btn-outline-light">Login</button>
            </Nav.Link>
          ) : (
            <Nav.Link onClick={handleUserLogout}>
              <button className="btn btn-outline-light">Logout</button>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
