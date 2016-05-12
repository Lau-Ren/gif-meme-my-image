const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', {})
})

router.get('/images', function (req, res, next) {
  res.render('images', args)
  console.log(req.query)
})

router.get('/image-single', function (req, res, next) {
  res.render('image-single', args.images[0])
  console.log(req.query)
})

module.exports = router

var args = {
  images: [
    {
      id: 1,
      url: "http://www.kurgoblog.com/wp-content/uploads/2014/01/Dogsnow.jpg",
      description: 'Dog playing fetch in the powder.',
      tags: [{name: 'dog'}, {name: 'frisbee'}, {name: 'snow'}]
    },
    {
      id: 2,
      url: "http://media.treehugger.com/assets/images/2012/07/20120716-snow-leopard.jpg.662x0_q70_crop-scale.jpg",
      description: 'Snow leopard with a huge tail',
      tags: [{name: 'snow'}, {name: 'leopard'}, {name: 'tail'}, {name: 'cat'}]
    }
  ]
}







