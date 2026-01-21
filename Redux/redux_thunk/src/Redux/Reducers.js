import *as type from './actionTypes';

const initialstate={
    todos:[],
    isLoading:false,
    isError:null,
};

export const todoReducer=(oldState = initialState, action)=>{
    case types.GET_TODOS_SUCCESS:
        return{
            ...oldState,
            isLoading:false,
            todos:[...oldState.todos,payload],
        };

         case types.GET_TODOS_FAILURE:
        return{
            ...oldState,
            isLoading:false,
            isError:payload,
        };

        default:
            return oldState;
    }
};
