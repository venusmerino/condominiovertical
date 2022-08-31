import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavBar from "./components/NavBar";

function App() {
  let arreglo = [" Prólogo ", " índice ", " Proyectos ", "Contacto"];

  function bienvenida() {
    return arreglo.map((nombre) => {
      return <Nav.Link>{nombre}</Nav.Link>;
    });
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> Guía de proyectos </Navbar.Brand>
        <Nav className="me-auto">{bienvenida()}</Nav>
      </Container>
      <NavBar></NavBar>
    </Navbar>
  );
}

export default App;
