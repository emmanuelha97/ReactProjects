import React from "react";

const Numbers = ({ filterArr, handleEraseChange }) => {
  return (
    <div>
      <h3>
        {filterArr.map((personn, index) => (
          <div key={index}>
            {personn.name} {personn.number}
            <button onClick={() => handleEraseChange(personn.id)}>
              delete
            </button>
          </div>
        ))}
      </h3>
    </div>
  );
};

export default Numbers;
