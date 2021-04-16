import React from "react";



import { NavbarComponent } from "./navbarComponent";
export default {
  title: "Navbars",
  component : NavbarComponent,
  argTypes : {
      link1 : { control : 'text'},
      link2 : {control : 'text'},
      class : {control : {
        type: 'radio',
      options: ["navbar navbar-dark bg-dark" , "navbar navbar-dark bg-primary" , "navbar navbar-light"]}}
  }

 
};

const Template = (args:any)  => <NavbarComponent {...args} />


export const Navbar = Template.bind({}) 

 Navbar.args = {
   link1:"link1",
   link2:"link2",
   class:"navbar navbar-dark bg-dark"
 }