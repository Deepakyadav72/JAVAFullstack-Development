import * as type from '../Redux/actionTypes';

const getTodosRequest =()=>{
    return {type: type.GET_TODOS_SUCCESS,}
};
const getTodosFailure =(payload)=>{
    return {type: type.GET_TODOS_SUCCESS,payload}
};
const getTodosSuccess =(payload)=>{
    return {type: type.GET_TODOS_SUCCESS,payload}
};

const addTodosRequest =()=>{
    return {type: type.ADD_TODOS_SUCCESS,}
};
const addTodosFailure =(payload)=>{
    return {type: type.ADD_TODOS_SUCCESS,payload}
};
const addTodosSuccess =(payload)=>{
    return {type: type.ADD_TODOS_SUCCESS,payload}
};

export
{   getTodosRequest,
    getTodosSuccess,
    getTodosFailure,
    addTodosRequest,
    addTodosSuccess,
    addTodosFailure};
