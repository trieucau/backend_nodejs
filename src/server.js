// const { createServer } = require('node:http');

const express = require('express')
const path = require('path')
require('dotenv').config()
const configviewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT

//rep.body
app.use(express.json()); //from to json
app.use(express.urlencoded({ extended: true })) //form to data array or string

//cau hinh view engin
configviewEngine(app);


//khai bao routes
app.use('/', webRoutes)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
