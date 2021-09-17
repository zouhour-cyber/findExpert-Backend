const express =require('express')
const router =express.Router()
const RDV = require('../Controller/RDVController')

router.post("/addRDV", RDV.addRDV);
router.get("/getRDV", RDV.getRDV);
router.delete('/deleteRDV/:id',RDV.deleteRDV)
router.put('/updateRDV/:id',RDV.updateRDV)




module.exports =router