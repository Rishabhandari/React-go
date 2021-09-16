import React from "react";

function heroName({ heroname }) {
  if (heroname === "Joker") {
    throw new Error("Not a hero");
  } else if (heroname === "superman") {
    return <h1>Superman</h1>;
  } else if (heroname === "batman") {
    return <h1>Batman</h1>;
  }
  return <div>{heroname}</div>;
}
export default heroName;
