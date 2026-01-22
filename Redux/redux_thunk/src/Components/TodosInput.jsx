import axios from "axios";
import React from "react";

export const TodosInput = ({ getApi }) => {
  const inputValue = React.useRef(null);   // ✅ FIX

  const addTodos = () => {
    if (inputValue.current && inputValue.current.value.trim() !== "") {
      const data = {
        title: inputValue.current.value,
        status: false,
      };

      return axios
        .post("http://localhost:8080/todo", data)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    }
  };

  const handleAdd = () => {
    addTodos()?.then(() => {
      inputValue.current.value = "";  // ✅ input clear
      getApi();
    });
  };

  return (
    <>
      <input type="text" ref={inputValue} />
      <button onClick={handleAdd}>add</button>
    </>
  );
};
