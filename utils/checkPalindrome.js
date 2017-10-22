const checkPalindrome = str => {
  const hash = {};
  for (let value of str) {
    if (!hash[value]) {
      hash[value] = 1;
    } else {
      hash[value]++;
    }
  }
  let count = 0;
  for (let i in hash) {
    if (hash[i] % 2 !== 0) {
      count++;
    }
  }
  if (str.length % 2 === 0 && count === 0) {
    return true;
  }
  if (str.length % 2 !== 0 && count === 1) {
    return true;
  }
  return false;
};

module.exports = checkPalindrome;
