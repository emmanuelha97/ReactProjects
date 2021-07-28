import React from "react";

const Filter = ({ handleFilterChange, filterW }) => {
  return (
    <div>
      <p>filter shown with</p>
      <input value={filterW} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
