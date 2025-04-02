const mongoose = require('mongoose')

const workSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    technique: String,
    date: Date,
    image: {
      public_id: String,
      secure_url: String
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Work', workSchema)
