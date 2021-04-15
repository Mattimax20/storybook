/* eslint-disable */
import react from "react";
import { Button, Carousel } from "react-bootstrap";
import imgarray from "../../interface/imgArray.interface";
import { CarousellArray } from "./carousell.service";
interface carousellprops {
    imgArray: Array<imgarray>;
    onclick? : () => void;
}
export function CarousellElement (props:carousellprops){
let i = 1;
    return(
        <Carousel fade>
          { props.imgArray.map((v) =>  
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={v.src!} height="1000px"
            alt="slide"
          />
          <Carousel.Caption>
            <h3>{i++} slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button onClick = {props.onclick}> Provami </Button>
          </Carousel.Caption>
        </Carousel.Item>
          )}
      </Carousel>
    )
}