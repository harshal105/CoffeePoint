import React from "react";
import "./FunctionButton.css";
import { useNavigate } from "react-router-dom";

const FunctionButton = (props) => {
    let navigate = useNavigate();
    
    return(
        <button 
            className="common functionButton" 
            onClick = {() => {navigate(props.nav)}}
        > 
        {props.name} 
        </button>
    )
}

export default FunctionButton;