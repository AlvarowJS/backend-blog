const postControllers = require("./posts.controllers")

const getAll = (req, res) => {
  const data = postControllers.getAllPosts()
  res.status(200).json({ item: data.length, users: data })
}

const getById = (req, res) => {
  const id = req.params.id
  const data = postControllers.getPostById(id)

  if(data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ message: `El post con el id ${id} no existe` })
  }
}

const getUserPost = (req, res) => {
  const userID = req.user.id
  const data = postControllers.getAllPosts().filter(post => post.user_id === userID)
  res.status(200).json(data)
}

const register = (req, res) => {
  const data = req.body
  if(!data) {
    return res.status(400).json({ message: "Missing Data" })
  } else if (
    !data.title ||
    !data.content ||
    !data.user_id 
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        title: "string",
        content: "text",
        user_id: "uuid" 
      }
    })
  } else {
    const response = postControllers.createPost(data)
    return res
      .status(201)
      .json({
        message: `Post created succesfully with id: ${response.id}`,
        post: response
      })
  }
}

const removeMyPost = (req, res) => {
  const id = req.user.id
  const data = postControllers.deletePost(id)
  if(data){
    res.status(204).json()
  } else {
    res.status(400).json({message: 'invalid id'})
  }
}

module.exports = {
  getAll,
  getById,
  register,
  removeMyPost,
  getUserPost
}
