import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import SearchArea from "../../components/SearchArea/SearchArea";
import FunctionButton from "../../components/FunctionButton/FunctionButton";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";


const Home = () => {
    return(
        <div className="appContainer">
            <Header />
            <SearchArea />
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
            <CoffeeCard /> 
        </div>
    )
}

export default Home;