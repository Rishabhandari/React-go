import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetAxiosCountryData() {
  const [country, setCountry] = useState("");
  const [cost, setCost] = useState(0);
  useEffect(() => {
    //console.log(country);
    const options = {
      headers: {
        "content-type": "text/json",
      },
    };
    const userData = {
      hello: country,
    };
    axios
      .post(
        "http://westriveracademy.test/api/country",
        userData
        // {
        //   headers: {
        //     "content-type": "application/json",
        //   },
        // }
      )
      .then((res) => {
        console.log(res);
        // setCost(res.data);
      });

    axios.post(
      "http://westriveracademy.test/api/send",
      { hello: "world" },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }, [country]);
  const handleSubmit = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <p>Welcome </p>
      {country}
      <select name="country" onClick={(e) => handleSubmit(e)}>
        <option value="India">India</option>
        <option value="US">US</option>
      </select>
      <p>{cost}</p>
    </div>
  );
}
