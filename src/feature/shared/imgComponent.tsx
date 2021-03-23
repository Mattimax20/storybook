/* eslint-disable */
import React from "react";
interface ImgProps {

    url:string;
}

export function ImgComponent(props : ImgProps) {
  return (
   <img className="rounded mx-auto d-block" src={props.url}width="90%" height="auto"/>
    
  )
}