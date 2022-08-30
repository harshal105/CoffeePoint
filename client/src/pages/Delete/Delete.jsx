import React from "react";
import "./Delete.css";
import CrudButton from "../../components/CrudButton/CrudButton";
import { useState } from "react";
import  Axios  from "axios";

const Delete = () => {
    
    const [deleteName, setDeleteName] = useState("");
    
    const deleteButton = () => {
        const url = "http://localhost:3001/coffees/" + deleteName;
        Axios.delete(url)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
    }

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
                        onChange={(event)=> {
                            setDeleteName(event.target.value)
                        }}
                        > 
                    </input>
                </div>
            </div>
            <CrudButton 
                action={deleteButton}
                name="Delete"
            />
        </div>
    );
}

export default Delete;