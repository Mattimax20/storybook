import React from "react";
import { Card } from "react-bootstrap";
interface propsCardtext {
  title: string;
  text: string;
  header: string;
  color? : string;

}

export function CardtextElement(props: propsCardtext) {
  return (
    <Card className={props.color}style = {{ width: "80%" , height : "100%" , overflow : "auto" , marginTop:"10px"}}>
      <Card.Header>{props.header}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
