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

router.get('/:id', (req, res) => {
    const {id} = req.params
    Stats.findById(id)
    .then(player => {
        res.status(200).json(player)
    })
    .catch(error => {
        res.status(500).json({message: "Could not find player with that ID"})
    })
})

module.exports = router