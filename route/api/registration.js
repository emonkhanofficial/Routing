const express = require ("express");
const router = express.Router();



router.use('/registration',(req,res)=>{

res.json('ami registration')


})

module.exports = router