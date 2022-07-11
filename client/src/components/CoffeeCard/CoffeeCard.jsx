import React from "react";
import "./CoffeeCard.css";

const CoffeeCard = () => {
    return(
        <div className="CoffeeCard">
            <div className="PicDiv">
                <img className="CoffeePicture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG" alt="Coffee Cup"/>
            </div> 
            <div className="CoffeeInfo">
                <p>Name:</p>
                <p>Country:</p>
                <p>Date: </p>
                <p>How to Make:</p>
                <p>Info Video</p>
            </div>
        </div>
    )
}

export default CoffeeCard;