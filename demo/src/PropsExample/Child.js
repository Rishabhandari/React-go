import React, { Component } from "react";


class Child extends Component {
  render() {
    const { name, job, status } = this.props;
    return (
      <div>
        {this.props.name}
        {name}
        <button onClick={() => job("child name")}>CLICK ME (CHILD)</button>
        <button onClick={() => status("passed status")}>P</button>
      </div>
    );
  }
}
export default Child;
