const express = require('express')
const router = express.Router()
const upload = require('../utils/upload')
const {
  createWork,
  getAllWorks,
  getWorkById,
  updateWork,
  deleteWork
} = require('../controllers/work.controller')

// Crear obra
router.post('/', upload.single('image'), createWork)

// Obtener todas las obras
router.get('/', getAllWorks)

// Obtener una obra por ID
router.get('/:id', getWorkById)

// Actualizar una obra
router.put('/:id', upload.single('image'), updateWork)

// Eliminar una obra
router.delete('/:id', deleteWork)

module.exports = router
