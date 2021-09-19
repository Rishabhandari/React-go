import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
class CounterMouseHover extends Component {
 
  render() {
    return (
      <div>
        <button value="Counter" onMouseMove={this.props.counter}>
          Counter Hover
        </button>
        {this.props.count}
     
      </div>
    );
  }
}
export default UpdatedComponent(CounterMouseHover);
