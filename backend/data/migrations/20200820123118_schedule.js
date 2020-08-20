
exports.up = function(knex) {
  return knex.schema.createTable('schedule', tbl => {
      tbl.increments()
      tbl.string("name")
      tbl.string("location")
      tbl.string("time")
      tbl.string("arrival")
      tbl.string("date")
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("schedule")
};
