import React from "react";
import "./Add.css";
import CrudCard from "../../components/CrudCard/CrudCard";
import CrudButton from "../../components/CrudButton/CrudButton";
import Axios from "axios";
import { useState } from "react";

const Add = () => {

    const [coffeeFieldAdd, setCoffeeFieldAdd] = useState({
        name: "",
        country: "",
        date: null,
        picture: "",
        howToMake: "",
        infoVideo: ""
    });

    const addButton = () => {
        console.log(coffeeFieldAdd);
        const url = "https://coffeehubofficial.herokuapp.com/coffees";
        var valid = true;
        
        if (isNaN(coffeeFieldAdd.date) === true){
            valid = false;
        }
             
        if (valid === true) {

            Axios.post(url, coffeeFieldAdd)
                .then((response) => {
                    console.log(response);
                    if(response.data == "No"){
                        alert("Sorry that coffee already exists, try adding a different one!");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        else {
            alert("Invalid values placed in one or more fields");
        }
    };
    
    return(
        <div>
            <div className= "addHeader">
                <h1>Add a Coffee!</h1>
                <p className="sentenceBeg"> type in the information about your coffee below</p>
            </div>
            <CrudCard 
                coffeeInformation = {coffeeFieldAdd}
                setCoffeeInformation = {setCoffeeFieldAdd}
            />
            <CrudButton 
                action={addButton}
                name="Add"
            />
            
        </div>
    );
}

export default Add;