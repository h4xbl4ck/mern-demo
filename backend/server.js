const express = require('express')
//const bodyParser = require('body-parser') //Not neede in new express
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.json()) // except app.use(bodyParser.json()) 

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true })

const connection = mongoose.connection;

connection.once('open',() =>{
    console.log("MOngodb connection successfully")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})