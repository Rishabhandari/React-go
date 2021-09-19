import React, { Component } from "react";
import { UserConsumer } from "./useContext";


class Child extends Component {
  render() {
    const { name, job, status } = this.props;
    return (
      <div>
        {this.props.name}
        {name}
        <button onClick={() => job("child name")}>CLICK ME (CHILD)</button>
        <button onClick={() => status("passed status")}>P</button>

        {/* using context since parent component is provider and its sub classes are consumenr 
        So , context helps for passing child prop without passing it to its parent component
        */}
        <UserConsumer>

          {username => { 
            return <h1>uihiuh{username}</h1>
          }
          }
        </UserConsumer>
      </div>
    );
  }
}
export default Child;
