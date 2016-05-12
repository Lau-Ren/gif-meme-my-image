const express = require('express')
const router = express.Router()

const defaultArgs = require('./default-route-arguments')

router.get('/', function (req, res, next) {
  var args = defaultArgs()
  res.render('index', args)
})

module.exports = router
