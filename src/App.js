import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <HomePage></HomePage>
    </>
  );
}

export default App;

//crear un componente homepage
//sserá la pagina principal
//toda la estructura debe ir dentro
//debe ir en app, para que se vea. Quitar todo lo del app y poner
