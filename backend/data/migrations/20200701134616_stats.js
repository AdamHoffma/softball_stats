
exports.up = function(knex) {
  return knex.schema.createTable('stats', tbl => {
      tbl.increments()
      tbl.integer("PA")
      tbl.integer("AB")
      tbl.integer("BB")
      tbl.integer("K")
      tbl.integer("KL")
      tbl.integer("Hits")
      tbl.integer("2B")
      tbl.integer("3B")
      tbl.integer("HR")
      tbl.integer("RBI")
      tbl.integer("R")
      tbl.integer("SB")
      tbl.decimal("BA")
      tbl.decimal("SLG")
      tbl.decimal("OBP")
      tbl.decimal("OPS")
  })
  .createTable('players', tbl => {
    tbl.increments()
    tbl.string("name").notNullable()
    // Foreign Key
    tbl
      .integer('stats_id')
      .unsigned()
      .references('id')
      .inTable('stats')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('players')
    .dropTableIfExists('stats')
};
