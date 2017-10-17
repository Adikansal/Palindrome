# Project Title

Palindrome Checker Demo

## Live Demo

[https://radiant-taiga-17263.herokuapp.com](https://radiant-taiga-17263.herokuapp.com/)

## Getting Started

This application checks whether any permutation of an input string is a palindrome. This application was implemented of Node.js/Express, React/Redux, Bootstrap 4, Mongo DB and is running on Heroku.

### Prerequisites

Please note that PalindromeChecker function can be tested with JSFiddle

[https://jsfiddle.net/ozlongblack/qusu6yL7](https://jsfiddle.net/ozlongblack/qusu6yL7/)


The following recursive function was used for permutation.

```
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
```

The following function was used for palindrome check.

```
isPalindrome(input) {
  return (
    input === input.split('').reverse().join('')
  );
}
```

## Built With

* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [Redux](http://redux.js.org/docs/introduction/) - Predictable state container for JavaScript apps
* [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for node
* [Bootstrap](http://getbootstrap.com/) - Front-end component library

## Here is another example

[https://damp-harbor-16826.herokuapp.com](https://damp-harbor-16826.herokuapp.com/)

Using this application, you can create a survey with sending emails to recipients and collect feedback. This application was implemented of Node.js/Express, React/Redux, Bootstrap 4, Passport.js, Mongo DB, Google OAuth 2.0, Stripe API, Sendgrid API, Chart.js 2

## Authors

* **Kihwan Cho** - *Initial work* - [ozlongblack](https://github.com/ozlongblack)

## License

This project is licensed under Unlicense license. This license does not require you to take the license with you to your project.
