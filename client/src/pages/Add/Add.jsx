import React from "react";
import "./Add.css";
import CrudCard from "../../components/CrudCard/CrudCard";
import CrudButton from "../../components/CrudButton/CrudButton";

const Add = () => {
    return(
        <div>
            <div className= "addHeader">
                <h1>Add a Coffee!</h1>
                <p className="sentenceBeg"> type in the information about your coffee below</p>
            </div>
            <CrudCard />
            <CrudButton />
            
        </div>
    );
}

export default Add;