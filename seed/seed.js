// seed/seed.js
require('dotenv').config()
const mongoose = require('mongoose')
const Artist = require('../models/Artist')

const seedArtists = [
  {
    name: 'Frida Kahlo',
    biography:
      'Pintora mexicana reconocida por sus autorretratos y obras inspiradas en la naturaleza y arte popular mexicano.',
    image: {
      public_id: '',
      secure_url: ''
    }
  },
  {
    name: 'Vincent van Gogh',
    biography:
      'Pintor postimpresionista neerlandés famoso por su uso del color y pinceladas expresivas.',
    image: {
      public_id: '',
      secure_url: ''
    }
  },
  {
    name: 'Salvador Dalí',
    biography:
      'Artista surrealista español conocido por sus imágenes oníricas y su bigote icónico.',
    image: {
      public_id: '',
      secure_url: ''
    }
  }
]

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('🟢 Conectado a MongoDB')

    await Artist.deleteMany() // Limpia colección
    console.log('🧹 Artistas eliminados')

    await Artist.insertMany(seedArtists)
    console.log('🌱 Artistas insertados correctamente')

    mongoose.disconnect()
    console.log('🔌 Desconectado de MongoDB')
  } catch (error) {
    console.error('❌ Error durante el seed:', error)
  }
}

seedDB()
