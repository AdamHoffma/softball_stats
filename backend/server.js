const express = require("express")
const server = express()
const router = express.Router()
const statsRouter = require('./routes/stats-router.js')
const cors = require('cors')
const creds = require('./config')
var nodemailer = require('nodemailer')


var transport = {
    host: 'smtp.mail.yahoo.com',
    port: 587,    
    auth: {
        user: creds.USER,
        pass: creds.PASS
    },
    logger: true    
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Server is ready to take messages")
    }
})

const contactRouter = router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message}`

    var mail = {
        from: creds.USER,
        to: "wintros@yahoo.com",
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) { console.log("ERR", err)
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

server.use(express.json())
server.use(cors())
server.use('/api/stats', statsRouter)
server.use("/", contactRouter)


server.get("/", (req, res) => {
    res.send("api is up")
})

module.exports = server