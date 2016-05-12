const express = require('express')
const path = require('path')

const routes = require('./routes/index')
const defaultArgs = require('./routes/default-route-arguments')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  var args = defaultArgs()
  args.message = err.message
  args.error = err
  res.render('error', args)
})

module.exports = app
