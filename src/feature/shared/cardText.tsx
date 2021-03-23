import React from "react";
import { Card } from "react-bootstrap";
interface propsCardtext {
  title: string;
  text: string;
  header: string;
}

export function CardtextElement(props: propsCardtext) {
  return (
    <Card style = {{ width: "80%" , height : "100%" , overflow : "auto" , marginTop:"10px"}}>
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
