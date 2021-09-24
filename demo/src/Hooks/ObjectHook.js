import React, { useState } from "react";

function ObjectHook() {
  // define the state as  a object
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      First name{" "}
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />{" "}
      Last name{" "}
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <br />
      <h2> FirstName {name.firstname}</h2>
      <br />
      <h2> Last Name {name.lastname} </h2>
      {/* if you write firstname then lastname vanish out because the  merge in state is not done by itself in hooks like in class component*/}
      {/* that is why the spread operator is used to merge first and last in name merged */}
    </div>
  );
}
export default ObjectHook;
