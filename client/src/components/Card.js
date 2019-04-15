import React, { Component } from 'react';
import SpeakButton from './SpeakButton';
import Quote from './Quote';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = { quote: '', displayText: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.state.displayText) {
      this.setState({ quote: '', displayText: false });
    } else {
      fetch(`/api/robofriends/${this.props.robot.id}/speech`)
        .then(response => response.json())
        .then(response =>
          this.setState({ quote: response.quote, displayText: true })
        );
    }
  }

  render() {
    const { robot } = this.props
    const { quote, displayText } = this.state
    return(
      <div className='bg-light-green tc dib br3 pa2 ma2 grow bw2 shadow-5'>
        <Quote quote={quote}/>
        <img alt='robot' src={`https://robohash.org/${robot.name}?200x200`}/>
        <div>
          <h2>{robot.name}</h2>
          <p>{robot.email}</p>
          <SpeakButton id={robot.id} displayText={displayText} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Card;
