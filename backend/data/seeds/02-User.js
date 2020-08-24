
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').insert([
    {
      name: "Adam Hoffman"
    }
  ])
}
    
