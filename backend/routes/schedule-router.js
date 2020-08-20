const express = require('express')
const Schedule = require('./schedule-model.js')
const router = express.Router()


router.get('/', (req, res) => {
    Schedule.find()
        .then(event => {
            res.status(200).json(event)
        })
        .catch(error => {
            res.status(500).json({message: "No Events Found"})
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