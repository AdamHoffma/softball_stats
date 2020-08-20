const db = require('../data/db-config.js')

module.exports = {
    add,
    find,
    findById,
    edit,
    remove
}

function add(event) {
    return db('schedule')
        .insert(event, "id")
}

function find() {
    return db('schedule').select("*")
}

function findById(id) {
    return db("schedule").where("id", id).first()
}

function edit(id, change) {
    return db("schedule").where({id}).update(change)
}

function remove(id) {
    return db('schedule').where("id", id).del()
}