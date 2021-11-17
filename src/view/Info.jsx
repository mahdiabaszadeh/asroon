import React from "react";
import { Container, Row, Table, Button, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import logo from "../assets/image/logo.png";

const Info = () => {
  const { userData } = useSelector((state) => ({ userData: state.user.data }));
  return (
    <Container className="app">
      <Row className="logo-container">
        <img src={logo} className="logo-image" alt="logo" />
      </Row>
      <Row>
        <Col xs={6}>
          <h2>داده ها</h2>
        </Col>
        <Col xs={6}>
          <Button variant="outline-danger">دریافت اطلاعات از سرور</Button>
          <Button variant="danger">ساخت اکانت جدید</Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Table striped bordered hover>
          {userData && (
            <>
              <thead>
                <tr>
                  <th>نام و نام خانوادگی</th>
                  <th>شماره موبایل</th>
                  <th>سن</th>
                  <th>ایمیل</th>
                  <th>تاریخ ایجاد</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{userData.fullName}</td>
                  <td>{userData.phoneNumber}</td>
                  <td>{userData.age}</td>
                  <td>{userData.email}</td>
                  <td>{userData.createdDate}</td>
                  <td>
                    <Button className="icon-button">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.33325 2.66667H2.66659C2.31296 2.66667 1.97382 2.80715 1.72378 3.0572C1.47373 3.30724 1.33325 3.64638 1.33325 4.00001V13.3333C1.33325 13.687 1.47373 14.0261 1.72378 14.2761C1.97382 14.5262 2.31296 14.6667 2.66659 14.6667H11.9999C12.3535 14.6667 12.6927 14.5262 12.9427 14.2761C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V8.66667"
                          stroke="#666464"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3333 1.66667C12.5985 1.40145 12.9582 1.25246 13.3333 1.25246C13.7083 1.25246 14.068 1.40145 14.3332 1.66667C14.5985 1.93189 14.7475 2.2916 14.7475 2.66667C14.7475 3.04174 14.5985 3.40145 14.3332 3.66667L7.99992 10L5.33325 10.6667L5.99992 8L12.3333 1.66667Z"
                          stroke="#666464"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </td>
                  <td>
                    <Button className="icon-button">
                      <svg
                        width="12"
                        height="16"
                        viewBox="0 0 12 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33337 4V2.66667C3.33337 2.31305 3.47385 1.97391 3.7239 1.72386C3.97395 1.47381 4.31309 1.33334 4.66671 1.33334H7.33337C7.687 1.33334 8.02613 1.47381 8.27618 1.72386C8.52623 1.97391 8.66671 2.31305 8.66671 2.66667V4M10.6667 4V13.3333C10.6667 13.687 10.5262 14.0261 10.2762 14.2761C10.0261 14.5262 9.687 14.6667 9.33337 14.6667H2.66671C2.31309 14.6667 1.97395 14.5262 1.7239 14.2761C1.47385 14.0261 1.33337 13.687 1.33337 13.3333V4H10.6667Z"
                          stroke="#DE2D26"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.66663 7.33334V11.3333"
                          stroke="#DE2D26"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.33337 7.33334V11.3333"
                          stroke="#DE2D26"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </>
          )}
        </Table>
      </Row>
    </Container>
  );
};

export default Info;
