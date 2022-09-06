const express = require('express')
const router = express.Router()
const menuController = require('../controllers/menu')

// @ Route /menu 
// From server.js

router.get('/', menuController.getMenu)

router.post('/add', menuController.createMenuItem)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router