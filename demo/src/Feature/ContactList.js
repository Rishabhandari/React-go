import React from "react";
import { useSelector } from "react-redux";
export default function ContactList() {
  const users = useSelector((state) => state.storeCounterName.user);

  return (
    <div>
      <div>
        {users.length > 0
          ? users.map((user, index) => {
              return (
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>{user.first_name}</td>
                      <td>
                        <a href="#">edit</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })
          : ""}
      </div>
    </div>
  );
}
