const router = require('express').Router()
const expert = require('./ExpertController')


router.post('/register',expert.register)
router.post('/signin',expert.signIn)
router.put('/validate/:id',expert.validation)
router.get('/getEXPERT',expert.getExpert)
router.get('/getEXPERTbyId/:id',expert.getExpertbyId)





module.exports =router