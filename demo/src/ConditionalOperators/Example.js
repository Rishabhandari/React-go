import React, { Component } from "react";

class Example extends Component {
  constructor(props) {
    super();
    this.state = {
      IsLoginin: true,
      Another: "ss",
    };
  }

  //ternanry operator
  // render() {
  //   return this.state.IsLoginin ? <h1>Logged In</h1> : <h1>Log In Please</h1>;
  // }

  /**  example of element rendering
  render() {
    let html;
    if (this.state.IsLoginin) {
      html = <div>Logged in</div>;
    } else {
      html = <div>Log in</div>;
    }
    // remember :inside jsx no js can be written
    return (
      <div>
        {html}
        {this.state.Another}
      </div>
    );
  }
**/
  // Example of simple if/else
  render() {
    if (this.state.IsLoginin) {
      return (
        <>
          <h1>Logged in ! Have Fun</h1>
          multiple
        </>
      );
    } else {
      return <h1>Log In</h1>;
    }
  }
}
export default Example;
