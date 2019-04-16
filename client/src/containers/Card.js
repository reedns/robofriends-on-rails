import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpeakButton from '../components/SpeakButton';
import Quote from '../components/Quote';
import { toggleQuote } from '../actions'

const mapStateToProps = (state, props) => {
  return {
    quotes: state.toggleQuote.quotes,
    error: state.toggleQuote.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { onClick: (event) => dispatch(toggleQuote(event.target.getAttribute('id'))) }
}

class Card extends Component {
  render() {
    const { robot, quotes, onClick } = this.props;
    const quote = quotes.filter(quote => { return quote.id === robot.id });
    return(
      <div className='bg-light-green tc dib br3 pa2 ma2 grow bw2 shadow-5'>
        <Quote quote={quote}/>
        <img alt='robot' src={`https://robohash.org/${robot.name}?200x200`}/>
        <div>
          <h2>{robot.name}</h2>
          <p>{robot.email}</p>
          <SpeakButton id={robot.id} hasQuote={quote.length} onClick={onClick} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
