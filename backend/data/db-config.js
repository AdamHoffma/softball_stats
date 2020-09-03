const knex = require('knex')

const knexfile = require('../knexfile.js')

const dbEnv = process.env.DB_ENV || "development"
// const dbEnv = "development"

console.log("dbConfig: ", dbEnv)

module.exports = knex(knexfile[dbEnv])