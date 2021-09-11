import React, { Component } from "react";
class ExampleForEach extends Component {
  render() {
    const siblingList = ["amit", "sonali", "risha"];
    const sib = [];
    // siblingList.forEach((sibling) => {
    //   sib.push(sibling);
    // });
    return (
      <h1>
        <br />
        {siblingList.forEach((sibling, index) => {
          <h1 key={ index}> {sib.push(sibling + " , ")}</h1>;
        })}
        {sib}
        <br />
        {/* By map function , now if inside call back function you need html elements then put it inside  { } */}
        {siblingList.map((sib, index) => {
          return <h3  key={index}> {sib + "by map "}</h3>;
        })}
      </h1>
    );
  }
}
export default ExampleForEach;
