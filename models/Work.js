const mongoose = require('mongoose')

const workSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    technique: {
      type: String,
      trim: true
    },
    date: {
      type: Date
      // Puedes añadir min/max si quieres validar rangos de fecha
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
