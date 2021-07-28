import React from "react";

const Numbers = ({ filterArr }) => {
  return (
    <div>
      <h3>
        {filterArr.map((person, index) => (
          <div key={index}>
            {person.name} {person.number}
          </div>
        ))}
      </h3>
    </div>
  );
};

export default Numbers;
