import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css"
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>

      </header>
    </div>
  );
};

export default App;