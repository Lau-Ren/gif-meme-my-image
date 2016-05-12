
exports.up = function(knex, Promise) {
   console.log('create tags images table')

  return knex.schema.createTableIfNotExists('images', function(table){
    table.increments()
    table.string('url')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('images')

};
