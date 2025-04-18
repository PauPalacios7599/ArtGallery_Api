const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    biography: {
      type: String,
      trim: true
    },
    image: {
      public_id: {
        type: String,
        required: true
      },
      secure_url: {
        type: String,
        required: true
      }
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Artist', artistSchema)
