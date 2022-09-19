import React from "react";
import "./Header.css";
//import logo from "/images/icon.png";



const Header = () =>{
    return(
    <div className="container">
        <img className= "logo" src="/images/coffee-cup.png" alt="Nopic"/>
        <h1> CoffeePoint </h1>
        <span class='line'></span>

    </div>
    )
}

export default Header;