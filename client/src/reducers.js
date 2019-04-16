import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  TOGGLE_QUOTE_HIDE,
  TOGGLE_QUOTE_SHOW,
  TOGGLE_QUOTE_FAILED
} from './constants';

const initialStateSearch = {
  searchField: ''
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

const initialStateQuote = {
  isPending: false,
  quotes: [],
  error: '',
}

export const searchRobots = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isPending: false })
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default:
      return state;
  }
}

export const toggleQuote = (state=initialStateQuote, action={}) => {
  switch(action.type) {
    case TOGGLE_QUOTE_HIDE:
      return {...state, quotes: state.quotes.filter(q => { return q.id !== parseInt(action.payload) }) };
    case TOGGLE_QUOTE_SHOW:
      return {
        ...state,
        quotes: state.quotes.concat(action.payload),
      }
    case TOGGLE_QUOTE_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
