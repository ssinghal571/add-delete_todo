import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

function AddNewTask(props) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewTask(task);
    setTask("");
  };

  return (
    <div className="AddTask">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Add New Task"
          className="Input"
          onChange={(e) => setTask(e.target.value)}></input>
        <button className="AddButton">
          <BsPlusCircle />
        </button>
      </form>
    </div>
  );
}

export default AddNewTask;
