const express =require('express')
const router =express.Router()
const contact = require('../Controller/contactController')

router.post("/addCONTACT", contact.addCONTACT);
router.get("/getCONTACT", contact.getCONTACT);
router.delete('/deleteCONTACT/:id',contact.deleteCONTACT)
router.put('/updateCONTACT/:id',contact.updateCONTACT)


module.exports =router