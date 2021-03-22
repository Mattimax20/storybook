import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { ImgComponent } from "../../shared/imgComponent";
import { NavbarComponent } from "../../shared/navbarComponent";
export function Hompage() {
  return (
    <>
      <NavbarComponent />
      <Container fluid></Container>
      <div className="initial d-flex d-flex align-items-end justify-content-center">
        <IoIosArrowDown color="white" size="50px" />
      </div>
      <hr className="hr-text" data-content="Info"></hr>
      <Row>
        <Col className="d-flex justify-content-center">
          <ImgComponent
            url={"https://www.spazipiu.it/files/prodotti/img2/450.jpg"}
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <p>Informazioni generaliiiiii</p>
        </Col>
      </Row>
      <hr className="hr-text" data-content="Info"></hr>
      <Row>
        <Col className="d-flex justify-content-center">
          <Card>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title> Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <ImgComponent
            url={"https://www.spazipiu.it/files/prodotti/img2/450.jpg"}
          />
        </Col>
      </Row>
      <hr className="hr-text" data-content="Info"></hr>
      <Row>
        <Col className="d-flex justify-content-center">
          <ImgComponent
            url={"https://www.spazipiu.it/files/prodotti/img2/450.jpg"}
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <p>Informazioni generaliiiiii</p>
        </Col>
      </Row>
      <Container fluid></Container>
    </>
  );
}
