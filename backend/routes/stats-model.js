const db = require('../data/db-config.js')

module.exports = {
    add,
    find,
    findById,
    edit,
    remove
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

function findById(id){
    return db('stats').where("id", id).first()
}

function edit(){

}

function remove(){
    
}