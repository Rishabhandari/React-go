import React, { Component } from "react";

class LifeCycleComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1.LifeCycleComponentA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    // this function accepts props and state and return new value for state and props
    console.log("2.LifeCycleComponentA getDerivedStateFromProps");
    return null;
  }

  componentDidUpdate() {
    console.log("5.LifeCycleComponentA  componentDidUpdate");
  }
  render() {
    console.log("3.LifeCycleComponentA render");
    return <></>;
  }
  componentDidMount() {
    console.log("4.LifeCycleComponentA  componentDidMount");
  }
}
export default LifeCycleComponentA;
