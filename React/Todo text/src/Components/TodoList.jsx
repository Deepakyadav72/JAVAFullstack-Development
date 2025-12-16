import React from "react";

export const TodoList = ({ props }) => {
  const { todoData, setTodoData } = props;

  const [editValue, setEditValue] = React.useState("");
  const [editID, setEditID] = React.useState(null);

  const toggleComplete = (id) => {
    const updated = todoData.map((item) =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    setTodoData(updated);
  };

  const handleDelete = (id) => {
    const filtered = todoData.filter((item) => item.id !== id);
    setTodoData(filtered);
  };

  const handleEdits = (id) => {
    setEditID(id);

    const updated = todoData.map((item) =>
      item.id === id ? { ...item, isEdits: true } : item
    );

    setTodoData(updated);
  };

  const handleCancel = (id) => {
    const updated = todoData.map((item) =>
      item.id === id ? { ...item, isEdits: false } : item
    );

    setTodoData(updated);
  };

// //   const handleConfirm = () => {
// //     const updated = todoData.map((item) =>
// //       item.id === editID ? { ...item, text: editValue, isEdits: false } : item
// //     );

//     setTodoData(updated);
//   };

  return (
    <>
      <h1>Todo List</h1>

      {todoData.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => toggleComplete(item.id)}
          />
          {item.isEdits ? (
            <input
              type="text"
              defaultValue={item.text}
              onChange={(e) => setEditValue(e.target.value)}
            />
          ) : (
            <h3
              style={{
                textDecoration: item.isComplete ? "line-through" : "none",
              }}
            >
              {item.text}
            </h3>
          )}
          {item.isEdits ? (
            <>
              <button onClick={() => handleCancel(item.id)}>Cancel</button>
              <button onClick={handleConfirm}>Confirm</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdits(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
};
