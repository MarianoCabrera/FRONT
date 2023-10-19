import './App.css';
import { Link, useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  function logout() { 
    sessionStorage.removeItem('token');
    console.log("sesión cerrada");
    navigate('/'); // Usa la función de navegación para redirigir a la página de inicio
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/editar">Editar productos</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {!isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/registroUsuario">Registrarse</Nav.Link>
                <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
              </>
            ) : (
              <Button variant="danger" onClick={logout}>Cerrar Sesión</Button>
            )}
            <div className='imgcart'>
              <Link to='#'><img className='iconcart' src="/cart.png" alt="imagen de carrito" /></Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
