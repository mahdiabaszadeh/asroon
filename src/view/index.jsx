import React from "react";
import { Container, Row } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import logo from "../assets/image/logo.png";

const Home = () => {
  return (
    <Container className="app">
      <Row className="logo-container">
        <img src={logo} className="logo-image" alt="logo" />
      </Row>
      <Row className="justify-content-md-center">
        <RegisterForm />
      </Row>
    </Container>
  );
};

export default Home;
