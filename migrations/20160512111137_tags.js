
exports.up = function(knex, Promise) {
    console.log('create tags table')

  return knex.schema.createTableIfNotExists('tags', function(table){
    table.increments('')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tags')
};
