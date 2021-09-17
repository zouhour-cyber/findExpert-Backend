const router = require('express').Router()
const admin = require('./adminController')


 router.post('/admin/signin',admin.signIn)
 router.post('/admin/register',admin.signIn)

 

module.exports = router