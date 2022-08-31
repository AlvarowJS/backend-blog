const passport = require("passport")
const router = require("express").Router()

const postServices = require('./posts.http')

router.route('/') 
  .get(postServices.getAll)
  .post(postServices.register)

router.route('/me')
  .get(passport.authenticate('jwt', {session: false}), postServices.getUserPost)

router.route('/me/:id')
  .get(passport.authenticate('jwt', {session: false}), postServices.getByIdPost)
  .delete(passport.authenticate('jwt', {session: false}), postServices.removeMyPost)
  .put(passport.authenticate('jwt', {session: false}), postServices.editPost)

router.route('/:id')
  .get(postServices.getById)

exports.router = router
