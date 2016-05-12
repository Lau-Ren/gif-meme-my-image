
exports.up = function(knex, Promise) {
  console.log('create tags idIndex table ')

 return knex.schema.createTableIfNotExists('idIndex', function(table){
    table.integer('img_id')
    table.integer('tag_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('idIndex')
};
