import React from "react";
import "./Patch.css";
import CrudCard from "../../components/CrudCard/CrudCard";
import CrudButton from "../../components/CrudButton/CrudButton";
import { useState } from "react";
import  Axios  from "axios";

const Patch = () => {
    
    const [coffeeFieldPatch, setCoffeeFieldPatch] = useState({
        name: "",
        country: "",
        date: null,
        picture: "",
        howToMake: "",
        infoVideo: ""
    });

    const [patchName, setPatchName] = useState("");

    const patchButton = () => {
        const url = "http://localhost:3001/coffees/" + patchName;
        console.log(url);

        Object.keys(coffeeFieldPatch).forEach(key => {
            if (coffeeFieldPatch[key] === '' || coffeeFieldPatch[key] == null) {
              delete coffeeFieldPatch[key];
            }
          });

        Axios.patch(url, coffeeFieldPatch)
            .then((response) => {
                console.log(response);
                if(response.data == "No"){
                    alert("Sorry that coffee does not exist");
                }
            })
            .catch ((err) => {
                console.log(err)
            })
    };
    
    return(
        <div>
            <div className="patchHeader">
                <h1>Patch a Coffee!</h1>
                <p className="patchIntro"> notice a coffee you wanna fix? fill out what you'd like to change, and leave the rest blank</p>
                <div className="changeInput">
                    <p> <u> I want to change the coffee: </u> </p>
                    <input 
                        className="coffeePatchInput" 
                        type="text" 
                        placeholder="type coffee name here"
                        onChange= {(event) => {
                            setPatchName(event.target.value);
                        }}
                        > 
                    </input>
                </div>
            </div>
            <CrudCard 
                coffeeInformation = {coffeeFieldPatch}
                setCoffeeInformation = {setCoffeeFieldPatch}
            />
            <CrudButton 
                action={patchButton}
                name="Patch"
            />
        </div>
    )
}

export default Patch;