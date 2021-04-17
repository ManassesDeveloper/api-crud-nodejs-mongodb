const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')

router.get('/', controller.get)
router.post('/post', controller.post)
router.put('/:id', controller.put)
router.delete('/', controller.delete)



module.exports = router