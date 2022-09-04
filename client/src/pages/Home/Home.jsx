import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import SearchArea from "../../components/SearchArea/SearchArea";

const Home = () => {
    return(
        <div className="appContainer">
            <Header />
            <SearchArea />
        </div>
    )
}

export default Home;