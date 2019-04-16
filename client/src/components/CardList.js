import React from 'react';
import Card from './Card';

const CardList = ({ robots, quotes }) => {
  const cardsArray = robots.map(robot => {
    const quoteObj = quotes.filter(q => { return q.id === robot.id });
    const quote = quoteObj.length ? quoteObj[0].quote : ''
    return <Card key={robot.id} robot={robot} quote={quote} />
  })

  return(
    <div>
      {cardsArray}
    </div>
  );
}

export default CardList;
