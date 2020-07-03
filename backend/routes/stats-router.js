const express = require('express')
const Stats = require('./stats-model.js')
const router = express.Router()
const knex = require('knex')
const knexfile = require('../knexfile.js')
const knexConfig = knexfile.development
const db = knex(knexConfig)

router.get('/', (req, res) => {
    Stats.find()
        .then(stats => {
            res.status(200).json(stats)
        })
        .catch(error => {
            res.status(500).json({message: "Can't retieve statistics"})
        })
})

module.exports = router