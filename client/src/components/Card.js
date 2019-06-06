import React from 'react';
import SpeakButton from './SpeakButton';
import Quote from './Quote';

const Card = ({ robot, quote }) => {
  console.log(quote)
  return(
    <div className='bg-light-green tc dib br3 pa2 ma2 grow bw2 shadow-5'>
      <Quote quote={quote}/>
      <img alt='robot' src={`https://robohash.org/${robot.name}?200x200`}/>
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
        <SpeakButton id={robot.id} hasQuote={quote.length} />
      </div>
    </div>
  );
}

export default Card;
