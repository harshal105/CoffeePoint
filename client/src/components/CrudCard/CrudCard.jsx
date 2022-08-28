import React from "react";
import "./CrudCard.css";

const CrudCard = () => {
    return(
        <div className="CrudCard">
            <div className="infoInCrudCard">
                <div className="add">
                    <p className= "label">What is the name of your coffee? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    > 
                    </input>
                </div>

                <div className="add">
                    <p className= "label">What country did your country originate from? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    > 
                    </input>

                </div>

                <div className="add">
                    <p className= "label">What year was your coffee founded? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    > 
                    </input>

                </div>

                <div className="add">
                    <p className= "label">Could you provide link to a picture of your coffee?</p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    > 
                    </input>
                </div>

                <div className="add">
                    <p className= "label">Could you provide link to a video on how to prepare your coffee? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    > 
                    </input>

                </div>

                <div className="add">
                    <p className= "label">Could you provide link to a video about your coffee? </p>
                    <input 
                    className="inputsCrudCard" 
                    type="text" 
                    placeholder=""
                    > 
                    </input>
                </div>

            </div>
        </div>
    )
}

export default CrudCard;