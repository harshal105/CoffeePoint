import React from "react";
import "./FunctionButton.css";

const FunctionButton = (props) => {
    return(
        <button className="common functionButton"> {props.name} </button>
    )
}

export default FunctionButton;