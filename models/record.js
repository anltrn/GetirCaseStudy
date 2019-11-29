//required library
const mongoose = require('mongoose')

//our model
const recordSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  createdAt : {
    type: Date,
    required: true
  },
  counts : {
      type : Array,
      required : true
  }
})

module.exports = mongoose.model('records', recordSchema)