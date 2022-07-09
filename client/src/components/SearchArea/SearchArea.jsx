import React from "react";
import "./SearchArea.css"

const SearchArea = () =>{
    return(
        <div className="containerSearch">
            <p>what are you feeling today?</p>
            <input className="searchField common" type="text" placeholder=""></input>
            <button className="searchButton common"> Search </button>
            <button className="showButton common"> Show me Everything!</button>
        </div>
    )
}

export default SearchArea;