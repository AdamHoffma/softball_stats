const express = require('express')
const Schedule = require('./schedule-model.js')
const router = express.Router()
const restricted = require("../auth/auth-middleware.js")


router.get('/', (req, res) => {
    Schedule.find()
        .then(event => {
            res.status(200).json(event)
        })
        .catch(error => {
            res.status(500).json({message: "No Events Found"})
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Schedule.findById(id)
        .then(event => {
            res.status(200).json(event)
        })
        .catch(error => {
            res.status(500).json({message: "No event by that ID"})
        })
})

router.post('/', (req, res) => {
    const eventData = req.body
    Schedule.add(eventData)
        .then(added => {
            res.status(200).json(added)
        })
        .catch(error => {
            res.status(500).json({message: "Failed to Post"})
        })
})

module.exports = router