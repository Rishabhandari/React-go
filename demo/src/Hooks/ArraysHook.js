import React, { useState } from "react";

function ArrayCounter() {
  const [items, setItems] = useState([]);
  const [rollnum, setRollnum] = useState(0);
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        number: rollnum,
      },
    ]);
    setRollnum(rollnum + 1);
  };

  return (
    <div>
      <input type="number" onChange={(e) => setRollnum(e.target.value)} />

      <button onClick={addItems}>Click</button>
      <li>
        {" "}
        {items.map((item) => {
          return <h2>{item.number}</h2> ;
        })}
      </li>
      <br />
    </div>
  );
}

export default ArrayCounter;
