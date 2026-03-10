// import React,{useEffect,useState}  from "react";
// import{useSearchParams} from "react-router-dom";



// export const FiltermusicRecord=()=>{
//    const [SearchParams, setSearchParams]=useSearchParams();

//    const [filterVal,setFilterVal]=useState([]);

//    const handleFilter=(e)=>{
//     const option=e.target.name;
//     console.log('🚀 ~ option:', option);


// const newArr=[...filterVal];
//     if (filterVal.includes(option)){
//         newArr.splice(filterVal.indexOf(option),1);

//     }else{
//         newArr.push(option);
//     }
//     setFilterVal(newArr);
//    };

//    useEffect(()=>{},[]);
//     return(
//         <>
//             <h1>filter</h1>
//             <div style={{
//                 display:"flex",
//                 alignItems:"start",
//                 flexDirection:"column",
//             }}>
//             <div>
//                 <input type="checkbox" name="k-pop" onChange={handleFilter}/>
//                 <lable>K-pop</lable>
//             </div>

//             <div>
//                 <input type="checkbox" name="Holiday" onChange={handleFilter}/>
//                 <lable>Holiday</lable>
//             </div>

//             <div>
//                 <input type="checkbox" name="heavy Metal" onChange={handleFilter}/>
//                 <lable>Heavy Metal</lable>
//             </div>

//             </div>
//         </>
//     )
// };

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FiltermusicRecord = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const initialGenre = searchParams.getAll("genre");

  const [filterVal, setFilterVal] = useState(initialGenre || []);

  const handleFilter = (e) => {
    const option = e.target.name;

    let newArr = [...filterVal];

    if (filterVal.includes(option)) {
      newArr = newArr.filter((el) => el !== option);
    } else {
      newArr.push(option);
    }

    setFilterVal(newArr);
  };

  // ✅ Update URL when filterVal changes
  useEffect(() => {
    if (filterVal.length > 0) {
      setSearchParams({ genre: filterVal });
    } else {
      setSearchParams({});
    }
  }, [filterVal, setSearchParams]);

  return (
    <>
      <h1>Filter</h1>

      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <div>
          <input
            type="checkbox"
            name="k-pop"
            checked={filterVal.includes("k-pop")}
            onChange={handleFilter}
          />
          <label>K-pop</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="Holiday"
            checked={filterVal.includes("Holiday")}
            onChange={handleFilter}
          />
          <label>Holiday</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="heavy Metal"
            checked={filterVal.includes("heavy Metal")}
            onChange={handleFilter}
          />
          <label>Heavy Metal</label>
        </div>
      </div>
    </>
  );
};