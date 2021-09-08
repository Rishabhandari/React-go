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
      apple: 0,
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

    /** console.log(this.state.count);
     here you see the state count is not geeting incremented directly so ,
    if you want code to be executed just  after the value incremented use call back functions **/
  }
  incrementFive() {
    this.setState((previousState) => ({
      apple: previousState.apple + 5,
    }));
  }
  /** this is how we use the previos state 
   * notice that the previous state of variable is 5 and then on other click got 10
   * 
   */
 

  render() {
    return (
      <div>
        <h1>
          {this.props.name} Hello class component {this.state.message}
        </h1>
        <button onClick={() => this.increment()}>increment</button>
        <br />
        COUNT : {this.state.count} <br />
        Duplicate Count count : {this.state.duplicateCount}
        <h2>Using Previous State of Variable</h2>
        <button onClick={() => this.incrementFive()}>Get Previos State</button>
        {this.state.apple}
      </div>
    );
  }
}
export default Welcome;
