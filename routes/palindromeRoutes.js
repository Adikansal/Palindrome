const mongoose = require('mongoose');
const Palindrome = mongoose.model('palindromes');
const PalindromeChecker = require('../utils/PalindromeChecker');

module.exports = app => {
  app.get('/api/palindromes', async (req, res) => {
    const list = await Palindrome.find({}).sort({ date: -1 });

    res.send(list);
  });

  app.post('/api/palindromes', async (req, res) => {
    const { string } = req.body;
    const palindromeChecker = new PalindromeChecker(string);

    const palindrome = new Palindrome({
      string,
      isPalindrome: palindromeChecker.permutate(),
      date: Date.now()
    });

    await palindrome.save();
    res.send(palindrome);
  });

  app.delete('/api/palindromes/:id', async (req, res) => {
    const { id } = req.params;

    const removed = await Palindrome.findOneAndRemove({ _id: id });
    res.send(removed);
  });
};
