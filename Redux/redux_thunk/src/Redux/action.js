import * as type from '../Redux/actionTypes';
const getTodosRequest =(payload)=>{
    return {type: type.GET_TODOS_SUCCESS,payload}
};
const getTodosFailure =(payload)=>{
    return {type: type.GET_TODOS_SUCCESS,payload}
};
const getTodosSuccess =(payload)=>{
    return {type: type.GET_TODOS_SUCCESS,payload}
};
export{getTodosRequest,getTodosSuccess,getTodosFailure};
