import React, { useState } from "react";
import { Button } from "reactstrap";

const login = function(mail, psw) {
  const url = "http://sefdb02.qut.edu.au:3001/user/login";

  
  fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },

    body: JSON.stringify({ email: mail, password: psw })
  })
    .then((res) => res.json())
    .then((res) => localStorage.setItem("token", res.token))
};


export default function Login() {
  const [mail, setMail] = useState("");
  const [psw, setPsw] = useState("");

  

  return (
    <div className="App">
     
        <input
          type="text"
          id="email"
          placeholder="email"
          value={mail}
          onChange={(event) => {
            setMail(event.target.value);
          }}
          required
        />

        <input
          type="password"
          id="password"
          placeholder="password"
          value={psw}
          onChange={(event) => {
            setPsw(event.target.value);
          }}
          required
        />
     
        <Button
          color="info"
          size="sm"
          className="mt-3"
          onClick={() => login(mail,psw)}
          >
          Login
        </Button>
              
    </div>
  );
}
