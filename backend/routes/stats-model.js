const db = require('../data/db-config.js')

module.exports = {
    add,
    find,
    
}

function add(stat) {
    return db('stats')
    .insert(stat, 'id')
    .then(ids => {
        const [id] = ids
        return findById(id)
    })
}

function find() {
    return db('stats').select('*')
}