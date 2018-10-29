var express = require('express')
  , router = express.Router()

router.use('/', require('./index'))
//router.use('/users', require('./users'))

router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router