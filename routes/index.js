const express = require('express')
const router = express.Router()
const dbCall = require('../lib/dbfunc')


router.get('/', function (req, res, next) {
  dbCall.getAllImgs()
    .then(function (images) {
      res.render('index', {"images": images})
    })
})

router.get('/images', function (req, res, next) {
  var tag
  if (req.query.hasOwnProperty('tagname')) {
    tag = req.query.tagname
  } else {
    res.redirect('/')
  }
  dbCall.selectByHashtag(tag)
    .then(function (images) {
      res.render('images', { "images": images })
    })

})

router.get('/image-single', function (req, res, next) {
  dbCall.getAllTagsForImg(req.query.id)
    .then(function(tags) {
      req.query.tags = tags
      res.render('image-single', req.query)
    })
  })

module.exports = router








