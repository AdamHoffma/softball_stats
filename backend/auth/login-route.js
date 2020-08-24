const express = require('express')
const bcrypt = require('bcryptjs')
const User = require("./login-model.js")
const router = express.Router()
const jwt = require('jsonwebtoken')
const knex = require('knex')
const knexfile = require('../knexfile.js')
const knexconfig = knexfile.development


router.post('/', (req, res) => {
    let {name} = req.body
    User.findBy({name})
    .then(login => {
        const token = generateToken(login)
        res.status(200).json({message: `Welcome ${login.name}`, token})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

function generateToken(login) {
    const payload = {
        name: login.name
    }
    const secret = "keep it secret, keep it safe"
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secret, options)
}

module.exports = router