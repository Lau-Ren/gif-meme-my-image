const express = require('express')
const router = express.Router()
const dbCall = require('../lib/dbfunc')
const bodyParser = require('body-parser')

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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


router.get('/image-add', function (req, res, next) {
  res.render("submit", {})

})

router.post('/image-add', function(req, res, next) {
  console.log(req.body)

})


module.exports = router
