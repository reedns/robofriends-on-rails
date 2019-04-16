import React from 'react';
import { connect } from 'react-redux';
import { toggleQuote } from '../actions'
import '../index.css';

const mapDispatchToProps = (dispatch) => {
  return { onClick: (event) => dispatch(toggleQuote(event.target.getAttribute('id'))) }
}

const SpeakButton = ({ id, hasQuote, onClick }) => {
  const buttonTxt = hasQuote ? "Hide Quote" : "Say Something"
  return(
    <button id={id} style={{ outline: 0 }} className="f6 link br2 ph3 pv2 mb2 dib white bg-green pointer" onClick={onClick} href="#">
      {buttonTxt}
    </button>
  )
}

export default connect(null, mapDispatchToProps)(SpeakButton);
