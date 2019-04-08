import React from 'react';

const Card = ({ name, email }) => {
  return(
    <div className='bg-light-green tc dib br3 pa2 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={`https://robohash.org/${name}?200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
