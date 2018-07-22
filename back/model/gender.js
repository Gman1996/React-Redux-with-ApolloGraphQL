const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StudentGenderSchema = new Schema({
  gender: {
    type: String
  }
});

module.exports = mongoose.model('gender', StudentGenderSchema);
