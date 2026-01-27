import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks, addTask } from "../redux/actions";

const Task = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  /* Load tasks */
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  /* Add task */
  const handleAdd = () => {
    if (task !== "") {
      dispatch(addTask({ title: task }));
      setTask("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Manager</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
