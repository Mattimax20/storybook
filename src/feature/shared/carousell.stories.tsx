import React from "react";


import { CarousellElement } from "./carousell";
import { action } from "@storybook/addon-actions";
import { CarousellArray } from "./carousell.service";
export default {
  title: "Carosello",
  component : CarousellElement,
  argTypes : {
      imgArray : { control : 'object'}

  }

 
};

const Template = (args:any) => <CarousellElement {...args} />


export const Carousell = Template.bind({}) 
 Carousell.args = {
  imgArray: CarousellArray,
  onclick : action('azione')
 }

