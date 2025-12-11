import React ,{ useContext, useEffect} from 'react';

import axios from 'axios';
import {contextCreated} from '../Context/CreateComponentsContext';

const fetchData=(url)=>{
    return axios
    .get(url)
    .then ((res))=>{
        return res.data;
    }
}