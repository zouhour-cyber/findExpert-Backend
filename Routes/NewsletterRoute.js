const express =require('express')
const router =express.Router()
const newsletter = require('../Controller/NewletterController')

router.post("/addNEWSLETTER", newsletter.addNEWSLETTER);
router.get("/getNEWSLETTER", newsletter.getNEWSLETTER);
router.delete('/deleteNEWSLETTER/:id',newsletter.deleteNEWSLETTER)


module.exports =router