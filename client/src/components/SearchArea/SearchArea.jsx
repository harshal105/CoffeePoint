import React from "react";
import "./SearchArea.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchArea = () =>{
    
    const [inputField, setInputField] = useState("");


    
    let navigate = useNavigate();
    return(
        <div className="containerSearch">
            <p>what are you feeling today?</p>
            <input 
                className="searchField common" 
                type="text" 
                placeholder=""
                onChange = {(event) => {
                    setInputField(event.target.value);
                }}
            > 
            </input>
            <button className="searchButton common"> Search </button>
            <button className="showButton common" 
                    onClick={ () => {navigate("/everything")}}
            > 
                Show me Everything!
            </button>
        </div>
    )
}

export default SearchArea;