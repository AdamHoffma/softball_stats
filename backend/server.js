const express = require("express")
const server = express()
const statsRouter = require('./routes/stats-router.js')

server.use(express.json())
server.use('/api/stats', statsRouter)

server.get("/", (req, res) => {
    res.send("api is up")
})

module.exports = server