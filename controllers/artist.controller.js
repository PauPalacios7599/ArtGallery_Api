const Artist = require('../models/Artist')
const cloudinary = require('../config/cloudinary')

// Crear artista
const createArtist = async (req, res) => {
  try {
    const { name, biography } = req.body
    const file = req.file

    const result = await cloudinary.uploader.upload(file.path)

    const newArtist = new Artist({
      name,
      biography,
      image: {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
    })

    await newArtist.save()
    res.status(201).json(newArtist)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear artista', error })
  }
}

// Obtener todos los artistas
const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find()
    res.status(200).json(artists)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener artistas', error })
  }
}

// Obtener un artista por ID
const getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id)
    if (!artist)
      return res.status(404).json({ message: 'Artista no encontrado' })
    res.status(200).json(artist)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener artista', error })
  }
}

// Actualizar artista
const updateArtist = async (req, res) => {
  try {
    const { name, biography } = req.body
    const artist = await Artist.findById(req.params.id)

    if (!artist)
      return res.status(404).json({ message: 'Artista no encontrado' })

    // Si hay imagen nueva, borra la anterior
    if (req.file) {
      await cloudinary.uploader.destroy(artist.image.public_id)
      const result = await cloudinary.uploader.upload(req.file.path)
      artist.image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
    }

    artist.name = name || artist.name
    artist.biography = biography || artist.biography

    await artist.save()
    res.status(200).json(artist)
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar artista', error })
  }
}

// Eliminar artista
const deleteArtist = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id)
    if (!artist)
      return res.status(404).json({ message: 'Artista no encontrado' })

    await cloudinary.uploader.destroy(artist.image.public_id)
    res.status(200).json({ message: 'Artista eliminado' })
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar artista', error })
  }
}

module.exports = {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist
}
