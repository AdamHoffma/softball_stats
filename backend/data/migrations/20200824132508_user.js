
exports.up = function(knex) {
  return knex.schema.createTable('login', tbl => {
      tbl.increments()
      tbl.string("name")
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("login")
};
