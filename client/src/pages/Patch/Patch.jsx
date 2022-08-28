import React from "react";
import "./Patch.css";
import CrudCard from "../../components/CrudCard/CrudCard";
import CrudButton from "../../components/CrudButton/CrudButton";

const Patch = () => {
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
                        > 
                    </input>
                </div>
            </div>
            <CrudCard />
            <CrudButton />
        </div>
    )
}

export default Patch;