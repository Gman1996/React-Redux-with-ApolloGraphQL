const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StudentInfoSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  grade: {
    type: Number
  },
  gender: {
    type: String
  }
});

module.exports = mongoose.model('student', StudentInfoSchema);
