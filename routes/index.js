const express = require('express')

const router = express.Router()

const { addUser, getUser, updateUser, deleteUser } = require('../controller/index.js')

router.get('/get', getUser)
router.post('/add', addUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
