const knex = require('knex')

const knexfile = require('../knexfile.js')

const dbEnv = process.env.DB_ENV || "development"

console.log("dbConfig: ", dbEnv)

module.exports = knex(knexfile[dbEnv])