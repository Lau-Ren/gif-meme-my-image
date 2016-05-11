const express = require('express')
const router = express.Router()

const args = {
  title: 'Gif Meme My Image!',
  author: 'Pearl, Lauren, Nick, Jenny, and Broc'
}

router.get('/', function (req, res, next) {
  res.render('index', )
})

module.exports = router
