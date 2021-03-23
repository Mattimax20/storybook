/* eslint-disable */
import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { CardtextElement } from "../../shared/cardText";
import { CarousellElement } from "../../shared/carousell";
import { ImgComponent } from "../../shared/imgComponent";
import { NavbarComponent } from "../../shared/navbarComponent";
export function Hompage() {
  return (
    <>
      <NavbarComponent />
      <Container fluid></Container>
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

      <hr className="hr-text" data-content="Info"></hr>

      <Row>
        <Col sm={4} className="d-flex justify-content-center">
          <ImgComponent
            url={"https://www.spazipiu.it/files/prodotti/img2/450.jpg"}
          />
        </Col>
        <Col sm={8} className="d-flex justify-content-center">
         <CardtextElement title={"titolo"} text={ "Some quick example text to build on the card title and make up the bulk of the card's content."} header={"header"}/>
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
         <CardtextElement title={"titolo"} text={ "Some quick example text to build on the card title and make up the bulk of the card's content."} header={"header"}/>
        </Col>
      </Row>


      <hr className="hr-text" data-content="Info"></hr>


      <Row>
        <Col sm={4} className="d-flex justify-content-center">
          <ImgComponent
            url={"https://www.spazipiu.it/files/prodotti/img2/450.jpg"}
          />
        </Col>
        <Col sm={8}  className="d-flex justify-content-center">
         <CardtextElement title={"titolo"} text={ "Some quick example text to build on the card title and make up the bulk of the card's content."} header={"header"}/>
        </Col>
      </Row>

<div>
<Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
  </div>

      <Container fluid></Container>
    </>
  );
}
