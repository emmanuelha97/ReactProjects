import React from 'react';

//destrcuture the people props for easier accesability
const List = ({people}) => {
  return (
    <>
    {/* person represents each and every object */}
      {people.map((person)=>{
        // destructure each person object
        const{id,name,age,image,paragraph} = person;
        return <article key={id} className='person'>
          <img src={image} alt={name}></img>
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
            <p>{paragraph}</p>            
          </div>
        </article>
      })}
    </>
  );
};

export default List;
