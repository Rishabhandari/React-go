import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactList from "./ContactList";
import {
  changeFirstName,
  changeSecondName,
  handleAddName,
} from "./counterSlice";

export function Contacts() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddName());
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          first name{" "}
          <input
            type="text"
            onChange={(e) => dispatch(changeFirstName(e.target.value))}
          />
          second name{" "}
          <input
            type="text"
            onChange={(e) => dispatch(changeSecondName(e.target.value))}
          />
          <input type="submit" onClick={(e) => handleSubmit(e)} />
        </form>
        <ContactList />
      </div>
    </div>
  );
}
