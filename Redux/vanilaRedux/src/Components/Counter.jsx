import React from 'react';

import {myStore} from '../Store/Store';
export const Counter=()=>{
console.log('🚀 ~ myStore:', myStore);
console.log('🚀 ~ currentState:', myStore.getState());

const storeValue=myStore.getState();
return(
    <>
    <h1>Counter {storeValue.count}</h1>
    </>
);
    
};