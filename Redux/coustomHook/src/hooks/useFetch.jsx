import { useEffect, useReducer } from "react";

const FETCH_REQUEST= 'FETCH_REQUEST';
const FETCH_SUCCES= 'FETCH_SUCCES';
const FETCH_FAITCH= 'FETCH_FAILURE';

// & here we have the initial value...

const initialValue={
    data:[],
    isloading:false,
    isError:false,
};

//# here we are create the reducer...

const Reducer =(lodState=initialValue,{type,payload})=>{
    switch(type){
        case FETCH_REQUEST:
            return{
                ...oldState,
                isLoading:true,
            };
            case FETCH_SUCCESS:
                return{
                    isLoading:false,
                    data:[...oldState.data,payload.],
                };
                case FETCH_FAILURE:
                    return{
                        ...oldState,
                        isLoading:false,
                        isError:true,
                    };
                    default:
                        return oldState;
    }
};

export const useState=(url)=>{
    const [state, dispatch]=useReducer{Reducer, initialValue};
    useEffect(()=>{
        dispatch({type: FETCH_REQUEST});

        fetch(url)
        .then((res)=>res.json())
        .then((res)=>dispatch({type: FETCH_SUCCESS,payload:res}))

        .catch(()=>dispatch({type:FETCH_FAITCH}));
    },[]);
    return state;
}