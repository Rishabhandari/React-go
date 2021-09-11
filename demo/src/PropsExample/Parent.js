import React, { Component } from "react";
import Child from "./Child.js";
class Parent extends Component {
  constructor() {
    super();
    this.getJobProfile = this.getJobProfile.bind(this);
    this.state = {
      className: "Parent",
      status: "before status",
    };
    this.changeStatus = this.changeStatus.bind(this);
  }
  getJobProfile(child) {
    alert(
      `message from parent class name ${this.state.className} to  ${child}`
    );
  }
  changeStatus(data) {
    this.setState({
      status: data,
    });
  }

  render() {
    return (
      <div>
        <Child
          name="risha"
          job={this.getJobProfile}
          status={this.changeStatus}
        ></Child>
        {this.state.status}
      </div>
    );
  }
}

export default Parent;
