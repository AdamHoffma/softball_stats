exports.seed = function(knex, promise) {
  return knex('players').insert([
    {
      stats_id: 1,
      name: "Annika Spilde"
    }
  ])
}