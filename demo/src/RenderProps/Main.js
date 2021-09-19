import React, { Component } from "react";
import HoverCounter from "./HoverCounter";

// the render prop is a technique of sharing code b/w react component using a prop whose value function
class Main extends Component {
  render() {
    return (
      <>
        <HoverCounter
          render={(isValue) => (isValue ? "Risha logged In" : "Not logged in")}
        />
    
      </>
    );
  }
}
export default Main;
