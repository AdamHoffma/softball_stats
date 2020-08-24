const db = require('../data/db-config.js')

module.exports = {
    findBy
}

function findBy(id) {
    return db('users').where(id)
}