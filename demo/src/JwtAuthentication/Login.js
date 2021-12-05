import axios from "axios";
import React, { useState } from "react";
function Login(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    const loginData = {
      name: "risha",
      email: email,
      password: password,
    };

    axios
      .post("http://127.0.0.1:8000/api/login", loginData)
      .then((response) => {
        console.log(response);
        if (response.status == 201) {
          alert(response.data);
        }
      });

    e.preventDefault();
  };
  const getUsers = () => {
    // firstly to access any api authenticated user token need to be sent in Authorization:Bearer token
    const tokenData = JSON.parse(localStorage.getItem("authToken"));
    axios
      .get("http://127.0.0.1:8000/api/users", {
        headers: { Authorization: `Bearer ${tokenData}` },
      })
      .then((response) => {
        setUsers(response.data);
      });
  };
  return (
    <div>
      Email <input type="email" onChange={(e) => setEmail(e.target.value)} />
      password{" "}
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>
        {" "}
        Login
      </button>
      <button type="submit" onClick={getUsers}>
        {" "}
        Access all user
      </button>
      <li>
        {users.map((user, index) => {
          return (
            <>
              <h2 key={index}>{user.email} </h2>
            </>
          );
        })}
      </li>
    </div>
  );
}
export default Login;
