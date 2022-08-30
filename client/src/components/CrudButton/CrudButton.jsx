import React from "react";
import "./CrudButton.css";
import { useNavigate } from "react-router-dom";

const CrudButton = (props) => {
    let navigate = useNavigate();
    
    const handleEvent = () => {
        props.action();
        navigate("/");
    }
    
    return(
        <div className="crudButtonDiv">
            <button className="CrudButton" onClick={handleEvent}> {props.name} </button>
        </div>
    )
}

export default CrudButton;