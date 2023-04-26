const express = require('express')
const router = express.Router()
const service = require('../service/service')
router.get('/setupDb', (req, res, next) => {
    service.setupDb().then((data) => {
        if (data) {
            res.json({ message: "Data inserted successfully" })
        }

    }).catch((err) => {
        next(err)
    })
})

router.get('/login/:username/:password',(req,res,next)=>{
    let username=req.params.username
    let password=req.params.password
    service.login(username,password).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        next(err)
    })
})

module.exports=router