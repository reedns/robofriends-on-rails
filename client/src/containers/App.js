import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../actions'
import './App.css';

const mapStateToProps = (state) => {
  return { searchField: state.searchField }
}

const mapDispatchToProps = (dispatch) => {
  return { onSearchChange: (event) => dispatch(setSearchField(event.target.value)) }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: [],
      quote: {}
    }
  }

  componentDidMount() {
    console.log(this.props)
    fetch('/api/robofriends')
      .then(response => response.json())
      .then(robofriends => this.setState({ robots: robofriends }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return(
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
