import axios, { formToJSON } from "axios";
import React from "react";
import { useDispatch } from "react-redux";


import{
  getApi,
  addTodosRequest,
  addTodosFailure,
  addTodosSuccess,
} form '../Redux/action.js';

export const TodosInput = ({ }) => {
  const inputValue = React.useRef();   
  const dispatch=useDispatch();

  const addTodos = () => {
    if (inputValue.current && inputValue.current.value.trim() !== "") {
      const data = {
        title: inputValue.current.value,
        status: false,
      };

      return axios
        .post("http://localhost:8080/todo", data)
        .then((res)=>{
          dispatch(addTodosSuccess);
          return res;
        })
        .catch((err) => {
        console.log(err)
        dispatch(addTodosFailure)
    });
     }
    };

  const handleAdd = () => {
    addTodos()?.then(() => {inputValue.current.value = "";});
  };

  return (
    <>
      <input type="text" ref={inputValue} />
      <button onClick={handleAdd}>add</button>
    </>
  );
};
