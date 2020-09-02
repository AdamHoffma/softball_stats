// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/stats.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds : {
      directory: './data/seeds'
    }
  },  
  
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      database: "stats",
      user: "user",
      password: "password"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

console.log("PROCESS", process.env.DATABASE_URL)