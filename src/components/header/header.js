import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./header.scss"
import a2 from "../../img/a2.jpg"


class Header extends Component {

  render() {
    return (
      <Navbar  className="head" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="navbar" href="/">
            <img className="imgScr" src={a2} alt=""/> 
           New-project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="link" to="/a1">Home</Link>
            <Link className="link" to="/a2">About</Link>
            <Link className="link" to="/buy">Выход</Link>
            <Link className="link" to="/a4">Войти</Link>
            <Link className="link" to="/a5">Регистрация</Link>

       
            
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
export default Header;