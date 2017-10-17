import { combineReducers } from 'redux';
import palindromeReducer from './palindromeReducer';

const rootReducer = combineReducers({
  palindromes: palindromeReducer
});

export default rootReducer;
