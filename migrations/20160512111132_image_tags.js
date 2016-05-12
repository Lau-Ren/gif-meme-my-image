
exports.up = function(knex, Promise) {

  console.log('create tags image_tags table ')

 return knex.schema.createTableIfNotExists('image_tags', function(table){
    table.integer('img_id')
    table.integer('tag_id')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('image_tags')

};
