/* eslint-disable */
import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { CardtextElement } from "../../shared/cardText";
import { CarousellElement } from "../../shared/carousell";
import { ImgComponent } from "../../shared/imgComponent";
import { FooterElement } from "../../shared/footer";
export function Hompage() {
  return (
    <>
      <CarousellElement
        img1={
          "https://i.pinimg.com/originals/2b/df/57/2bdf571e7f2491b931a84ed6b8d14a1d.jpg"
        }
        img2={
          "https://i.pinimg.com/originals/2b/df/57/2bdf571e7f2491b931a84ed6b8d14a1d.jpg"
        }
        img3={
          "https://i.pinimg.com/originals/2b/df/57/2bdf571e7f2491b931a84ed6b8d14a1d.jpg"
        }
      />
      <Container fluid>
        <hr className="hr-text" data-content="Info"></hr>

        <Row>
          <Col sm={4} className="d-flex justify-content-center">
            <ImgComponent
              url={"https://www.spazipiu.it/files/prodotti/img2/450.jpg"}
            />
          </Col>
          <Col sm={8} className="d-flex justify-content-center">
            <CardtextElement
              title={"titolo"}
              text={
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              }
              header={"header"}
            />
          </Col>
        </Row>

        <hr className="hr-text" data-content="Info"></hr>

        <Row>
          <Col sm={4} className="d-flex justify-content-center">
            <ImgComponent
              url={"https://www.spazipiu.it/files/prodotti/img2/450.jpg"}
            />
          </Col>
          <Col sm={8} className="d-flex justify-content-center">
            <CardtextElement
              title={"titolo"}
              text={
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              }
              header={"header"}
            />
          </Col>
        </Row>

        <hr className="hr-text" data-content="Info"></hr>

        <Row>
          <Col sm={4} className="d-flex justify-content-center">
            <ImgComponent
              url={"https://www.spazipiu.it/files/prodotti/img2/450.jpg"}
            />
          </Col>
          <Col sm={8} className="d-flex justify-content-center">
            <CardtextElement
              title={"titolo"}
              text={
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              }
              header={"header"}
            />
          </Col>
        </Row>

        <hr className="hr-text" data-content="Info"></hr>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194776.64900409448!2d17.857412235017705!3d40.289406666323714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x202081618deb0e4f!2sMetal%20Montaggi!5e0!3m2!1sit!2sit!4v1616503296137!5m2!1sit!2sit"
            />
          </div>
        </div>
      </Container>
     
    </>
  );
}
