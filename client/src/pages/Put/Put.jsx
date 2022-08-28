import React from "react";
import "./Put.css";
import CrudCard from "../../components/CrudCard/CrudCard";
import CrudButton from "../../components/CrudButton/CrudButton";


const Put = () => {
    return(
        <div>
            <div className= "putHeader">
                <h1 >Put a Coffee!</h1>
                <p className="putIntro"> fill out the form below if you'd like to overwrite an existing coffee in our database</p>
                <div className="changeInput">
                        <p> <u> I want to overwrite the coffee: </u> </p>
                        <input 
                            className="coffeePatchInput" 
                            type="text" 
                            placeholder="type coffee name here"
                            > 
                        </input>
                </div>
            </div>
            <CrudCard />
            <CrudButton />
        </div>
    )
        
}

export default Put;