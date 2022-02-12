import React from "react";
import "./App.css";
import ToDoList from "./Component/ToDoList";
import Image from "./Images/Coffee-cup.png";
function App() {
  return (
    <div className="App">
      <div className="ToDo">
        <h1 className="Heading">Create your List</h1>
        <ToDoList />
      </div>
      <div className="CoffeeCupImage">
        <img alt="img" src={Image}></img>
      </div>
    </div>
  );
}

export default App;
