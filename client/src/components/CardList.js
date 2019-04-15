import React from 'react';
import Card from '../containers/Card';

const CardList = ({ robots }) => {
  const cardsArray = robots.map(robot => {
    return <Card key={robot.id} robot={robot} />
  })

  return(
    <div>
      {cardsArray}
    </div>
  );
}

export default CardList
