import React from "react";

export const PinItems=React.forwardRef(({style, max, handleChange},ref) => {

    const handleKeyUp=(e)=>{
        handleChange(e.target.value);


    }

    return(
        <>
        <input  ref={ref} style={style} maxLength={max} onKeyUp={handleKeyUp} />
        </>
  )
});

