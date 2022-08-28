import React from "react";
import "./Delete.css";
import CrudButton from "../../components/CrudButton/CrudButton";

const Delete = () => {
    return(
        <div>
            <div className="deleteHeader">
                <h1>Delete Page</h1>
                <p className="deleteIntro"> delete a coffee in our database if you don't think it meets our standards</p>
                <div className="changeInput">
                    <p> <u> I want to delete the coffee: </u> </p>
                    <input 
                        className="coffeePatchInput" 
                        type="text" 
                        placeholder="type coffee name here"
                        > 
                    </input>
                </div>
            </div>
            <CrudButton />
        </div>
    );
}

export default Delete;