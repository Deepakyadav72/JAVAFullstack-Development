import { legacy_createStore } from "redux";

import{todoReducer}from './reducers';
 
export const myStore= legacy_createStore(todoReducer);
