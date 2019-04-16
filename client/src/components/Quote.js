import React from 'react';

const Quote = ({ quote }) => {
  if (quote.length) {
    return(
      <div style={{maxWidth: 300}} className="tl pa1 bw1 br3 bg-washed-green">
        <p>{quote}</p>
      </div>
    )
  }
  return <p></p>
}

export default Quote;
