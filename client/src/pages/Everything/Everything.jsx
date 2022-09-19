import  Axios  from "axios";
import React from "react";
import "./Everything.css";
import { useState, useEffect } from "react";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const Everything = () => {
    
    const [allCoffeeInfo, setAllCoffeeInfo] = useState([]);
    const url = "https://coffeehubofficial.herokuapp.com/coffees";
    
    useEffect(() => {
        const getAllCoffees =  async () => {
           await Axios.get(url)
            .then(
                (response) => {
                    setAllCoffeeInfo(response.data);
                }
            )
        }
   
        getAllCoffees();

        console.log(allCoffeeInfo);
    }, [])
    
    return(
        <div className="everythingDiv">
            <div className="everythingHeader">
                <h1> CoffeeHub Gallery </h1>
                <p className="sentenceBeg"> Below are all of the different coffees we have in our database!</p>
            </div>
            {
                allCoffeeInfo.map( coffee => { 
                    return(
                        <CoffeeCard 
                            key={coffee.id}
                            name={coffee.name}
                            country={coffee.country}
                            date={coffee.date}
                            picture={coffee.picture}
                            howToMake={coffee.howToMake}
                            infoVideo={coffee.infoVideo}

                        />
                    )
                })
            }
        </div>
    )
}

export default Everything;