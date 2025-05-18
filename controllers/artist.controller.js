const Artist = require('../models/Artist')
const { uploadImage, deleteImage } = require('../utils/cloudinary')

// Crear artista
const createArtist = async (req, res) => {
  try {
    const { name, biography } = req.body
    const image = await uploadImage(req.file?.path)

    const newArtist = new Artist({
      name,
      biography,
      image
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

    if (req.file) {
      await deleteImage(artist.image.public_id)
      const image = await uploadImage(req.file.path)
      artist.image = image
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

    await deleteImage(artist.image.public_id)
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
