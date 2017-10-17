import * as actions from '../actions';

export default function(state = [], action = {}) {
  switch (action.type) {
    case actions.FETCH_PALINDROMES_SUCCEEDED:
      return [...action.payload];
    case actions.FETCH_PALINDROMES_FAILED:
      return state;
    case actions.ADD_PALINDROME_SUCCEEDED:
      return [action.payload, ...state];
    case actions.ADD_PALINDROME_FAILED:
      return state;
    case actions.REMOVE_PALINDROME_SUCCEEDED:
      return state.filter(item => item._id !== action.payload._id);
    case actions.REMOVE_PALINDROME_FAILED:
      return state;
    default:
      return state;
  }
}
