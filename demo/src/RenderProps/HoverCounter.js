import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        {this.props.render(true)}
      </div>
    );
  }
}
export default HoverCounter;
