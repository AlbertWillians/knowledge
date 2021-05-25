module.exports = {
  cliente: 'postgresql',
  connection: {
    database: 'knowledge',
    user: 'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migration'
  }
}