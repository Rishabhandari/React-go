import React, { Component } from "react";
import Child from "./Child.js";
class Parent extends Component {
  constructor() {
    super();
    this.getJobProfile = this.getJobProfile.bind(this);
    this.state = {
      className: "Jeetendra",
    };
  }
  getJobProfile() {
    alert(`message from parent class name ${this.state.className}`);
  }
  render() {
    return (
      <div>
        <Child name="risha" job={this.getJobProfile}></Child>
      </div>
    );
  }
}

export default Parent;
