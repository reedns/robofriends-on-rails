import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  TOGGLE_QUOTE_HIDE,
  TOGGLE_QUOTE_SHOW,
  TOGGLE_QUOTE_FAILED
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('/api/robofriends')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
}

export const toggleQuote = (id) => (dispatch, getState) => {
  const displayedQuote = getState().toggleQuote.quotes.filter(quote => {
    return quote.id === parseInt(id)
  });

  if (displayedQuote.length) {
    dispatch({ type: TOGGLE_QUOTE_HIDE, payload: id });
  } else {
    fetch(`/api/robofriends/${id}/speech`)
      .then(response => response.json())
      .then(data => dispatch({ type: TOGGLE_QUOTE_SHOW, payload: data }))
      .catch(error => dispatch({ type: TOGGLE_QUOTE_FAILED, payload: error  }))
  }
}
