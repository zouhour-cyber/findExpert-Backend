const express =require('express')
const router =express.Router()
const PUB = require('../Controller/publicationController')

router.post("/addPUB", PUB.addPUB);
router.get("/getPUB", PUB.getPUB);
router.delete('/deletePUB/:id',PUB.deletePUB)
router.put('/updatePUB/:id',PUB.updatePUB)
router.get('/getPUBbyId/:id',PUB.getPUBbyId)





module.exports =router