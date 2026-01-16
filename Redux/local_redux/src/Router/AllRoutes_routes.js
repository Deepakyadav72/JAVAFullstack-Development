import { Route, Routes} from  'react-routes-dom';

import React  from'react';
import {Home} from '../Pages/Home';
import {Todo} from '../Pages/Todo';
import {Signup} from '../Pages/Singnup';
import {Login} from '../Pages/Login';
import {Counter} from '../components/counter';


export const AllRoutes=()=>{
    return(
        <>
        <Navbar/>
        <Routes>
            <Routes path="/" element={<Home/>}></Routes>
             <Routes path="/login" element={<Login/>}></Routes>
              <Routes path="/signup" element={<Signup/>}></Routes>
               <Routes path="/todo" 
               element={
                <PrivateRoutes>
               <Todo/>
               </PrivateRoutes>
               
               }></Routes>
                {/* <Routes path="/counter" element={<Counter/>}></Routes> */}
        </Routes>
        </>
    );

};