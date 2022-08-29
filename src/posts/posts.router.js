const passport = require("passport")
const router = require("express").Router()

const postServices = require('./posts.http')

router.route('/') 
  .get(postServices.getAll)
  .post(postServices.register)

router.route('/me')
  .get(passport.authenticate('jwt', {session: false}), postServices.getUserPost)
  .delete(passport.authenticate('jwt', {session: false}), postServices.removeMyPost)

router.route('/:id')
  .get(postServices.getById)

exports.router = router
