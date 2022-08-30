import React from "react";
import "./CrudCard.css";

const CrudCard = (props) => {
    return(
        <div className="CrudCard">
            <div className="infoInCrudCard">
                <div className="add">
                    <p className= "label">What is the name of your coffee? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    onChange={(event) => {
                        props.setCoffeeInformation({ ...props.coffeeInformation, name: event.target.value })
                    }}
                    > 
                    </input>
                </div>

                <div className="add">
                    <p className= "label">What country did your country originate from? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    onChange={(event) => {
                        props.setCoffeeInformation({ ...props.coffeeInformation, country: event.target.value })
                    }}
                    > 
                    </input>

                </div>

                <div className="add">
                    <p className= "label">What year was your coffee founded? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    onChange={(event) => {
                        props.setCoffeeInformation({ ...props.coffeeInformation, date: event.target.value })
                    }}
                    > 
                    </input>

                </div>

                <div className="add">
                    <p className= "label">Could you provide link to a picture of your coffee?</p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    onChange={(event) => {
                        props.setCoffeeInformation({ ...props.coffeeInformation, picture: event.target.value })
                    }}
                    > 
                    </input>
                </div>

                <div className="add">
                    <p className= "label">Could you provide link to a video on how to prepare your coffee? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    onChange={(event) => {
                        props.setCoffeeInformation({ ...props.coffeeInformation, howToMake: event.target.value })
                    }}
                    > 
                    </input>

                </div>

                <div className="add">
                    <p className= "label">Could you provide link to a video about your coffee? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    onChange={(event) => {
                        props.setCoffeeInformation({ ...props.coffeeInformation, infoVideo: event.target.value })
                    }}
                    > 
                    </input>
                </div>

            </div>
        </div>
    )
}

export default CrudCard;