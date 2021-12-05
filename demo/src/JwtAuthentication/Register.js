import React, { useState } from "react";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    let token = {};
    axios.post("http://127.0.0.1:8000/api/register", data).then((response) => {
      /**Token is stored in local storage and redirected to login */
      localStorage.setItem("authToken", JSON.stringify(token));
      if (response.status === 200) {
        console.log("inotit");
        // redirect to login
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      User name <input type="text" onChange={(e) => setName(e.target.value)} />
      email <input type="email" onChange={(e) => setEmail(e.target.value)} />
      Passoword{" "}
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
