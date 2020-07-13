const express = require("express")
const server = express()
const statsRouter = require('./routes/stats-router.js')
const cors = require('cors')

server.use(express.json())
server.use(cors())
server.use('/api/stats', statsRouter)

server.get("/", (req, res) => {
    res.send("api is up")
})

module.exports = server