const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema
const studentSchema = new Schema({
  firstname:{
    type: String,
    required:'kindly enter the an alphabet'
  },
  lastname:{
    type: String,
    required:'kindly enter the an alphabet'
  },
  dob:{
    type: Date,
    default: Date.now
  },
  address:{
    type: String,
    required:'kindly enter the an alphabet'
  },
  sex:{
    type: String,
    required:'kindly enter the an alphabet'
  },
  class:{
    type: String,
    required:'kindly enter the an alphabet'
  },
});
// create a model

const Student = mongoose.model('studentBio', studentSchema);

module.exports = Student;
