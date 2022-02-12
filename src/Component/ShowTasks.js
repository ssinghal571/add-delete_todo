import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShowTasks(props) {
  const taskDetail = props.taskList.map((task) => {
    return (
      <div className="List">
        <li className="TaskList" key={task.taskNo}>
          <input type="checkbox" /> {task.taskName}
        </li>
        <button className="EditButton">
          <AiOutlineEdit />
        </button>
        <button
          onClick={() => props.deleteTask(task.taskNo)}
          className="EditButton">
          <RiDeleteBin6Line />
        </button>
      </div>
    );
  });
  return (
    <div>
      <form>{taskDetail}</form>
    </div>
  );
}

export default ShowTasks;
