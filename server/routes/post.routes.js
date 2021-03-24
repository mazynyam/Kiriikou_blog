import express from 'express'
import postCtrl from '../controllers/postController'
import authCtrl from '../controllers/authController'

const router = express.Router()

router.route('/api/post/create')
  .post(postCtrl.create, authCtrl.requireSignin)
  
router.route('/api/post')
  .get(postCtrl.list)

router.route('/api/posts/:postId')
    .get(postCtrl.read)
    .put(authCtrl.requireSignin, postCtrl.update)
    .delete(authCtrl.requireSignin, postCtrl.remove)

router.param('postId', postCtrl.postByID)

export default router