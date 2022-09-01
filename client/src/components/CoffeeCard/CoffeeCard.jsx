import React from "react";
import "./CoffeeCard.css";

const CoffeeCard = (props) => {
    return(
        <div className="CoffeeCard">
            <div className="PicDiv">

                {
                    props.picture != "" && props.picture != null

                    ?<img className="CoffeePicture" src={props.picture} alt="Coffee Cup"/>

                    : ""
                }

                
            </div> 
            <div className="CoffeeInfo">
                <div classname="hi">
                <p><b> 
                    NAME: 
                    </b> 
                    {
                        props.name != "" && props.name != null

                        ?<button 
                            className="coffeeResultButton"> 
                            {props.name} 
                        </button>
                    
                        : ""
                    }     
                </p>
                </div>
                <p><b>
                    COUNTRY: 
                    </b> 
                    {
                        props.country != "" && props.country != null

                        ?<button 
                            className="coffeeResultButton"> 
                            {props.country} 
                        </button>

                        : ""
                    }
                </p>

                <p> <b> 
                    DATE: 
                    </b>
                    {
                        props.date != "" && props.date != null

                        ?<button 
                            className="coffeeResultButton"> 
                            {props.date} 
                        </button> 
                        : ""
                    }   
                </p>

                <p><b>
                    HOW TO MAKE: 
                    </b> 
                    {
                        props.howToMake != "" && props.howToMake != null

                        ?
                        <a href={props.howToMake}>
                        <button 
                            className="coffeeResultButton">
                            
                            
                            Click Me !
                        </button> </a>

                        : <button 
                            className="coffeeResultButton"> 
                            No Video Available
                        </button> 
                    }
                </p>
                    
                <p><b>
                    INFO VIDEO: 
                    </b>

                    {
                        props.infoVideo != "" && props.infoVideo != null

                        ? <a href={props.infoVideo}><button 
                            className="coffeeResultButton"> 
                            Click Me !
                        </button>  </a>

                        : <button 
                            className="coffeeResultButton"> 
                            No Video Available
                        </button> 
                    } 
                        
                </p>
            </div>
        </div>
    )
}

export default CoffeeCard;