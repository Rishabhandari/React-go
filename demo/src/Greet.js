/** Example of functional component  also called stateless
 * It can take prop as a parameter and return jsx.
 *  */

import React from "react";


const welcome = ({name}) => {
 // const {name} = props
  return <h1> {name} hello im functional component</h1>;
};

export default welcome;
/**
 * Note :  export default means the component can be named anything while it is getting imported .
 whereas if we put export const welcome then in App.js the name must be sameas Greet only. 
 */
