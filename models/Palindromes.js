const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const palindromesSchema = new Schema({
  string: String,
  isPalindrome: Boolean,
  date: Date
});

mongoose.model('palindromes', palindromesSchema);
