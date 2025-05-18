const Work = require('../models/Work')
const { uploadImage, deleteImage } = require('../utils/cloudinary')

// Crear obra
const createWork = async (req, res) => {
  try {
    const { title, technique, date, artist } = req.body
    const image = await uploadImage(req.file?.path)

    const newWork = new Work({
      title,
      technique,
      date,
      artist,
      image
    })

    await newWork.save()
    res.status(201).json(newWork)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear obra', error })
  }
}

// Obtener todas las obras
const getAllWorks = async (req, res) => {
  try {
    const works = await Work.find().populate('artist')
    res.status(200).json(works)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener obras', error })
  }
}

// Obtener una obra por ID
const getWorkById = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id).populate('artist')
    if (!work) return res.status(404).json({ message: 'Obra no encontrada' })

    res.status(200).json(work)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener obra', error })
  }
}

// Actualizar obra
const updateWork = async (req, res) => {
  try {
    const { title, technique, date, artist } = req.body
    const work = await Work.findById(req.params.id)

    if (!work) return res.status(404).json({ message: 'Obra no encontrada' })

    if (req.file) {
      await deleteImage(work.image.public_id)
      const image = await uploadImage(req.file.path)
      work.image = image
    }

    work.title = title || work.title
    work.technique = technique || work.technique
    work.date = date || work.date
    work.artist = artist || work.artist

    await work.save()
    res.status(200).json(work)
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar obra', error })
  }
}

// Eliminar obra
const deleteWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndDelete(req.params.id)
    if (!work) return res.status(404).json({ message: 'Obra no encontrada' })

    await deleteImage(work.image.public_id)
    res.status(200).json({ message: 'Obra eliminada' })
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar obra', error })
  }
}

module.exports = {
  createWork,
  getAllWorks,
  getWorkById,
  updateWork,
  deleteWork
}
