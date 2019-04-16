import React from 'react';
import '../index.css';

const SpeakButton = ({ onClick, id, hasQuote }) => {
  const buttonTxt = hasQuote ? "Hide Quote" : "Say Something"
  return(
    <button id={id} style={{ outline: 0 }} className="f6 link br2 ph3 pv2 mb2 dib white bg-green pointer" onClick={onClick} href="#">
      {buttonTxt}
    </button>
  )
}

export default SpeakButton;
