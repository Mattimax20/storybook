import React from "react";
import { Container } from "react-bootstrap";
import { imageArray } from "../service/gallery.service";

export function Gallery() {

 
  return (
    <Container fluid>
      <div className="wrapper">
       {
         imageArray.map((v)=> { return( <img className="imgallery" src={v.src} alt="" />)})
         
        
       }
      </div>
    </Container>
  );
}
