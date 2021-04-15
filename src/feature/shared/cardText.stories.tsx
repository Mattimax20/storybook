import React from "react";

import { CardtextElement } from "./cardText";
import { CarousellElement } from "./carousell";
import { action } from "@storybook/addon-actions";
export default {
  title: "text",
  component : CardtextElement,
  argTypes : {
    title : {control : 'text'},
    text : {control : 'text'},
    header : {control : 'text'},
    color : { control: {
        type: 'radio',
        options: ["card text-white bg-primary" , "card text-white bg-danger" , "card text-white bg-success"]
      }}
}
};


const Template = args  => <CardtextElement {...args} />


export const CardText = Template.bind({}) 
 CardtextElement.args = {
 title:"Title" ,
 text:"testo" ,
 header:"header" ,
 }


