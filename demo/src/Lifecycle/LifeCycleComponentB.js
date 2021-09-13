import React, { Component } from "react";

class LifeCycleComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1.LifeCycleComponentB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    // this function accepts props and state and return new value for state and props
    console.log("2.LifeCycleComponentB getDerivedStateFromProps");
    return null;
  }

    componentDidUpdate() {
      // called when state of variable is changed 
    console.log("5.LifeCycleComponentB componentDidUpdate");
  }
  render() {
    console.log("3.LifeCycleComponentB render");
    return <></>;
  }
  componentDidMount() {
    console.log("4.LifeCycleComponentB  componentDidMount");
  }
}
export default LifeCycleComponentA;
