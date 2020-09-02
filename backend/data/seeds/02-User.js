
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('login').insert([
    {
      name: "Adam Hoffman"
    }
  ])
}
    
