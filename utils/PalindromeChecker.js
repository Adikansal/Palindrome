class PalindromeChecker {
  constructor(input) {
    this.input = input;
    this.result = false;
  }

  isPalindrome(input) {
    return (
      input ===
      input
        .split('')
        .reverse()
        .join('')
    );
  }

  permutate(arr = this.input.split(''), permuted = []) {
    if (arr.length === 0) {
      const palindrome = this.isPalindrome(permuted.join(''));
      if (!this.result && palindrome) {
        this.result = palindrome;
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (this.result) {
          return this.result;
        }
        const current = [...arr];
        const next = current.splice(i, 1);
        this.permutate(current, permuted.concat(next));
      }
    }
    if (!this.result) {
      return this.result;
    }
  }
}

module.exports = PalindromeChecker;
