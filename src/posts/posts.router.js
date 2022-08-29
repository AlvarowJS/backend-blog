const passport = require("passport")
const router = require("express").Router()

const postServices = require('./posts.http')

router.route('/') 
  .get(postServices.getAll)
  .post(postServices.register)

router.route('/:id')
  .get(postServices.getById)

exports.router = router
