const express = require('express')
const router = express.Router()
const upload = require('../utils/upload')
const {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist
} = require('../controllers/artist.controller')

// Crear artista
router.post('/', upload.single('image'), createArtist)

// Obtener todos los artistas
router.get('/', getAllArtists)

// Obtener artista por ID
router.get('/:id', getArtistById)

// Actualizar artista
router.put('/:id', upload.single('image'), updateArtist)

// Eliminar artista
router.delete('/:id', deleteArtist)

module.exports = router
