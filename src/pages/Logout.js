import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";



export default function Logout(){
    
    const navigate = useNavigate();
    localStorage.setItem("token",null);
    let token = localStorage.getItem("token");

    return(
        <div>
            <p>Logout</p>
            <p>token: {token} </p>

            <Button
                color="info"
                size="sm"
                className="mt-3"
                onClick={() => navigate("/")}
                >
                Back Home
            </Button>
        </div>
    );
}