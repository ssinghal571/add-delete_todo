import React, { useState } from "react";
import ShowTasks from "./ShowTasks";
import AddNewTask from "./AddNewTask";

function ToDoList() {
  const [list, setList] = useState([
    { taskNo: 1, taskName: "Task1" },
    { taskNo: 2, taskName: "Task2" },
    { taskNo: 3, taskName: "Task3" },
  ]);
  const addNewTask = (task) => {
    const taskNo = Math.random() * 10;
    setList([...list, { taskNo: taskNo, taskName: task }]);
  };
  const deleteTask = (taskNo) => {
    const taskList = list.filter((task) => {
      return task.taskNo !== taskNo;
    });
    setList(taskList);
  };
  return (
    <div>
      <AddNewTask addNewTask={addNewTask} />
      <ShowTasks taskList={list} deleteTask={deleteTask} />
    </div>
  );
}

export default ToDoList;
