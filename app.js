require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Rutas
const artistRoutes = require('./routes/artist.routes')
const workRoutes = require('./routes/work.routes')

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Conexión a MongoDB Atlas
const connectDB = require('./config/db')
connectDB()

// Rutas base
app.use('/api/artists', artistRoutes)
app.use('/api/works', workRoutes)

// Ruta base por defecto
app.get('/', (req, res) => {
  res.send('🎨 Bienvenido a la API de ArtGallery')
})

// Iniciar servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Servidor funcionando en http://localhost:${PORT}`)
})
