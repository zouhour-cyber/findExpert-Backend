const router = require('express').Router()
const user = require('./userController')


router.post('/register',user.register)
router.post('/signin',user.signIn)
router.get('/getuser',user.getuser)
router.put('/updateUser/:id',user.updateUser)
router.delete('/deleteUser/:id',user.deleteUser)
router.get('/getUserbyId/:id',user.getUserbyId)



module.exports =router