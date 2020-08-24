const db = require('../data/db-config.js')

module.exports = {
    findBy
}

function findBy(id) {
    return db('user').where(id).first()
}