import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
class CounterClick extends Component {

  render() {
    return (
      <div>
        <button value="Counter" onClick={this.props.counter}>
          Counter
        </button>
        {this.props.count}
      </div>
    );
  }
}
export default UpdatedComponent(CounterClick);
