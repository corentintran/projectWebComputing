import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  localStorage.setItem("token", null);

  return (
    <div>
      <p>Logout</p>

      <Button
        color="info"
        size="sm"
        className="mt-3"
        onClick={() => navigate("/")}
      >
        Back Home
      </Button>
      <button onClick={() => window.location.reload(false)}>
        Click to reload!
      </button>
    </div>
  );
}
