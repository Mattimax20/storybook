import React from "react";

import { CardtextElement } from "./cardText";
import { CarousellElement } from "./carousell";
import { action } from "@storybook/addon-actions";
import { CarousellArray } from "./carousell.service";
import imgarray from "../../interface/imgArray.interface";
import { imageArray } from "../gallery/service/gallery.service";
import { Button } from "react-bootstrap";
export default {
  title: "Carosello",
  component : CarousellElement,
  argTypes : {
      imgArray : { control : 'object'}

  }

 
};

const Template = args  => <CarousellElement {...args} />


export const Carousell = Template.bind({}) 
 Carousell.args = {
  imgArray: CarousellArray,
  onclick : action('azione')
 }

