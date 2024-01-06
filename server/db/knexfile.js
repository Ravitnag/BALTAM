const {DB_HOST, DB_PORT, USER_DB, PASSWORD_DB, DB_NAME} = require('../server.config')

module.exports = {
    client: 'pg',
    connection: {
      host: DB_HOST,
      user: USER_DB,
      password: PASSWORD_DB,
      database: DB_NAME,
      port: DB_PORT,  
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations', // Optional: Specify the directory for migrations
    },
    seeds: {
      directory: './seeds', // Optional: Specify the directory for seeds
    },
  };