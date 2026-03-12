

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterMusicRecords = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [filterVal, setFilterVal] = useState(
    searchParams.getAll('genre') || [],
  );

  const handleFilter = (e) => {
    const option = e.target.name;

    const newArr = [...filterVal];

    if (filterVal.includes(option)) {
      newArr.splice(newArr.indexOf(option),1);
    } else {
      newArr.push(option);
    }

    setFilterVal(newArr);
  };

  // ✅ Update URL when filterVal changes
  useEffect(() => {
    const Param={};
    filterVal && (Params.genre=filterVal);

    setSearchParams(Params);
    
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
            name="K-Pop"
            checked={filterVal.includes("k-pop")}
            defaultChecked={filterVal.includes
            ('K-Pop')}
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