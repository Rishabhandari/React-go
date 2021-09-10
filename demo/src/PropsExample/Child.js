import React, { Component } from "react";

class Child extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        {this.props.name}
        {name}
      </div>
    );
  }
}
export default Child;
