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

const register = (req, res) => {
  const data = req.body
  if(!data) {
    return res.status(400).json({ message: "Missing Data" })
  } else if (
    !data.
  )
}
