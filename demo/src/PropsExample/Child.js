import React, { Component } from "react";

class Child extends Component {
  render() {
    const { name, job } = this.props;
    return (
      <div>
        {this.props.name}
        {name}
        <button onClick={job}>CLICK ME (CHILD)</button>
      </div>
    );
  }
}
export default Child;
