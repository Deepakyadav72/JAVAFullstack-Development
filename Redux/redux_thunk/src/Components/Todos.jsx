import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

import { TodosInput } from './TodoInput';
import {getApi} from '../Redux/action';

export const Todos = () => {
  const {todo, isLoadings,isErrors}  = useSelector((state)=>{
    return{
      todo:state.todos,
      isLoadings:state.isLoadings,
      isErrors:state.isErrors,
    };
  },shallowEqual);
      console.log('🚀 ~ isLoadings:', isLoadings);
      console.log('🚀 ~ isErrors:', isErrors);

  // ✅ SAFE selector (always array)
  const data = useSelector((state) => state.todos || []);

  const getApi = () => {
    axios
      .get('http://localhost:8080/todo')
      .then((res) => {
        dispatch(actFunc.getTodosSuccess(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <h1>To-dos</h1>
      <TodosInput getApi={getApi} />

      {data.length === 0 ? (
        <p>No Todos Found</p>
      ) : (
        data.map((el) => (
          <p key={el.id}>
            {el.title} - {el.status ? 'true' : 'false'}
          </p>
        ))
      )}
    </>
  );  
};