const cloudinary = require('../config/cloudinary')

const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath)
}

const deleteImage = async (publicId) => {
  if (!publicId) return
  try {
    await cloudinary.uploader.destroy(publicId)
  } catch (error) {
    console.error('Error al eliminar imagen:', error)
    throw error
  }
}

module.exports = {
  uploadImage,
  deleteImage
}
