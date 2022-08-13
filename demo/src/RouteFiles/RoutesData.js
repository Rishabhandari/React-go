import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactList from "../Feature/ContactList";
import { Contacts } from "../Feature/Contacts";
export default function RoutesData() {
  return (
    <div>
      <Routes>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}
