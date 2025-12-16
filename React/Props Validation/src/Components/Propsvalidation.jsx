import React from 'react';

import PropTypes from 'prop-types';


export const Propsvalidation = ({ length, label }) => {
    return (
        <>
        <h2>{label}</h2>
        <h4>{length}</h4>
        </>
    );
}


 Propsvalidation.PropTypes ={
    length:PropTypes.oneOf([1,3]).isRequired,
 };