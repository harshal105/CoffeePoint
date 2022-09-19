import React from "react";
import "./SearchArea.css";
import FunctionButton from "../../components/FunctionButton/FunctionButton";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import Axios from "axios"; 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchArea = () => {
    
    const [inputField, setInputField] = useState("");
    const [coffeeVal, setCoffeeVal] = useState(null);
    const [foundVal, setFoundVal] = useState(null);
    let navigate = useNavigate();
    
    
   

    const handleSearch = () => {

        if (inputField != null && inputField != ""){
            Axios.get("https://coffeehubofficial.herokuapp.com/coffees/" + inputField)
            .then((response) => {
                if(response.data != "Sorry no coffee was found under that name"){
                    setFoundVal (true);
                    setCoffeeVal(
                        response.data
                )} 
                else {
                    setFoundVal (false);
                    alert("Sorry no coffee was found under that name, try searching for a different name");
                }
                console.log(response)
            }).catch(e => {
                console.log(e);
            })
        }

    }
    return(
        <div>
            <div className="containerSearch">
                <p>what are you feeling today?</p>
                <input 
                    className="searchField common" 
                    type="text" 
                    placeholder=""
                    onChange = {(event) => {
                        setInputField(event.target.value);
                    }}
                > 
                </input>
                <button className="searchButton common"
                        onClick = {handleSearch}
                > Search </button>
                <button className="showButton common" 
                        onClick={ () => {navigate("/everything")}}
                > 
                    Show me Everything!
                </button>
            </div>
            <div className="buttonContainer">
                <FunctionButton 
                name="Add"
                nav="/add"
                />
                <FunctionButton 
                name="Patch"
                nav="/patch"
                />
                <FunctionButton 
                name="Put"
                nav="/put"
                />
                <FunctionButton 
                name="Delete"
                nav="/delete"
                />
            </div>
            {foundVal 
            ? <CoffeeCard 
                name={coffeeVal.name}
                country={coffeeVal.country}
                date={coffeeVal.date}
                picture={coffeeVal.picture}
                howToMake={coffeeVal.howToMake}
                infoVideo={coffeeVal.infoVideo}/>
            : <p></p>
            }
        </div>
    )
}

export default SearchArea;