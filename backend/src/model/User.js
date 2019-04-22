const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    createIndex: true,
    required: true,
    auto: true
  },
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String
})

module.exports = mongoose.model('User', userSchema)
