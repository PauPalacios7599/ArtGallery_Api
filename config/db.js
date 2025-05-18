// config/db.js
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('🟢 Conectado a MongoDB Atlas')
  } catch (err) {
    console.error('🔴 Error conectando a MongoDB:', err)
    process.exit(1) // Cierra la app si falla la conexión
  }
}

module.exports = connectDB
