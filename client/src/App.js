import React from "react";
import "./App.css"
import Header from "./components/Header/Header";
import SearchArea from "./components/SearchArea/SearchArea";


function App() {
  return (
    <div className="appContainer">
      <Header />
      <SearchArea />
    </div>
  );
}

export default App;
