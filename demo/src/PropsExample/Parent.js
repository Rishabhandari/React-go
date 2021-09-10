import React, { Component } from "react";
import Child from "./Child.js";
class Parent extends Component {
  render() {
    return (
      <div>
        <Child name="risha"></Child>
      </div>
    );
  }
}

export default Parent;
