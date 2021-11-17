import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import logo from "../assets/image/logo.png";

const Info = () => {
  return (
    <Container className="app">
      <Row className="logo-container">
        <img src={logo} className="logo-image" alt="logo" />
      </Row>
      <Row className="justify-content-md-center">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Info;
