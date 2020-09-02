var pg = require('pg')
require('dotenv').config();

const server = require("./server.js")

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`\n=== server listening on port ${port} ===\n`)
})

