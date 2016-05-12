var Knex = require('knex')

var config = {
  database: {
    dialect:  'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },
  directory: __dirname + '/migrations',
  tableName: 'migrations'
}

var knex = Knex(config.database)

module.exports = {
  knex: knex,
  config: config
}
