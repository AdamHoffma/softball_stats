
exports.up = function(knex) {
  return knex.schema.createTable('stats', tbl => {
      tbl.increments()
      tbl.string("Player").notNullable()
      tbl.integer("PA")
      tbl.integer("AB")
      tbl.integer("BB")
      tbl.integer("K")
      tbl.integer("KL")
      tbl.integer("Hits")
      tbl.integer("Double")
      tbl.integer("Triple")
      tbl.integer("HR")
      tbl.integer("RBI")
      tbl.integer("R")
      tbl.integer("SB")
      tbl.integer("BA")
      tbl.integer("SLG")
      tbl.integer("OBP")
      tbl.integer("OPS")
      tbl.string("bio")
      tbl.string("image")
  })  
};

exports.down = function(knex) {
  return knex.schema    
    .dropTableIfExists('stats')
};
