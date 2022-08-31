import React from "react";
import "./CoffeeCard.css";

const CoffeeCard = (props) => {
    return(
        <div className="CoffeeCard">
            <div className="PicDiv">
                <img className="CoffeePicture" src={props.picture} alt="Coffee Cup"/>
            </div> 
            <div className="CoffeeInfo">
                <p>Name: {props.name}</p>
                <p>Country: {props.country}</p>
                <p>Date: {props.date}</p>
                <p>How to Make: {props.howToMake}</p>
                <p>Info Video: {props.infoVideo}</p>
            </div>
        </div>
    )
}

export default CoffeeCard;