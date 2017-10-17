import axios from 'axios';

export const api = {
  fetchPalindromes() {
    return axios.get('/api/palindromes');
  },
  addPalindrome(string) {
    return axios.post('/api/palindromes', { string });
  },
  removePalindrome(id) {
    return axios.delete(`/api/palindromes/${id}`);
  }
};
