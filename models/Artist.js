const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    biography: String,
    image: {
      public_id: String,
      secure_url: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Artist', artistSchema)
