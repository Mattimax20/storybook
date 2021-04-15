import React from "react";

import { CardtextElement } from "./cardText";
import { CarousellElement } from "./carousell";
import { action } from "@storybook/addon-actions";
import { CarousellArray } from "./carousell.service";
import imgarray from "../../interface/imgArray.interface";
export default {
  title: "Carosello",
  component : CarousellElement,
 
};


export const CarousellImg = () => {
    
  return (
     
      <CarousellElement
      imgArray={CarousellArray}
        onclick={action("id : ")}
      />
  )
};
