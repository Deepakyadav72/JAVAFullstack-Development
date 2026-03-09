import React,{useEffect,useState}  from "react";
import{useSearchParams} from "react-router-dom";



export const FiltermusicRecord=()=>{
   const [SearchParams, setSearchParams]=useSearchParams();

   const [filterVal,setFilterVal]=useState([]);

   const handleFilter=(e)=>{
    const option=e.target.name;
    console.log('🚀 ~ option:', option);


const newArr=[...filterVal];
    if (filterVal.includes(option)){
        newArr.splice(filterVal.indexOf(option),1);

    }else{
        newArr.push(option);
    }
    setFilterVal(newArr);
   };

   useEffect(()=>{},[]);
    return(
        <>
            <h1>filter</h1>
            <div style={{
                display:"flex",
                alignItems:"start",
                flexDirection:"column",
            }}>
            <div>
                <input type="checkbox" name="k-pop" onChange={handleFilter}/>
                <lable>K-pop</lable>
            </div>

            <div>
                <input type="checkbox" name="Holiday" onChange={handleFilter}/>
                <lable>Holiday</lable>
            </div>

            <div>
                <input type="checkbox" name="heavy Metal" onChange={handleFilter}/>
                <lable>Heavy Metal</lable>
            </div>

            </div>
        </>
    )
};