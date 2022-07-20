import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Delete from "./pages/Delete/Delete";
import Put from "./pages/Put/Put";
import Patch from "./pages/Patch/Patch";
import Everything from "./pages/Everything/Everything";
import Error from "./pages/Error/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/put" element={<Put />} />
        <Route path="/patch" element={<Patch />} />
        <Route path="/everything" element={<Everything />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
