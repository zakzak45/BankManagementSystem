const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')


const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())








app.listen(4000,()=>{
    console.log("server running at http://localhost:4000")
})