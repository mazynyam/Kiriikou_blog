import Testimony from '../models/testimonyModel'
import errorHandler from '../helpers/dbErrorHandler'

const create = async (req, res) => {
  const testimony = new Testimony(req.body)
    try {
        await testimony.save()
         return res.status(200).json({
           message:'Thanks for testifying'
         })
      } catch (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
}
const testimonyByID = async (req, res, next, id) => {
    try {
      let testimony = await Testimony.findById(id)
      if (!testimony)
        return res.status('400').json({
          error: "testimony not found"
        })
      req.profile = testimony
      next()
    } catch (err) {
      return res.status('400').json({
        error: "Could not retrieve testimony"
      })
    }
  }
const list = async (req, res) => {
try {
    let testimonys = await testimony.find().select('name email updated created')
    res.json(testimonys)
} catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err)
    })
}
} 
const remove = async (req, res) => {
try {
    let testimony = req.profile
    let deletedtestimony = await testimony.remove()
    res.json(deletedtestimony)
} catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err)
    })
}
}

export default {
    create,
    remove,
    list,
    testimonyByID
}
