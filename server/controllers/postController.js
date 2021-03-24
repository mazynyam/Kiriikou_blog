import Post from '../models/postModel'
import errorHandler from '../helpers/dbErrorHandler'

const create = (req, res)=>{
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          message: "Image could not be uploaded"
        })
      }
      let post = new Post(fields)
      post= req.post
      if(files.image){
        post.image.data = fs.readFileSync(files.image.path)
        post.image.contentType = files.image.type
      }
      
      try {
        let result = await post.save()
        res.json(result)
      } catch (err){
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
    })
}
const postByID = async (req, res, next, id) => {
try {
    let post = await Post.findById(id)
    if (!Post)
    return res.status('400').json({
        error: "Post not found"
    })
    req.post = post
    next()
} catch (err) {
    return res.status('400').json({
    error: "Could not retrieve post"
    })
}
}
  
const photo = (req, res, next) => {
if(req.post.image.data){
    res.set("Content-Type", req.post.image.contentType)
    return res.send(req.post.image.data)
}
next()
}
const defaultPhoto = (req, res) => {
return res.sendFile(process.cwd()+defaultImage)
}
  
const read = (req, res) => {
req.post.image = undefined
return res.json(req.post)
}
const update = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          message: "Photo could not be uploaded"
        })
      }
      let product = req.product
      product = extend(product, fields)
      product.updated = Date.now()
      if(files.image){
        post.image.data = fs.readFileSync(files.image.path)
        post.image.contentType = files.image.type
      }
      try {
        let result = await post.save()
        res.json(result)
      }catch (err){
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
    })
  }
  
const remove = async (req, res) => {
try{
    let post = req.post
    let deletedPost = await post.remove()
    res.json(deletedPost)

} catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err)
    })
}
}
  
const list = async (req, res) => {
    try {
      let posts = await Post.find().select('title content image postDate creator')
      res.json(posts)
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
}
export default {
    create,
    update,
    remove,
    photo,
    defaultPhoto,
    read,
    postByID,
    list
}