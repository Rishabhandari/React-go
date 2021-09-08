import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    /** Super(): It is used to call the
     *  constructor of its parent class. This is required when we need to
     * access some variables of its parent class. */
    super();
    this.state = {
      message: "Welcome to js",
      count: 0,
      duplicateCount: 0,
    };
  }
  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        this.setState({
          duplicateCount: this.state.count,
        });
      }
    );

    //  console.log(this.state.count);
    // here you see the state count is not geeting incremented directly so ,
    //if you want code to be executed just  after the value incremented use call back functions
  }
  render() {
    return (
      <h1>
        {this.props.name} Hello class component {this.state.message}
        <button onClick={() => this.increment()}>increment</button>
        COUNT : {this.state.count}
        new count : {this.state.duplicateCount}
      </h1>
    );
  }
}
export default Welcome;
