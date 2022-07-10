import React from "react";
import "./App.css"
import Header from "./components/Header/Header";
import SearchArea from "./components/SearchArea/SearchArea";
import FunctionButton from "./components/FunctionButton/FunctionButton";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <SearchArea />
      <div className="buttonContainer">
        <FunctionButton 
          name="Add"
        />
        <FunctionButton 
          name="Patch"
        />
        <FunctionButton 
          name="Put"
        />
        <FunctionButton 
          name="Delete"
        />
      </div>
      

    </div>
  );
}

export default App;
