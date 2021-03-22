import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
interface ImgProps {

    url:string;
}

export function ImgComponent(props : ImgProps) {
  return (
   <img className="rounded mx-auto d-block" src={props.url}width="600px" height="auto"/>
    
  )
}