import authCtrl from '../controllers/authController'
import tstCtrl from '../controllers/testimonyController'
import express from 'express'

const router = express.Router()

router.route('/api/testimony/create')
  .post(tstCtrl.create, authCtrl.requireSignin)
  
router.route('/api/testimony')
  .get(tstCtrl.list)

router.route('/api/testimony/:testimonyId')
    .delete(authCtrl.requireSignin, tstCtrl.remove)

router.param('testimonyId', tstCtrl.testimonyByID)


export default router
