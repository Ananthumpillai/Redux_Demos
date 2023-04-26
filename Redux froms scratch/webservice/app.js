const express=require('express')
const app= express()
const bodyparser=require('body-parser')
const routes=require('./routes/routing')
const errorLogger=require('./Utilities/errorLogger')
const cors = require("cors")


app.use(cors())
app.use(bodyparser.json())
app.use("/",routes)
app.use(errorLogger)
app.listen(2500)
console.log("server started at 2500");