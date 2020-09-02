const knex = require('knex')

const knexFile = require('../knexfile.js')
const knexfile = require('../knexfile.js')


const dbEnv = process.env.DB_ENV || "development"

console.log("dbConfig: ", dbEnv)

module.exports = knex(knexfile[dbEnv])