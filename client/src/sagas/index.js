import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import { api } from '../services';

function* fetchPalindromes() {
  try {
    const res = yield call(api.fetchPalindromes);
    yield put({ type: actions.FETCH_PALINDROMES_SUCCEEDED, payload: res.data });
  } catch (e) {
    yield put({ type: actions.FETCH_PALINDROMES_FAILED, message: e.message });
  }
}

function* addPalindrome(action) {
  try {
    const res = yield call(api.addPalindrome, action.payload);
    yield put({ type: actions.ADD_PALINDROME_SUCCEEDED, payload: res.data });
  } catch (e) {
    yield put({ type: actions.ADD_PALINDROME_FAILED, message: e.message });
  }
}

function* removePalindrome(action) {
  try {
    const res = yield call(api.removePalindrome, action.payload);
    yield put({ type: actions.REMOVE_PALINDROME_SUCCEEDED, payload: res.data });
  } catch (e) {
    yield put({ type: actions.REMOVE_PALINDROME_FAILED, message: e.message });
  }
}

function* watchFetchPalindromes() {
  yield takeEvery(actions.FETCH_PALINDROMES_REQUESTED, fetchPalindromes);
}

function* watchAddPalindrome() {
  yield takeEvery(actions.ADD_PALINDROME_REQUESTED, addPalindrome);
}

function* watchRemovePalindrome() {
  yield takeEvery(actions.REMOVE_PALINDROME_REQUESTED, removePalindrome);
}

function* rootSaga() {
  yield fork(watchFetchPalindromes);
  yield fork(watchAddPalindrome);
  yield fork(watchRemovePalindrome);
}

export default rootSaga;
