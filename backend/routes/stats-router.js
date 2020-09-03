const express = require('express')
const cors = require('cors')
const Stats = require('./stats-model.js')
const router = express.Router()
const knex = require('knex')
const knexfile = require('../knexfile.js')
const knexConfig = knexfile.development
const db = knex(knexConfig)
const datab = require('../data/db-config.js')
const restricted = require("../auth/auth-middleware.js")

router.get('/', (req, res) => {
    Stats.find()
        .then(stats => {
            res.status(200).json(stats)
        })
        .catch(error => {
            res.status(500).json({message: "Can't retrieve statistics"})
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

router.delete("/:id", restricted, (req, res) => {
    const {id} = req.params
    Stats.remove(id)
    .then(removed => {
        if(removed) {
            return res.end("Deleted")
        } else {
            res.status(404).json({message: "Could not delete"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Could not delete, server error"})
    })
})

router.put('/:id', restricted, (req, res) => {    
    const { id } = req.params    
    const change = req.body
    console.log("change", change)
    Stats.findById(id)
    .then(stat => {
        if(stat) {
            return Stats.updateRecord(id, change)
            .then(updatedStats => {
                res.status(200).json(updatedStats)
            })
        } else {
            res.status(404).json({message: "Could not find player with that id"})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "Failed to update"})
    })
})

router.post('/',  (req, res) => {
    console.log("token", req.headers.authorization)
    const playerData = req.body
    Stats.add(playerData)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(error => {
            console.log("error", error)
            res.status(500).json({message: "Failed to Post"})
        })
})

module.exports = router