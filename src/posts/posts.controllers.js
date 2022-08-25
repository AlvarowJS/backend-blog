const uuid = require("uuid")

const postDB = [{
  
}]

const getAllPosts = () => {
  return postDB
}

const getPostById = (id) => {
  const data = postDB.filter((item) => item.id === id)

  return data.length ? data[0] : false
}

const createPost = (data) => {
  const newPost = {
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    header_image: data.header_image,
    user_id: data.user_id,
    published: true
  }
  postDB.push(newPost)
  return newPost
}

const editPost = (id, data, postRol) => {
  const index = postDB.findIndex((post) => post.id === id)
  if(index !== -1) {
    postDB[index] = {
      id: id,
      title: data.title,
      content: data.content,
      header_image: data.header_image,
      user_id: data.user_id,
      published: true
    }
    return postDB[index]
  } else {
    return createPost(data)
  }
}

const deletePost = (id) => {
  const index = postDB.findIndex(post => post.id ===id)
  if(index !== -1){
    postDB.splice(index, 1)
    return true
  } else {
    return false
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  deletePost
}
