import PropTypes from 'prop-types'
import { useState } from 'react'
import { PinItems } from './Pinitems'

export const InputBox=({length,style})=>{
    const [values,setValue]=useState(new Array(length).fill(0))
    console.log('🚀 ~ values:', values);
    return(
        <>
            {values.map((items, index)=> <PinItems style={style} key={index}/>)}
        </>
    )

}