import React, { Component } from "react";
import LifeCycleComponentB from "./LifeCycleComponentB";
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
    return (
      <>
        <LifeCycleComponentB />
      </>
    );
  }
  componentDidMount() {
    //now if child component is present then parent component mount is called at the end
    console.log(
      "4 (last if parent component).LifeCycleComponentA  componentDidMount"
    );
  }
}
export default LifeCycleComponentA;
