
exports.seed = function(knex, promise) {
  return knex('stats').insert([
    {
      PA: 8,
      AB: 5,
      BB: 3,
      K: 1,
      KL: null,
      Hits: 2,
      Double: 1,
      Triple: null,
      HR: 1,
      RBI: 2,
      R: 4,
      SB: 1,
      BA: null,
      SLG: null,
      OBP: null,
      OPS: null
    }
  ])
}