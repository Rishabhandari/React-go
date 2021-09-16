import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";
class ParentHeroComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <Hero heroname="superman" />
        <Hero heroname="batman" />
        {/* Now joker will throw expection so in production we can show some fallback ui for expection and that is called error boundaries */}

        <ErrorBoundary>
          <Hero heroname="Joker" />
        </ErrorBoundary>
      </>
    );
  }
}
export default ParentHeroComponent;
