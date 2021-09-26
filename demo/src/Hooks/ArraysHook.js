import React, { useState } from "react";

function ArrayCounter() {
  const [items, setItems] = useState([]);
  const [rollnum, setRollnum] = useState("");
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        number: rollnum,
      },
    ]);
  };
  const removeItem = (e, index) => {
    e.preventDefault();
    setItems(items.filter((todo) => todo.id !== index));
    
  };
  return (
    <div>
      <input type="text" onChange={(e) => setRollnum(e.target.value)} />

      <button onClick={addItems}>Click</button>
      <li>
        {" "}
        {items.map((item, index) => {
          return (
            <>
              <h2 key={index}>{item.number} </h2>
              <span onClick={(e) => removeItem(e, item.id)}> X</span>
            </>
          );
        })}
      </li>
      <br />
    </div>
  );
}

export default ArrayCounter;
