import TodoInput from "../Components/TodoInput";

const TodoPage = () => {
  const user = localStorage.getItem("user");

  return (
    <div>
      <h2>Welcome, {user}</h2>
      <TodoInput />
    </div>
  );
};

export default TodoPage;
