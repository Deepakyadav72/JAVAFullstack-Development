import React from "react";
import { TodoList } from "./TodoList";

export const TodoInput = () => {
  const [todoText, setTodoText] = React.useState("");
  const [todoData, setTodoData] = React.useState([]);

  const handleTodo = () => {
    if (todoText.trim() === "") return;

    const todoInfo = {
      id: Date.now(),
      text: todoText,
      isEdits: false,
      isComplete: false,
    };

    setTodoData((prev) => [...prev, todoInfo]);
    setTodoText("");
  };

  return (
    <>
      <h1>Todo Input</h1>

      <input
        type="text"
        value={todoText}
        placeholder="Enter task..."
        onChange={(e) => setTodoText(e.target.value)}
      />

      <button onClick={handleTodo}>Add</button>

      <TodoList props={{ todoData, setTodoData }} />
    </>
  );
};
